import { Request, Response } from "express";
import { getCoinsUser, removeCoinsUser } from "../services/coin.services";
import { changeRoleUser, getUserById } from "../services/user.services";

export const buyRole = async (req: Request, res: Response) => {
  const roles: any = {
    Admin: 200,
    Vip: 100,
  };

  try {
    const { role, userId } = req.body;
    const user = await getUserById(userId);
    if (user) {
      if (user.role !== role) {
        const userCoins = await getCoinsUser(`${user._id}`);
        const priceRol = roles[role];
        if (priceRol) {
          if (userCoins.amount >= priceRol) {
            await changeRoleUser(`${user._id}`, role);
            await removeCoinsUser(`${user._id}`, priceRol);
            res.send("The purchase was successful");
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

/* 

const user = await getUserById(userId);
    if (user) {
      const userCoins = await getCoinsUser(`${user._id}`);
      const priceRol = roles[role];
      if (priceRol) {
        if (userCoins.amount >= priceRol) {
          await changeRoleUser(`${user._id}`, role);
          await removeCoinsUser(`${user._id}`, priceRol);
          return 'The purchase was successful'
        } else {
            return 'Insufficient money'
        }
      } else {
        return 'That role does not exist'
      }
    }
    return 'User not found';

*/
