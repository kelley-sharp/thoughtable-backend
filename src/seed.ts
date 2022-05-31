import { Event } from "./entity/Event";
import { Group } from "./entity/Group";
import { User } from "./entity/User";
import { BioDetail } from "./entity/BioDetail";
import { BioDetailGroup } from "./entity/BioDetailGroup";
import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "./constants";

export const seedData = async () => {
  const user1 = new User();
  user1.firstName = "Timber";
  user1.lastName = "Saw";
  user1.email = "huey@gmail.com";
  user1.password = await bcrypt.hash("123", SALT_ROUNDS);
  user1.avatarUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/440px-American_Beaver.jpg";
  user1.save();

  const user2 = new User();
  user2.firstName = "Whiskey";
  user2.lastName = "TheSecond";
  user2.email = "whereisbone@yahoo.com";
  user2.avatarUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rough_Coated_Jack_Russell_Terrier.JPG/1920px-Rough_Coated_Jack_Russell_Terrier.JPG";
  user2.password = await bcrypt.hash("345", SALT_ROUNDS);
  user2.save();

  const user3 = new User();
  user3.firstName = "Mr.";
  user3.lastName = "Duck";
  user3.email = "quack@worms.com";
  user3.avatarUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bucephala-albeola-010.jpg/440px-Bucephala-albeola-010.jpg";
  user3.password = await bcrypt.hash("456", SALT_ROUNDS);
  user3.save();

  const bioDetailQuestions = [
    "What is your favorite place?",
    "What is your occupation?",
    "What did you study (in school or on your own)?",
    "What is your favorite hobby?",
    "What is your favorite food?",
    "What is your least favorite activity?",
  ];

  const bioDetailResponsesUser1 = [
    "Corvallis, Oregon",
    "Lumberjack",
    "Wood-chopping",
    "Swimming",
    "Pine trees",
    "Walking on land",
  ];

  for (let i = 0; i < bioDetailQuestions.length; i++) {
    const bioDetail = new BioDetail();
    bioDetail.owner = Promise.resolve(user1);
    bioDetail.question = bioDetailQuestions[i];
    bioDetail.response = bioDetailResponsesUser1[i];
    await bioDetail.save();
  }

  const bioDetailResponsesUser2 = [
    "San Francisco",
    "Therapist",
    "Human Psychology",
    "Eating treats",
    "Pizza",
    "Going for runs",
  ];

  for (let i = 0; i < bioDetailQuestions.length; i++) {
    const bioDetail = new BioDetail();
    bioDetail.owner = Promise.resolve(user2);
    bioDetail.question = bioDetailQuestions[i];
    bioDetail.response = bioDetailResponsesUser2[i];
    await bioDetail.save();
  }

  const bioDetailResponsesUser3 = [
    "Eugene, Oregon",
    "Nutritionist",
    "Home Economics",
    "Flying",
    "Worms",
    "Walking on land",
  ];

  for (let i = 0; i < bioDetailQuestions.length; i++) {
    const bioDetail = new BioDetail();
    bioDetail.owner = Promise.resolve(user3);
    bioDetail.question = bioDetailQuestions[i];
    bioDetail.response = bioDetailResponsesUser3[i];
    await bioDetail.save();
  }

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

  for (const event of events) {
    const newEvent = new Event();
    newEvent.name = event.name;
    newEvent.owner = Promise.resolve(event.owner);
    newEvent.month = event.month;
    newEvent.day = event.day;
    newEvent.repeatsAnnually = event.repeatsAnnually;
    await newEvent.save();
  }

  const bioDetailsToGroups = [
    { group: group1, bioDetail: 1, isVisible: true },
    { group: group2, bioDetail: 2, isVisible: true },
  ];

  for (const bioDetailGroup of bioDetailsToGroups) {
    const newBioDetailGroup = new BioDetailGroup();
    newBioDetailGroup.isVisible = bioDetailGroup.isVisible;
    await newBioDetailGroup.save();
  }
};
