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
export class EventGroup extends BaseEntity {
  @PrimaryGeneratedColumn()
  public eventGroupId!: number;

  @Column()
  public isVisible!: boolean;

  @ManyToOne(() => Event, (event) => event.eventGroups)
  public event!: Promise<Event>;

  @ManyToOne(() => Group, (group) => group.eventsToGroup)
  public group!: Promise<Group>;
}
