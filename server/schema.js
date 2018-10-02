const { gql } = require("apollo-server");

const typeDefs = gql`
  # This "User" type can be used in other type declarations.
  type User {
    userName: String
    password: String
    role: String
  }

  type Query {
    # This function display all users
    getUsers: [User]
  }
`;

module.exports = typeDefs;
