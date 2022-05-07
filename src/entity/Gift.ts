import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Event } from "./Event";
import { GiftGallery } from "./GiftGallery";

@Entity()
export class Gift extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDate: Date;

  @Column()
  imageUrl: string;

  @Column()
  caption: string;

  @Column()
  isAnonymous: boolean;

  @Column()
  archivedDate: Date;

  @Column()
  deletedDate: Date;

  @ManyToOne(() => GiftGallery, (giftGallery) => giftGallery.gifts)
  giftGallery: GiftGallery;
}
