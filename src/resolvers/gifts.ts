import { GiftGallery } from "../entity/GiftGallery";
import { User } from "../entity/User";
import { Gift } from "../entity/Gift";

export const giftsResolver = async () => {
  return await Gift.find();
};

export const giftResolver = async (_: any, { id }: { id: number }) => {
  return await Gift.findOneByOrFail({ id });
};

export const createGiftMutation = async (
  _: any,
  {
    gift,
  }: {
    gift: {
      imageUrl: string;
      caption: string;
      giftGalleryId: number;
    };
  },
  context: any
) => {
  const giftGallery = await GiftGallery.findOneByOrFail({ id: gift.giftGalleryId });
  const giver = await User.findOneByOrFail({ id: context.userId });
  const newGift = new Gift();
  newGift.giftGallery = Promise.resolve(giftGallery);
  newGift.imageUrl = gift.imageUrl;
  newGift.caption = gift.caption;
  newGift.giver = Promise.resolve(giver);

  const savedGift = await newGift.save();
  return savedGift;
};
