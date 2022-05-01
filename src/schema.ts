const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type User {
    id: ID!
    createdAt: String
    email: String
    firstName: String
    lastName: String
    password: String
    # Do I need a bioDetails Array here?
  }

  type Group {
    id: ID!
    adminId: ID!
    createdAt: String
    name: String
  }

  type Event {
    id: ID!
    createdAt: String
    name: String
    ownerId: ID!
    month: Int!
    day: Int!
    repeatsAnnually: Boolean
  }

  type BioDetail {
    id: ID!
    owner_id: ID!
    type: String
    text: String
  }

  type BioDetailToGroup {
    id: ID!
    bioDetailId: ID!
    groupId: ID!
    isVisible: Boolean
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    users: [User]
    groups: [Group]
    events: [Event]
    bioDetails: [BioDetail]
    bioDetailToGroup: [BioDetailToGroup]
  }
`;
