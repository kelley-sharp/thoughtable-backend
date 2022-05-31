import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { BioDetail } from "./BioDetail";
import { Group } from "./Group";

@Entity()
export class BioDetailGroup extends BaseEntity {
  @PrimaryGeneratedColumn()
  public bioDetailGroupId!: number;

  @Column({ default: true })
  public isVisible!: boolean;

  @ManyToOne(() => BioDetail, (bioDetail) => bioDetail.bioDetailGroups)
  public bioDetail!: Promise<BioDetail>;

  @ManyToOne(() => Group, (group) => group.bioDetailsToGroup)
  public group!: Promise<Group>;
}
