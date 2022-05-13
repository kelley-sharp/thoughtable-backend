import { GraphQLResolveInfo } from "graphql";
import { User } from "../entity/User";

export const usersResolver = async () => {
  return await User.find();
};

//Mutations

export const addUserMutation = async (
  _: any,
  {
    newUser,
  }: {
    newUser: {
      email?: string;
      firstName?: string;
      lastName?: string;
      password?: string;
      id?: string;
    };
  }
) => {
  const newUserInstance = new User();
  for (const field in newUser) {
    // @ts-expect-error
    newUserInstance[field] = newUser[field as keyof typeof newUser];
  }

  const result = await newUserInstance.save();
  return result;
};
