import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BioDetail } from "./BioDetail";
import { Group } from "./Group";

@Entity()
export class BioDetailToGroup {
  @PrimaryGeneratedColumn()
  public bioDetailToGroupId!: number;

  @Column()
  public bioDetailId!: number;

  @Column()
  public groupId!: number;

  @Column()
  public isVisible!: boolean;

  @ManyToOne(() => BioDetail, (bioDetail) => bioDetail.bioDetailToGroups)
  public bioDetail!: BioDetail;

  @ManyToOne(() => Group, (group) => group.bioDetailToGroups)
  public group!: Group;
}
