import { Request, Response } from "express";
import UserModel from "../models/user.models";
import { getCoinsUser } from "../services/coin.services";
import { changeRoleUser } from "../services/user.services";

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user: any = await UserModel.findById(id);
    const userCoin: any = await getCoinsUser(`${user._id}`);

    res.send({ ...user, coins: userCoin.amount });
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
