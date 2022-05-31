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

  @CreateDateColumn({ default: () => "now()" })
  createdDate: Date;

  @Column()
  imageUrl: string;

  @Column({ nullable: true })
  caption: string;

  @Column({ default: false })
  isAnonymous: boolean;

  @Column({ nullable: true })
  archivedDate: Date;

  @Column({ nullable: true })
  deletedDate: Date;

  @ManyToOne(() => GiftGallery, (giftGallery) => giftGallery.gifts)
  giftGallery: Promise<GiftGallery>;

  @ManyToOne(() => User, (user) => user.givenGifts)
  giver: Promise<User>;
}
