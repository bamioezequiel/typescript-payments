import axios from "axios";
import { Request, Response, Router } from "express";
import { checkoutMercadoPago } from "../controllers/mercadopago.controllers";
import OrderModel from "../models/order.models";

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
          const order = await OrderModel.findOne({_id: orderId});
          console.log(order);

          if (status === "approved") {
            console.log(
              "Email1 ",
              infoPago.data.additional_info.items[0].description,
              "paid"
            );
          } else {
            console.log(
              "Email2 ",
              infoPago.data.additional_info.items[0].description,
              "cancel"
            );
          }
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
