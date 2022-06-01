import { Event } from "../entity/Event";

export const eventsResolver = async () => {
  const events = await Event.find();

  return events.map(async (event) => {
    const currentGiftGallery = (await event.giftGalleries)[(await event.giftGalleries).length - 1];
    event.currentGiftGallery = currentGiftGallery;
    return event;
  });
};

export const eventResolver = async (_: any, { id }: { id: number }) => {
  const event = await Event.findOneByOrFail({ id });
  const currentGiftGallery = (await event.giftGalleries)[(await event.giftGalleries).length - 1];
  event.currentGiftGallery = currentGiftGallery;
  return event;
};
