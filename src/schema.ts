import { GraphQLScalarType } from "graphql";

const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  scalar Date

  type User {
    id: ID!
    createdDate: Date!
    email: String!
    firstName: String!
    lastName: String
    events: [Event]
    bioDetails: [BioDetail]
    giftGalleries: [GiftGallery]
    groups: [Group]
  }

  input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Group {
    id: ID!
    createdDate: Date!
    name: String!
    users: [User!]!
    bioDetailGroups: [BioDetailGroup]!
    eventGroups: [EventGroup]!
  }

  type Event {
    id: ID!
    createdDate: Date!
    name: String!
    month: Int!
    day: Int!
    repeatsAnnually: Boolean!
    owner: User!
  }

  type BioDetail {
    id: ID!
    type: String!
    text: String!
    owner: User!
    bioDetailGroups: [BioDetailGroup]! #"public"
  }

  type BioDetailGroup {
    bioDetailGroupId: ID! #"public"
    bioDetail: BioDetail! #"public"
    group: Group! #"public"
    isVisible: Boolean! #"public"
  }

  type GiftGallery {
    id: ID!
    createdDate: Date!
    owner: User!
    event: Event!
    gifts: [Gift]!
  }

  type Gift {
    id: ID!
    createdDate: Date!
    imageUrl: String!
    caption: String
    isAnonymous: Boolean!
    archivedDate: Date!
    deletedDate: Date!
    giftGallery: GiftGallery!
    giver: User!
  }

  type EventGroup {
    eventGroupId: ID! #"Public"
    isVisible: Boolean! #"Public"
    event: Event! #"Public"
    group: Group! #"Public"
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    bioDetail(id: ID!): BioDetail!
    bioDetails: [BioDetail]!
    event(id: ID!): Event!
    events: [Event]!
    gift(id: ID!): Gift!
    gifts: [Gift]!
    giftGallery(id: ID!): GiftGallery!
    giftGalleries: [GiftGallery]!
    group(id: ID!): Group!
    groups: [Group]!
    user(id: ID!): User!
    users: [User]!
  }

  type Mutation {
    # users
    createUser(newUser: UserInput!): User!
    updateUser(id: ID!, userUpdateInput: UserInput!): User!
    deleteUser(id: ID!): Boolean
    # groups

  }
`;
