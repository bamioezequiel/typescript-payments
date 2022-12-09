import { Request, Response } from "express";
import mercadopago from "mercadopago";

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
  access_token: `${process.env.ACCESS_TOKEN_MP}`,
});

export const preferencesMP = (req: Request, res: Response) => {
  /* aquí crea tu orden en la DB para el usuario logeado */
  const { userId, title, price, quantity } = req.body;

  // Ahora le decimos a MP que cree la "preferencia". Asume que "order" tiene datos del producto
  mercadopago.preferences
    .create({
      items: [
        {
          title: title,
          unit_price: price,
          quantity: quantity,
        },
      ],
    })
    .then((preference: any) => {
      // el front recibirá el preferenceId :)
      res.json({ preferenceId: preference.id });
    });
};
