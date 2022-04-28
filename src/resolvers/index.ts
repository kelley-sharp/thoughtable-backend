import { User } from "../entity/User";

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    users: async () => await User.find(),
  },
};
