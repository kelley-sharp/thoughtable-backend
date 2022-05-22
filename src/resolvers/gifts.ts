import { Gift } from "../entity/Gift";

export const giftsResolver = async () => {
  return await Gift.find();
};

export const giftResolver = async (_: any, { id }: { id: number }) => {
  return await Gift.findOneByOrFail({ id })
}