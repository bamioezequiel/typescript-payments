import { Request, Response } from "express";
import { getCoinsUser, removeCoinsUser } from "../services/coin.services";
import { changeRoleUser, getUser } from "../services/user.services";

export const buyRoles = async (req: Request, res: Response) => {
  const roles: any = {
    Admin: 200,
    User: 0,
  };

  try {
    const { role, userId } = req.body;
    const user = await getUser(userId);
    if (user) {
      if (user.role !== role) {
        const userCoins = await getCoinsUser(`${user._id}`);
        const priceRol = roles[role];
        if (priceRol || priceRol === 0) {
          if (userCoins.amount >= priceRol) {
            await changeRoleUser(`${user._id}`, role);
            await removeCoinsUser(`${user._id}`, priceRol);
            res.send({ status: true, message: "The purchase was successful" });
          } else {
            res.send("Insufficient money");
          }
        } else {
          res.send("That role does not exist");
        }
      } else {
        res.send("Uou already have that role");
      }
    }
    res.send("User not found");
  } catch (error) {
    console.log(error);
  }
};
