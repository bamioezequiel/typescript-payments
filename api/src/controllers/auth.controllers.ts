import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.services";

export const register = async (req: Request, res: Response) => {
    try {
        console.log('A')
        const { name, lastname, email, password } = req.body;
        const resUser = await registerNewUser({ name, lastname, email, password });
        res.status(201).send(resUser);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const resUser = await loginUser({ email, password });

        res.send(resUser);
    } catch (error) {
        res.status(400).send(error);
    }
};
