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

  @CreateDateColumn()
  createdDate: Date;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column()
  password: string;

  @OneToMany(() => Event, (event) => event.owner, { nullable: true })
  events: Event[];

  @OneToMany(() => BioDetail, (bioDetail) => bioDetail.owner, {
    nullable: true,
  })
  bioDetails: BioDetail[];

  @OneToMany(() => Gift, (gift) => gift.giver, {
    nullable: true,
  })
  givenGifts: Gift[];

  @OneToMany(() => GiftGallery, (giftGallery) => giftGallery.owner, {
    nullable: true,
  })
  giftGalleries: GiftGallery[];

  @ManyToMany((type) => Group, { nullable: true })
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
  groups: Group[];
}
