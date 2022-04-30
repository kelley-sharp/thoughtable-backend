import { Event } from "./entity/Event";
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

  const groups = [
    { id: 1, name: "Cromwell House", adminId: 1, createdAt: "Tuesday" },
    { id: 2, name: "Acadia", adminId: 3, createdAt: "Wednesday" },
  ];

  const events = [
    {
      id: 10,
      createdAt: "Monday",
      ownerId: 1,
      name: "Birthday",
      month: 7,
      day: 18,
      repeatsAnnually: true,
    },
    {
      id: 11,
      createdAt: "Monday",
      ownerId: 2,
      name: "Workiversary",
      month: 6,
      day: 22,
      repeatsAnnually: true,
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

  for (let group of groups) {
    const newGroup = new Group();
    newGroup.id = group.id;
    newGroup.name = group.name;
    newGroup.createdAt = group.createdAt;
    newGroup.adminId = group.adminId;
  }

  for (let event of events) {
    const newEvent = new Event();
    newEvent.id = event.id;
    newEvent.name = event.name;
    newEvent.createdAt = event.createdAt;
    newEvent.ownerId = event.ownerId;
    newEvent.month = event.month;
    newEvent.day = event.day;
    newEvent.repeatsAnnually = event.repeatsAnnually;
    newEvent.save();
  }
};
