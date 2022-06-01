import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { User } from "./User";
import { BioDetailGroup } from "./BioDetailGroup";
import { EventGroup } from "./EventGroup";

@Entity()
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ default: () => "now()" })
  createdDate: Date;

  @Column()
  name: string;

  @ManyToMany(() => User)
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
  users: Promise<User[]>;
  //adminId: Users[][0]

  @OneToMany(() => BioDetailGroup, (bioDetailGroup) => bioDetailGroup.group)
  public bioDetailsToGroup: Promise<BioDetailGroup[]>;

  @OneToMany(() => EventGroup, (eventGroups) => eventGroups.group)
  public eventsToGroup: Promise<EventGroup[]>;
}
