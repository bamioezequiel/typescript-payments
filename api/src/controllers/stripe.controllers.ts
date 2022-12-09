import { Request, Response } from "express";

export const checkoutStripe = async (req: Request, res: Response) => {
  res.send('stripe');
};
