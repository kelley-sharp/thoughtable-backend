import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  JoinColumn,
  BaseEntity,
  JoinTable,
} from "typeorm";
import { Group } from "./Group";
import { Event } from "./Event";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @OneToMany(() => Event, (event) => event.user)
  events: Event[];

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
