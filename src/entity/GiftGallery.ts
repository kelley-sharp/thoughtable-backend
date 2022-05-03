import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Event } from "./Event";

@Entity()
export class GiftGallery extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDate: Date;

  @ManyToOne(() => User, (user) => user.giftGalleries)
  owner: User;

  @ManyToOne(() => Event, (event) => event.giftGalleries)
  event: Event;
}
