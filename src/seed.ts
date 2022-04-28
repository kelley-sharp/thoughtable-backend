import { User } from "./entity/User";

export const seedData = async () => {
  const user = new User();
  user.firstName = "Timber";
  user.lastName = "Saw";
  user.age = 25;
  await user.save();
};
