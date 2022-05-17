import { GiftGallery } from "../entity/GiftGallery";

export const giftGalleriesResolver = async () => {
  return await GiftGallery.find();
};

export const giftGalleryResolver = async (_: any, { id }: { id: number }) => {
  return await GiftGallery.findOneBy({ id })
}