import axios from "axios";
import { Request, Response, Router } from "express";
import { checkoutMercadoPago } from "../controllers/mercadopago.controllers";
import OrderModel from "../models/order.models";

const router = Router();

router.post("/mp", checkoutMercadoPago);
router.post("/mp/notification", async (req: Request, res: Response) => {
  const { id } = req.body.data;
  const infoPayment: any = await axios.get(
    `https://api.mercadopago.com/v1/payments/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN_MP}`,
      },
    }
  );
  if (
    infoPayment.data.status === "approved" ||
    infoPayment.data.status === "cancel"
  ) {    
    console.log(infoPayment);
  }
  //compare id_mp with preference_id
  res.json("ok");
});

export default router;
