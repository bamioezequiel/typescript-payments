import { Request, Response } from "express";
import OrderModel from "../models/order.models";
import UserModel from "../models/user.models";
import { createPayment, notificationPayment } from "../services/mercadopago.services";
import { verifyToken } from "../utils/jwt.handle";

export const checkoutMercadoPago = async (req: Request, res: Response) => {
  try {
    const { quantity, unit_price, token } = req.body;
    const tokenData: any = verifyToken(`${token}`);
    const payment = await createPayment(Number(quantity), Number(unit_price), tokenData.id);    

    res.json(payment);
  } catch (error) {
    console.log(error);
    res.send(error)
  }
};

export const notificationMercadoPago = async (req: Request, res: Response) => {
  try {
    res.status(200).send("ok");
    if (req.body.action === "payment.created") {
      await notificationPayment(req.body);
    }
  } catch (error) {
    console.log(error);
  }
}
