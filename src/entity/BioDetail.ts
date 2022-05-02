import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { User } from "./User";
import { Group } from "./Group";
import { BioDetailToGroup } from "./BioDetailToGroup";

@Entity()
export class BioDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ownerId: number;

  @Column()
  type: string;

  @Column()
  text: string;

  @ManyToOne(() => User, (user) => user.bioDetails)
  user: User;

  @OneToMany(
    () => BioDetailToGroup,
    (bioDetailToGroup) => bioDetailToGroup.bioDetail
  )
  public bioDetailToGroups!: BioDetailToGroup[];
}
