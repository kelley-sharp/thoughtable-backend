import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { BioDetailGroup } from "./BioDetailGroup";

@Entity()
export class BioDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  response: string;

  @ManyToOne(() => User, (owner) => owner.bioDetails)
  owner: Promise<User>;

  @OneToMany(() => BioDetailGroup, (bioDetailGroup) => bioDetailGroup.bioDetail, {
    nullable: true,
    cascade: true,
  })
  public bioDetailGroups!: Promise<BioDetailGroup>[];
}
