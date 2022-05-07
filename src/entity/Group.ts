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
import { BioDetail } from "./BioDetail";
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
  //adminID: Users[][0]

  @OneToMany(
    () => BioDetailToGroup,
    (bioDetailToGroup) => bioDetailToGroup.group
  )
  public bioDetailToGroups!: BioDetailToGroup[];

  @OneToMany(() => EventToGroup, (eventToGroup) => eventToGroup.group)
  public eventToGroups!: EventToGroup[];
}
