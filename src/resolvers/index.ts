import { groupResolver, groupsResolver } from "./groups";
import {
  createUserMutation,
  currentUserResolver,
  deleteUserMutation,
  loginMutation,
  signUpMutation,
  updateUserMutation,
  userResolver,
  usersResolver,
} from "./users";
import { eventResolver, eventsResolver } from "./events";
import { bioDetailResolver, bioDetailsResolver, createBioDetailsMutation } from "./bioDetails";
import { giftGalleriesResolver, giftGalleryResolver } from "./giftGalleries";
import { GraphQLScalarType, Kind } from "graphql";
import { createGiftMutation, giftResolver, giftsResolver } from "./gifts";

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
    currentUser: currentUserResolver,
    user: userResolver,
    users: usersResolver,
    groups: groupsResolver,
    group: groupResolver,
    events: eventsResolver,
    event: eventResolver,
    bioDetails: bioDetailsResolver,
    bioDetail: bioDetailResolver,
    giftGalleries: giftGalleriesResolver,
    giftGallery: giftGalleryResolver,
    gifts: giftsResolver,
    gift: giftResolver,
  },
  Mutation: {
    createUser: createUserMutation,
    updateUser: updateUserMutation,
    deleteUser: deleteUserMutation,
    login: loginMutation,
    signUp: signUpMutation,
    createGift: createGiftMutation,
    createBioDetails: createBioDetailsMutation,
  },
};
