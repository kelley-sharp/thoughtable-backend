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
  user1.save();

  const user2 = new User();
  user2.firstName = "Whiskey";
  user2.lastName = "TheSecond";
  user2.email = "whereisbone@yahoo.com";
  user2.password = "345";
  user2.save();

  const user3 = new User();
  user3.firstName = "Mr.";
  user3.lastName = "Duck";
  user3.email = "quack@worms.com";
  user3.password = "567";
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

  const group1 = new Group();
  group1.name = "Cromwell House";
  group1.save();

  const group2 = new Group();
  group2.name = "Acadia";
  group2.save();

  const events = [
    {
      owner: user1,
      name: "Birthday",
      month: 7,
      day: 18,
      repeatsAnnually: true,
    },
    {
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
    newEvent.owner = event.owner;
    newEvent.month = event.month;
    newEvent.day = event.day;
    newEvent.repeatsAnnually = event.repeatsAnnually;
    await newEvent.save();
  }

  const bioDetailsToGroups = [
    { group: group1, bioDetail: 1, isVisible: true },
    { group: group2, bioDetail: 2, isVisible: true },
  ];

  for (let bioDetailToGroup of bioDetailsToGroups) {
    const newBioDetailToGroup = new BioDetailToGroup();
    newBioDetailToGroup.isVisible = bioDetailToGroup.isVisible;
    await newBioDetailToGroup.save();
  }
};
