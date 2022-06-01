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
  const newGift = new Gift();
  newGift.giftGallery = GiftGallery.findOneByOrFail({ id: gift.giftGalleryId });
  newGift.imageUrl = gift.imageUrl;
  newGift.caption = gift.caption;
  newGift.giver = User.findOneByOrFail({ id: context.userId });

  return await newGift.save();
};
