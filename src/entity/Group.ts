import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  adminId: number;

  @Column()
  createdAt: string;

  @Column()
  name: string;

  @ManyToMany((type) => User)
  @JoinTable({
    name: "groups_users",
    joinColumn: {
      name: "group",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "user",
      referencedColumnName: "id",
    },
  })
  users: User[];
}
