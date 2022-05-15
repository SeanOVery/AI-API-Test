const { Message } = require('../models');

const resolvers = {
  Query: {
    message: async () => {
      return Message.find({});
    },
  },
  Mutation: {
    createMessage: async (parent, args) => {
      const message = await Message.create(args);
      return message;
    },
  },
};

module.exports = resolvers;
