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

  @CreateDateColumn()
  createdDate: Date;

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
  //adminId: Users[][0]

  @OneToMany(
    () => BioDetailGroup,
    (bioDetailGroup) => bioDetailGroup.group,
    { nullable: true }
  )
  public bioDetailsToGroup: BioDetailGroup[];

  @OneToMany(() => EventGroup, (eventGroups) => eventGroups.group, {
    nullable: true,
  })
  public eventsToGroup: EventGroup[];
}
