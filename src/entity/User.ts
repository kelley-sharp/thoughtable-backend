import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  BaseEntity,
  JoinTable,
  CreateDateColumn,
} from "typeorm";
import { Group } from "./Group";
import { Event } from "./Event";
import { BioDetail } from "./BioDetail";
import { GiftGallery } from "./GiftGallery";
import { Gift } from "./Gift";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ default: () => "now()" })
  createdDate: Date;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @OneToMany(() => Event, (event) => event.owner, { nullable: true, cascade: true })
  events: Promise<Event[]>;

  @OneToMany(() => BioDetail, (bioDetail) => bioDetail.owner, {
    nullable: true,
    cascade: true,
  })
  bioDetails: Promise<BioDetail[]>;

  @OneToMany(() => Gift, (gift) => gift.giver, {
    nullable: true,
    cascade: true,
  })
  givenGifts: Promise<Gift[]>;

  @OneToMany(() => GiftGallery, (giftGallery) => giftGallery.owner, {
    nullable: true,
    cascade: true,
  })
  giftGalleries: Promise<GiftGallery[]>;

  @ManyToMany(() => Group, { nullable: true, cascade: true })
  @JoinTable({
    name: "groups_users",
    joinColumn: {
      name: "user",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "group",
      referencedColumnName: "id",
    },
  })
  groups: Promise<Group[]>;
}
