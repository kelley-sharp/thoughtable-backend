import { Group } from "../entity/Group";

export const groupsResolver = async () => {
  return await Group.find();
};

export const groupResolver = async (_: any, { id }: { id: number }) => {
  return await Group.findOneByOrFail({ id })
}
