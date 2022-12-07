import { NextFunction, Request, Response } from "express";

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("Ruta get user");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
