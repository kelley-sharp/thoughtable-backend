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
import { BioDetailToGroup } from "./BioDetailToGroup";
import { EventToGroup } from "./EventToGroup";

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
    () => BioDetailToGroup,
    (bioDetailToGroup) => bioDetailToGroup.group,
    { nullable: true }
  )
  public bioDetailsToGroup: BioDetailToGroup[];

  @OneToMany(() => EventToGroup, (eventToGroups) => eventToGroups.group, {
    nullable: true,
  })
  public eventsToGroup: EventToGroup[];
}
