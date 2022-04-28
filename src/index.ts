import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

const main = async () => {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.error(error);
  }
};

main();
