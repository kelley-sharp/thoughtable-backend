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

  @CreateDateColumn({ default: new Date() })
  createdDate: Date;

  @Column()
  name: string;

  @Column()
  month: number;

  @Column()
  day: number;

  @Column({ default: false })
  repeatsAnnually: boolean;

  @ManyToOne(() => User, (user) => user.events)
  owner: Promise<User>;

  @OneToMany(() => GiftGallery, (giftGallery) => giftGallery.event, {
    cascade: true,
  })
  giftGalleries: Promise<[GiftGallery]>;

  @OneToMany(() => EventGroup, (eventGroup) => eventGroup.event)
  public eventGroups!: Promise<EventGroup[]>;
}
