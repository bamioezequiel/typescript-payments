import axios from "axios";
import OrderModel from "../models/order.models";
import UserModel from "../models/user.models";
import { addCoinsUser } from "./coin.services";
const URL_FRONT = process.env.URL_FRONT;

export const createPayment = async (
  quantity: number,
  unitPrice: number,
  userId: string
) => {
  const url = "https://api.mercadopago.com/checkout/preferences";

  const order = await OrderModel.create({
    userId,
    amount: quantity,
    priceTotal: unitPrice * quantity,
  });

  const body = {
    items: [
      {
        title: "Coins",
        description: order._id,
        picture_url: "https://imgur.com/9MpGVT4.jpg",
        category_id: "category123",
        quantity: quantity,
        unit_price: unitPrice,
      },
    ],
    back_urls: {
      /*       failure: `${URL_BACK}/failure`,
      pending: `${URL_BACK}/pending`, */
      success: `${URL_FRONT}`,
    },
  };
  const payment = await axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.ACCESS_TOKEN_MP}`,
    },
  });

  return payment.data;
};

export const notificationPayment = async (body: any) => {
  console.log(body.data.id);
  const infoPago = await axios.get(
    `https://api.mercadopago.com/v1/payments/${body.data.id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN_MP}`,
      },
    }
  );
  let status = infoPago.data.status;
  if (status === "rejected" || status === "cancelled") status = "cancel";
  /*   console.log(infoPago.data) */
  if (status === "approved" || status === "cancel") {
    const orderId = infoPago.data.additional_info.items[0].description;
    await OrderModel.findOneAndUpdate(
      {
        _id: orderId,
      },
      { status }
    );
    if (status === "approved") {
      const order: any = await OrderModel.findOne({ _id: orderId });
      await addCoinsUser(order.userId, order.amount);
    }

    /* console.log(await CoinModel.findOne({userId: user._id})) */
  }
};
