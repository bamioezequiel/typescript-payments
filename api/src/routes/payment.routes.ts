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
        let estado = "";
        if (infoPago.data.status === "approved") {
          estado = "paid";
        } else if (infoPago.data.status === "pending") {
          estado = "pendiente";
        } else {
          estado = "cancel";
        }
        console.log("estado", estado);
        if (estado === "paid" || estado === "cancel") {
          console.log('1, ',infoPago.data.additional_info.items[0].description,
          estado)
          console.log("status", status);
          if (estado === "paid") {
            console.log('Email1 ', infoPago.data.additional_info.items[0].description,
            "paid")
          } else {
            console.log('Email2 ', infoPago.data.additional_info.items[0].description,
            "cancel")
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
