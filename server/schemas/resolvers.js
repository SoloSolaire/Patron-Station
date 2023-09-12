const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Mutation: {
        addUser: async (parent, args) => {},
        
    }
}

module.exports = resolvers;