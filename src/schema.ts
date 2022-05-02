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
    bioDetails: [BioDetail]
    events: [Event]
    groups: [Group]
    giftGalleries: [GiftGallery]
  }

  type Group {
    id: ID!
    createdAt: String
    name: String
    users: [User]
  }

  type Event {
    id: ID!
    createdAt: String
    name: String
    month: Int!
    day: Int!
    repeatsAnnually: Boolean
    owner: User
  }

  type BioDetail {
    id: ID!
    type: String
    text: String
    owner: User
  }

  type BioDetailToGroup {
    id: ID!
    bioDetail: BioDetail
    group: Group
    isVisible: Boolean
  }

  type GiftGallery {
    id: ID!
    event: Event
    user: User
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    users: [User]
    groups: [Group]
    events: [Event]
    bioDetails: [BioDetail]
    bioDetailToGroup: [BioDetailToGroup]
    giftGalleries: [GiftGallery]
  }
`;
