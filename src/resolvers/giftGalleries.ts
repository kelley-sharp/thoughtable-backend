import { GiftGallery } from "../entity/GiftGallery";

export const giftGalleriesResolver = async () => {
  return await GiftGallery.find();
};
