import { EventToGroup } from "../entity/EventToGroup";

export const eventsToGroupsResolver = async () => {
  return await EventToGroup.find();
};
