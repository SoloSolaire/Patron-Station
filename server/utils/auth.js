const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.AUTH_SECRET;
const expiration = '2h';

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user. :(', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    signToken: function ({ username, _id }) {
        const payload = { username, _id };
        return jwt.sign({ data: payload }, secret, { expiration });
    },
};