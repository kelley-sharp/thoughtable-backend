import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
} from "typeorm";
import { Event } from "./Event";
import { Group } from "./Group";

@Entity()
export class EventToGroup extends BaseEntity {
  @PrimaryGeneratedColumn()
  public eventToGroupId!: number;

  @Column()
  public isVisible!: boolean;

  @ManyToOne(() => Event, (event) => event.eventToGroups)
  public event!: Event;

  @ManyToOne(() => Group, (group) => group.eventToGroups)
  public group!: Group;
}
