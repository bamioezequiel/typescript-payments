import { Request, Response } from "express";
import UserModel from "../models/user.models";
import { getCoinsUser } from "../services/coin.services";
import { changeRoleUser } from "../services/user.services";
import { checkUser } from "./auth.controllers";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "";

export const getUserByToken = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ").pop();
    let user: any;
    if (token) {
      jwt.verify(token, JWT_SECRET, async (error: any, decodedToken: any) => {
        if (error) {
          res.send({ status: false });
        } else {
          user = await UserModel.findById(decodedToken.id);
          const userCoin: any = await getCoinsUser(`${user._id}`);

          res.send({
            _id: user.id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
            coins: userCoin.amount,
          });
        }
      });
    } else {
      res.send({ status: false });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user: any = await UserModel.findById(id);
    const userCoin: any = await getCoinsUser(`${user._id}`);

    res.send({
      _id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      role: user.role,
      coins: userCoin.amount,
    });
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
