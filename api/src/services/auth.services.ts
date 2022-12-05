import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.models";
import { encrypt, verifyPassword } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

export const registerNewUser = async ({ name, lastname, email, password }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) throw "USER_ALREADY";

  const passHash = await encrypt(password);
  const user = await UserModel.create({
    name,
    lastname,
    email,
    password: passHash,
  });

  return user;
};

export const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({email});
    if(!checkIs) throw 'USER_NOT_FOUND';

    const passHash = checkIs.password;
    const isCorrect = await verifyPassword(password, passHash)
    if(!isCorrect) throw 'PASSWORD_INCORRECT';
    
    const token = generateToken(checkIs.email);
    return {
        token,
        user: checkIs,
    };

};
