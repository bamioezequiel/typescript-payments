import CoinModel from "../models/coin.models";
import UserModel from "../models/user.models";

export const getCoinsUser = async (id: string) => {
  let coinUser = await CoinModel.findOne({ userId: id });
  if (!coinUser) {
    coinUser = await CoinModel.create({ amount: 0, userId: id });
  }

  return coinUser;
};

export const addCoinsUser = async (id: string, amount: number) => {
  let coinUser = await CoinModel.findOne({ userId: id });
  if (!coinUser) {
    coinUser = await CoinModel.create({ amount: 0, userId: id });
  }

  console.log(amount);
  return await CoinModel.findOneAndUpdate(
    { userId: id },
    { amount: coinUser.amount + amount },
    {
      new: true,
    }
  );
};

export const removeCoinsUser = async (id: string, amount: number) => {
  let coinUser = await CoinModel.findOne({ userId: id });
  if (coinUser) {
    return await CoinModel.findOneAndUpdate(
      { userId: id },
      { amount: coinUser.amount - amount },
      {
        new: true,
      }
    );
  }
};
