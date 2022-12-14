import axios from "axios";
import UserModel from "../models/user.models";
const URL_BACK = process.env.URL_BACK;

export const createPayment = async (quantity: number, unitPrice: number, email: string) => {
  const url = "https://api.mercadopago.com/checkout/preferences";
  const body = {
    items: [
      {
        title: "Coins",
        description: "Buy coins to get ranks",
        picture_url: "https://imgur.com/9MpGVT4.jpg",
        category_id: "category123",
        quantity: quantity,
        unit_price: unitPrice,
      },
    ],
    payer: { email },
    back_urls: {
      failure: `${URL_BACK}/failure`,
      pending: `${URL_BACK}/pending`,
      success: `${URL_BACK}/success`,
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
