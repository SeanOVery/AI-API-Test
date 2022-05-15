const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Message {
    _id: ID!
    message: String!
    response: String!
  }

  type Query {
    message: [Message]
  }

  type Mutation {
    createMessage(message: String!, response: String!): Message
  }
`;

module.exports = typeDefs;
