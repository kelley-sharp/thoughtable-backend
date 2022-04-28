import { Group } from "../entity/Group";

export const groupsResolver = async () => {
  return await Group.find();
};
