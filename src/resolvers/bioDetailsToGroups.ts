import { BioDetailToGroup } from "../entity/BioDetailToGroup";

export const bioDetailsToGroupsResolver = async () => {
  return await BioDetailToGroup.find();
};
