import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from "typeorm";
import { User } from "./User";
import { Event } from "./Event";

@Entity()
export class GiftGallery extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: string;

  @ManyToOne(() => User, (user) => user.giftGalleries)
  user: User;

  @ManyToOne(() => Event, (event) => event.giftGalleries)
  event: Event;
}
