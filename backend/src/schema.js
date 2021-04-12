import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    quacks: [Quack!]!
    users: [User!]!
    user(userName: String!): User
  }

  type Mutation {
    addQuack(text: String!): Quack!
  }

  type User {
    id: Int!
    name: String!
    userName: String!
    profileImageUrl: String

    quacks: [Quack!]!
  }

  type Quack {
    id: Int!
    createdAt: String!
    userId: Int!
    text: String!

    user: User
  }
`;
