import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Event } from "./Event";
import { Gift } from "./Gift";

@Entity()
export class GiftGallery extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ default: () => "now()" })
  createdDate: Date;

  @ManyToOne(() => User, (user) => user.giftGalleries)
  owner: Promise<User>;

  @ManyToOne(() => Event, (event) => event.giftGalleries)
  event: Promise<Event>;

  @OneToMany(() => Gift, (gift) => gift.giftGallery, {
    cascade: true,
  })
  gifts: Promise<Gift[]>;
}
