import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
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
  owner: User;

  @OneToMany(() => GiftGallery, (giftGallery) => giftGallery.event)
  giftGalleries: [GiftGallery];
}
