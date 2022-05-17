import { GraphQLError, GraphQLResolveInfo } from "graphql";
import { User } from "../entity/User";

//get all users
export const usersResolver = async () => {
  return await User.find();
};

//get user by id
export const userResolver = async (_: any, { id }: { id: number }) => {
  return await User.findOneBy({ id });
};

/*Mutations*/

//create user
export const createUserMutation = async (
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

//update user
export const updateUserMutation = async (
  _: any,
  {
    id,
    userUpdateInput,
  }: {
    id: number;
    userUpdateInput: {
      email?: string;
      firstName?: string;
      lastName?: string;
      password?: string;
    };
  }
) => {
  const userToUpdate = User.findOneBy({ id });
  if (!userToUpdate) {
    throw new GraphQLError(`User ${id} does not exist`);
  }

  return await User.update({ id }, userUpdateInput);
};

//delete user
export const deleteUserMutation = async (_: any, { id }: { id: number }) => {
  const userToDelete = User.findOneBy({ id });
  if (!userToDelete) {
    throw new GraphQLError(`User ${id} does not exist`);
  }
  await User.delete({ id });

  return true;
};
