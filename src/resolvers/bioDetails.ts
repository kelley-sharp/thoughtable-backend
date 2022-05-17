import { BioDetail } from "../entity/BioDetail";

export const bioDetailsResolver = async () => {
  return await BioDetail.find();
};

export const bioDetailResolver = async (_: any, { id }: { id: number }) => {
  return await BioDetail.findOneBy({ id })
}
