const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # TODO: Add a comment describing the functionality of this statement
  # outlines the fields of the class model
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  # defing the queries the front-end is allowed to make and the type of data that is returned
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
