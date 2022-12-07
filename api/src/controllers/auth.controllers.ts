import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.services";
import { handleErrors } from './../utils/error.handle';

export const register = async (req: Request, res: Response) => {
    try {
        const { name, lastname, email, password, role } = req.body;
        const resUser = await registerNewUser({ name, lastname, email, password, role });
        res.status(201).send(resUser);
    } catch (error: any) {
        console.log(error);
        const errors = handleErrors(error)
        res.status(200).send({errors});
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const resUser = await loginUser({ email, password });
        res.send(resUser);
    } catch (error: any) {
        console.log(error);
        const errors = handleErrors(error)
        res.status(200).send({errors});
    }
};
