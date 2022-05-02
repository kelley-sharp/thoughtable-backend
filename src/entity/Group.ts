import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { BioDetailToGroup } from "./BioDetailToGroup";
import { BioDetail } from "./BioDetail";

@Entity()
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
  //adminID: Users[][0]

  @OneToMany(
    () => BioDetailToGroup,
    (bioDetailToGroup) => bioDetailToGroup.group
  )
  public bioDetailToGroups!: BioDetailToGroup[];
}
