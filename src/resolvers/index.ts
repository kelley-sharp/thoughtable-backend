import { groupsResolver } from "./groups";
import { usersResolver } from "./users";
import { eventsResolver } from "./events";
import { bioDetailsResolver } from "./bioDetails";
import { bioDetailsToGroupsResolver } from "./bioDetailsToGroups";
import { giftGalleriesResolver } from "./giftGalleries";

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    users: usersResolver,
    groups: groupsResolver,
    events: eventsResolver,
    bioDetails: bioDetailsResolver,
    bioDetailsToGroups: bioDetailsToGroupsResolver,
    giftGalleries: giftGalleriesResolver,
  },
};
