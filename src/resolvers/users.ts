import { GraphQLError } from "graphql";
import { User } from "../entity/User";
import bcrypt from "bcrypt";
import { JWT_SECRET_KEY, SALT_ROUNDS } from "../constants";
import jwt from "jsonwebtoken";

//get all users
export const usersResolver = async () => {
  return await User.find();
};

//get user by id
export const userResolver = async (_: any, { id }: { id: number }) => {
  return await User.findOneByOrFail({ id });
};

/*Mutations*/

//create user
export const createUserMutation = async (
  _: any,
  {
    newUser,
  }: {
    newUser: {
      email: string;
      firstName: string;
      lastName: string;
      password: string;
    };
  }
) => {
  const newUserInstance = new User();
  for (const field in newUser) {
    if (field === "password") {
      newUserInstance.password = await bcrypt.hash(newUser.password, SALT_ROUNDS);
    } else {
      // @ts-expect-error
      newUserInstance[field] = newUser[field as keyof typeof newUser];
    }
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
  const userToUpdate = User.findOneByOrFail({ id });
  if (!userToUpdate) {
    throw new GraphQLError(`User ${id} does not exist`);
  }

  return await User.update({ id }, userUpdateInput);
};

//delete user
export const deleteUserMutation = async (_: any, { id }: { id: number }) => {
  const userToDelete = User.findOneByOrFail({ id });
  if (!userToDelete) {
    throw new GraphQLError(`User ${id} does not exist`);
  }
  await User.delete({ id });

  return true;
};

export const signUpMutation = async (
  _: any,
  {
    newUser,
  }: {
    newUser: {
      email: string;
      firstName: string;
      lastName: string;
      password: string;
    };
  }
) => {
  const newUserInstance = new User();

  for (const field in newUser) {
    if (field === "password") {
      newUserInstance.password = await bcrypt.hash(newUser.password, SALT_ROUNDS);
    } else {
      // @ts-expect-error
      newUserInstance[field] = newUser[field as keyof typeof newUser];
    }
  }

  const result = await newUserInstance.save();

  const token = jwt.sign({ userId: result.id }, JWT_SECRET_KEY);

  return {
    token,
  };
};

export const loginMutation = async (
  _: any,
  { userCredentials }: { userCredentials: { email: string; password: string } }
) => {
  const { email, password } = userCredentials;
  const user = await User.findOneByOrFail({ email });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY);

  return {
    token,
  };
};

export const currentUserResolver = async (parent: any, args: any, context: any) => {
  if (context.userId) {
    return await User.findOneBy({ id: context.userId });
  }

  return null;
};
