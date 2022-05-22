import { Event } from "../entity/Event";

export const eventsResolver = async () => {
  return await Event.find();
};

export const eventResolver = async (_: any, { id }: { id: number }) => {
  return await Event.findOneByOrFail({ id })
}