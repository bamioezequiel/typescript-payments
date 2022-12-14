import axios from "axios";
import { Request, Response, Router } from "express";
import { checkoutMercadoPago } from "../controllers/mercadopago.controllers";
import OrderModel from "../models/order.models";

const router = Router();

router.post("/mp", checkoutMercadoPago);
router.post("/mp/notification", async (req: Request, res: Response) => {
  try {
    res.status(200).send("ok");

    const { id } = req.body.data;
    const infoPayment: any = await axios.get(
      `https://api.mercadopago.com/v1/payments/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN_MP}`,
        },
      }
      );
      console.log(infoPayment);
   
    res.json("ok");
  } catch (error) {
    console.log(error);
  }
});

export default router;
