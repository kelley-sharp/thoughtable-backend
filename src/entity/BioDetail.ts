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
  type: string;

  @Column()
  text: string;

  @ManyToOne(() => User, (owner) => owner.bioDetails)
  owner: User;

  @OneToMany(
    () => BioDetailToGroup,
    (bioDetailToGroup) => bioDetailToGroup.bioDetail,
    { nullable: true }
  )
  public bioDetailToGroups!: BioDetailToGroup[];
}
