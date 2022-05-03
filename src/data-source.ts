import "reflect-metadata";
import { DataSource } from "typeorm";
import { BioDetail } from "./entity/BioDetail";
import { BioDetailToGroup } from "./entity/BioDetailToGroup";
import { Event } from "./entity/Event";
import { GiftGallery } from "./entity/GiftGallery";
import { Group } from "./entity/Group";
import { User } from "./entity/User";

function getDataSource() {
  const entities = [
    User,
    Group,
    Event,
    BioDetail,
    BioDetailToGroup,
    GiftGallery,
  ];
  if (process.env.NODE_ENV === "production") {
    return new DataSource({
      type: "postgres",
      entities,
      migrations: [],
      subscribers: [],
      url: process.env.DATABASE_URL,
      // TODO - get rid of these when I switch to migrations
      synchronize: true,
      dropSchema: true,
    });
  } else {
    return new DataSource({
      type: "postgres",
      database: "thoughtable",
      entities,
      migrations: [],
      subscribers: [],
      host: "localhost",
      port: 5432,
      username: "test",
      password: "test",
      synchronize: true,
      dropSchema: true,
      logging: true,
    });
  }
}

export const AppDataSource = getDataSource();
