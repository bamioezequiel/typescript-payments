import axios from "axios";
import { Request, Response, Router } from "express";
import { checkoutMercadoPago } from "../controllers/mercadopago.controllers";
import OrderModel from "../models/order.models";
import CoinModel from "../models/coin.models";
import UserModel from "../models/user.models";

const router = Router();

router.post("/mp", checkoutMercadoPago);
router.post("/mp/notification", async (req: Request, res: Response) => {
  res.status(200).send("ok");
  if (req.body.action === "payment.created") {
    const fetch = async (body: any) => {
      try {
        console.log(body.data.id);
        const infoPago = await axios.get(
          "https://api.mercadopago.com/v1/payments/" + body.data.id,
          {
            headers: {
              Authorization: `Bearer ${process.env.ACCESS_TOKEN_MP}`,
            },
          }
        );
        let status = infoPago.data.status;

        if (status === "approved" || status === "cancel") {
          const orderId = infoPago.data.additional_info.items[0].description;
          await OrderModel.findOneAndUpdate(
            {
              _id: orderId,
            },
            { status }
          );
          const order: any = await OrderModel.findOne({ _id: orderId });
          const user: any = await UserModel.findOne({email: order.userId});
          const userCoins: any = await CoinModel.findOne({userId: user._id});
          console.log(userCoins);
          await CoinModel.findOneAndUpdate({userId: user._id}, {amount: (userCoins.amount + order.amount)});
          
          console.log(await CoinModel.findOne({userId: user._id}))
        }
      } catch (error) {
        res.status(400).send("algo fallo");
      }
    };
    fetch(req.body).catch(function (e) {
      console.log(e);
    });
  } else {
  }
});

export default router;
