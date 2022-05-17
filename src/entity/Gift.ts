import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  CreateDateColumn,
} from "typeorm";
import { GiftGallery } from "./GiftGallery";
import { User } from "./User";

@Entity()
export class Gift extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDate: Date;

  @Column()
  imageUrl: string;

  @Column({ nullable: true })
  caption: string;

  @Column()
  isAnonymous: boolean;

  @Column()
  archivedDate: Date;

  @Column()
  deletedDate: Date;

  @ManyToOne(() => GiftGallery, (giftGallery) => giftGallery.gifts)
  giftGallery: Promise<GiftGallery>;

  @ManyToOne(() => User, (user) => user.givenGifts)
  giver: Promise<User>;
}
