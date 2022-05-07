import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
} from "typeorm";
import { BioDetail } from "./BioDetail";
import { Group } from "./Group";

@Entity()
export class BioDetailToGroup extends BaseEntity {
  @PrimaryGeneratedColumn()
  public bioDetailToGroupId!: number;

  @Column()
  public isVisible!: boolean;

  @ManyToOne(() => BioDetail, (bioDetail) => bioDetail.bioDetailToGroups)
  public bioDetail!: BioDetail;

  @ManyToOne(() => Group, (group) => group.bioDetailsToGroup)
  public group!: Group;
}
