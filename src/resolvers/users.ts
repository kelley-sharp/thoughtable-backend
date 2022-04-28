import { User } from "../entity/User";

export const usersResolver = async () => {
  return await User.find();
};
