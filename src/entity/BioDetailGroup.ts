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
export class BioDetailGroup extends BaseEntity {
  @PrimaryGeneratedColumn()
  public bioDetailGroupId!: number;

  @Column()
  public isVisible!: boolean;

  @ManyToOne(() => BioDetail, (bioDetail) => bioDetail.bioDetailGroups)
  public bioDetail!: BioDetail;

  @ManyToOne(() => Group, (group) => group.bioDetailsToGroup)
  public group!: Group;
}
