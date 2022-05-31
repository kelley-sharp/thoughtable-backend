import { Gift } from "./entity/Gift";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { BioDetail } from "./entity/BioDetail";
import { BioDetailGroup } from "./entity/BioDetailGroup";
import { Event } from "./entity/Event";
import { GiftGallery } from "./entity/GiftGallery";
import { Group } from "./entity/Group";
import { User } from "./entity/User";
import { EventGroup } from "./entity/EventGroup";

function getDataSource() {
  const entities = [User, Group, Event, BioDetail, BioDetailGroup, GiftGallery, Gift, EventGroup];
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
      port: process.env.PORT ? Number(process.env.PORT) : 5432,
      username: "test",
      password: "test",
      synchronize: true,
      dropSchema: true,
      logging: true,
    });
  }
}

export const AppDataSource = getDataSource();
