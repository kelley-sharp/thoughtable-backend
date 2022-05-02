import { AppDataSource } from "./data-source";
import { Event } from "./entity/Event";
import { Group } from "./entity/Group";
import { User } from "./entity/User";
import { BioDetail } from "./entity/BioDetail";
import { BioDetailToGroup } from "./entity/BioDetailToGroup";

export const seedData = async () => {
  const bioDetail1 = new BioDetail();
  bioDetail1.id = 1;
  bioDetail1.owner_id = 1;
  bioDetail1.type = "background";
  bioDetail1.text = "I was Born in the Woods";
  await bioDetail1.save();

  const bioDetail2 = new BioDetail();
  bioDetail2.id = 2;
  bioDetail2.owner_id = 2;
  bioDetail2.type = "hobby";
  bioDetail2.text = "sleeping";
  await bioDetail2.save();

  const users = [
    {
      firstName: "Timber",
      lastName: "Saw",
      email: "huey@gmail.com",
      password: "123",
      createdAt: "Monday",
      bioDetails: [bioDetail1],
    },
    {
      firstName: "Whiskey",
      lastName: "TheSecond",
      email: "whereisbone@yahoo.com",
      password: "345",
      createdAt: "Monday",
      bioDetails: [bioDetail2],
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
    { name: "Cromwell House", adminId: 1, createdAt: "Tuesday" },
    { name: "Acadia", adminId: 3, createdAt: "Wednesday" },
  ];

  const events = [
    {
      createdAt: "Monday",
      ownerId: 1,
      name: "Birthday",
      month: 7,
      day: 18,
      repeatsAnnually: true,
    },
    {
      createdAt: "Monday",
      ownerId: 2,
      name: "Workversary",
      month: 6,
      day: 22,
      repeatsAnnually: true,
    },
  ];

  const bioDetailsToGroups = [
    { groupId: 1, bioDetailId: 1, isVisible: true },
    { groupId: 2, bioDetailId: 2, isVisible: true },
  ];

  for (let bioDetailToGroup of bioDetailsToGroups) {
    const newBioDetailToGroup = new BioDetailToGroup();
    newBioDetailToGroup.bioDetailId = bioDetailToGroup.bioDetailId;
    newBioDetailToGroup.groupId = bioDetailToGroup.groupId;
    newBioDetailToGroup.isVisible = bioDetailToGroup.isVisible;
    await newBioDetailToGroup.save();
  }

  for (let user of users) {
    const newUser = new User();
    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;
    newUser.email = user.email;
    newUser.password = user.password;
    newUser.createdAt = user.createdAt;
    newUser.bioDetails ?? user.bioDetails;
    await newUser.save();
  }

  for (let group of groups) {
    const newGroup = new Group();
    newGroup.name = group.name;
    newGroup.createdAt = group.createdAt;
    newGroup.adminId = group.adminId;
    await newGroup.save();
  }

  for (let event of events) {
    const newEvent = new Event();
    newEvent.name = event.name;
    newEvent.createdAt = event.createdAt;
    newEvent.ownerId = event.ownerId;
    newEvent.month = event.month;
    newEvent.day = event.day;
    newEvent.repeatsAnnually = event.repeatsAnnually;
    await newEvent.save();
  }
};
