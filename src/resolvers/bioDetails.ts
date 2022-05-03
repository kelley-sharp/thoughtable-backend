import { BioDetail } from "../entity/BioDetail";

export const bioDetailsResolver = async () => {
  return await BioDetail.find();
};
