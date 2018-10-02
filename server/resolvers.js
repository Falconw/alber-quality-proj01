const users = require("./users");

const resolvers = {
  Query: {
    getUsers: () => users
  }

  //   Mutation: {}
};

module.exports = resolvers;
