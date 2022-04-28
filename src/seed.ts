import { Group } from "./entity/Group";
import { User } from "./entity/User";

export const seedData = async () => {
  const users = [
    {
      firstName: "Timber",
      lastName: "Saw",
      email: "huey@gmail.com",
      password: "123",
      createdAt: "Monday",
    },
    {
      firstName: "Whiskey",
      lastName: "TheSecond",
      email: "whereisbone@yahoo.com",
      password: "345",
      createdAt: "Monday",
    },
    {
      firstName: "Mr.",
      lastName: "Duck",
      email: "quack@worms.com",
      password: "567",
      createdAt: "Tuesday",
    },
  ];

  for (let user of users) {
    const newUser = new User();
    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;
    newUser.email = user.email;
    newUser.password = user.password;
    newUser.createdAt = user.createdAt;
    await newUser.save();
  }

  const group = new Group();
  group.name = "Cromwell House";
  group.adminId = 1;
  group.createdAt = "Tuesday";
};
