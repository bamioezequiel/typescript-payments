import { Request, Response } from "express";
import OrderModel from "../models/order.models";
import { createPayment } from "../services/mercadopago.services";

export const checkoutMercadoPago = async (req: Request, res: Response) => {
  try {
    const { quantity, unit_price, user_id } = req.body;
    const payment = await createPayment(Number(quantity), Number(unit_price));

    const order = await OrderModel.create({
      orderId: payment.id,
      userId: user_id,
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
