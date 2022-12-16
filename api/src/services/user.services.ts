import UserModel from "../models/user.models";

export const changeRoleUser = async (id: string, role: string) => {
  const user = await UserModel.findOneAndUpdate(
    { _id: id },
    { role },
    {
      new: true,
    }
  );
  return user;
};

export const getUserById = async (id: string) => {
  const user =  await UserModel.findById(id);

  return user;
}