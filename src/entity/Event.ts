import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: string;

  @Column()
  ownerId: number;

  @Column()
  name: string;

  @Column()
  month: number;

  @Column()
  day: number;

  @Column()
  repeatsAnnually: boolean;

  @ManyToOne(() => User, (user) => user.events)
  user: User;
}
