import { Event } from "../entity/Event";

export const eventsResolver = async () => {
  return await Event.find();
};
