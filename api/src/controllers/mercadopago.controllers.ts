import { Request, Response } from "express";
import OrderModel from "../models/order.models";
import UserModel from "../models/user.models";
import { createPayment } from "../services/mercadopago.services";
import { verifyToken } from "../utils/jwt.handle";

export const checkoutMercadoPago = async (req: Request, res: Response) => {
  try {
    const { quantity, unit_price, token } = req.body;
    const tokenData: any = verifyToken(`${token}`);
    const payment = await createPayment(Number(quantity), Number(unit_price), tokenData.id);

    const order = await OrderModel.create({
      userId: tokenData.id,
      amount: quantity,
      priceTotal: unit_price * quantity
    });

    console.log(order);

    res.json(payment);
  } catch (error) {
    console.log(error);
    res.send(error)
  }
};
