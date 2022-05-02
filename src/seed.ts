import { AppDataSource } from "./data-source";
import { Event } from "./entity/Event";
import { Group } from "./entity/Group";
import { User } from "./entity/User";
import { BioDetail } from "./entity/BioDetail";
import { BioDetailToGroup } from "./entity/BioDetailToGroup";

export const seedData = async () => {
  const user1 = new User();
  user1.firstName = "Timber";
  user1.lastName = "Saw";
  user1.email = "huey@gmail.com";
  user1.password = "123";
  user1.createdAt = "Monday";
  user1.save();

  const user2 = new User();
  user2.firstName = "Whiskey";
  user2.lastName = "TheSecond";
  user2.email = "whereisbone@yahoo.com";
  user2.password = "345";
  user2.createdAt = "Monday";
  user2.save();

  const user3 = new User();
  user3.firstName = "Mr.";
  user3.lastName = "Duck";
  user3.email = "quack@worms.com";
  user3.password = "567";
  user3.createdAt = "Tuesday";
  user3.save();

  const bioDetail1 = new BioDetail();
  bioDetail1.owner = user1;
  bioDetail1.type = "background";
  bioDetail1.text = "I was Born in the Woods";
  await bioDetail1.save();

  const bioDetail2 = new BioDetail();
  bioDetail2.owner = user2;
  bioDetail2.type = "hobby";
  bioDetail2.text = "sleeping";
  await bioDetail2.save();

  const groups = [
    { name: "Cromwell House", adminId: 1, createdAt: "Tuesday" },
    { name: "Acadia", adminId: 3, createdAt: "Wednesday" },
  ];

  const events = [
    {
      createdAt: "Monday",
      owner: user1,
      name: "Birthday",
      month: 7,
      day: 18,
      repeatsAnnually: true,
    },
    {
      createdAt: "Monday",
      owner: user2,
      name: "Workversary",
      month: 6,
      day: 22,
      repeatsAnnually: true,
    },
  ];

  for (let event of events) {
    const newEvent = new Event();
    newEvent.name = event.name;
    newEvent.createdAt = event.createdAt;
    newEvent.owner = event.owner;
    newEvent.month = event.month;
    newEvent.day = event.day;
    newEvent.repeatsAnnually = event.repeatsAnnually;
    await newEvent.save();
  }

  for (let group of groups) {
    const newGroup = new Group();
    newGroup.name = group.name;
    newGroup.createdAt = group.createdAt;
    await newGroup.save();
  }

  const bioDetailsToGroups = [
    { groupId: 1, bioDetailId: 1, isVisible: true },
    { groupId: 2, bioDetailId: 2, isVisible: true },
  ];

  for (let bioDetailToGroup of bioDetailsToGroups) {
    const newBioDetailToGroup = new BioDetailToGroup();
    newBioDetailToGroup.isVisible = bioDetailToGroup.isVisible;
    await newBioDetailToGroup.save();
  }
};
