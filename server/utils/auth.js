const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'spookyscarysecret';
const expiration = '2h';

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user. :(', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    signToken: function ({ username, id }) {
        const payload = { username, id };
        return jwt.sign({ data: payload }, secret, { expiration });
    },
};