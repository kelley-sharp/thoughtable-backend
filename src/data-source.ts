import "reflect-metadata";
import { DataSource } from "typeorm";
import { Group } from "./entity/Group";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "thoughtable",
  synchronize: true,
  dropSchema: true,
  logging: true,
  entities: [User, Group],
  migrations: [],
  subscribers: [],
});
