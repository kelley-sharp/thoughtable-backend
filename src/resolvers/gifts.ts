import { Gift } from "../entity/Gift";

export const giftsResolver = async () => {
  return await Gift.find();
};
