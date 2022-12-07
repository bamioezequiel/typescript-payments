import { Request, Response } from "express";
import UserModel from "../models/user.models";
import { changeRoleUser } from "../services/user.services";

export const getUser = (req: Request, res: Response) => {
  try {
    res.send("Ruta get user");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const changeRole = async (req: Request, res: Response) => {
  try {
    const { id, role } = req.body;
   const user = await changeRoleUser(id, role);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
