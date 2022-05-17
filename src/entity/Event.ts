import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { EventGroup } from "./EventGroup";
import { GiftGallery } from "./GiftGallery";
import { User } from "./User";

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDate: Date;

  @Column()
  name: string;

  @Column()
  month: number;

  @Column()
  day: number;

  @Column()
  repeatsAnnually: boolean;

  @ManyToOne(() => User, (user) => user.events)
  owner: Promise<User>;

  @OneToMany(() => GiftGallery, (giftGallery) => giftGallery.event)
  giftGalleries: Promise<[GiftGallery]>;

  @OneToMany(() => EventGroup, (eventGroup) => eventGroup.event)
  public eventGroups!: Promise<EventGroup[]>;
}
