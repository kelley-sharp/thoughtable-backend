import { groupsResolver } from "./groups";
import { addUserMutation, usersResolver } from "./users";
import { eventsResolver } from "./events";
import { bioDetailsResolver } from "./bioDetails";
import { bioDetailsToGroupsResolver } from "./bioDetailsToGroups";
import { giftGalleriesResolver } from "./giftGalleries";
import { GraphQLScalarType, Kind } from "graphql";
import { eventsToGroupsResolver } from "./eventsToGroups";
import { giftsResolver } from "./gifts";

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

const dateResolver = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    return (value as Date).toISOString();
  },
  parseValue(value) {
    return new Date(value as string);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  },
});

// basically a config object for Apollo server

export const resolvers = {
  Date: dateResolver,
  Query: {
    users: usersResolver,
    groups: groupsResolver,
    events: eventsResolver,
    bioDetails: bioDetailsResolver,
    bioDetailsToGroups: bioDetailsToGroupsResolver,
    giftGalleries: giftGalleriesResolver,
    gifts: giftsResolver,
    eventsToGroups: eventsToGroupsResolver,
  },
  Mutation: {
    addUser: addUserMutation,
  },
};
