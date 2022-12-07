import { Request, Response } from "express";
import CoinModel from "../models/coin.models";
import { getCoinsUser, addCoinsUser, removeCoinsUser } from "../services/coin.services";

export const getCoinById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const coinUser = await getCoinsUser(id);
        res.send(coinUser);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const addCoin = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { amount } = req.query;
        const coinUser = await addCoinsUser(id, Number(amount));
        res.send(coinUser);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const removeCoin = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { amount } = req.query;
        const coinUser = await removeCoinsUser(id, Number(amount));
        res.send(coinUser);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}