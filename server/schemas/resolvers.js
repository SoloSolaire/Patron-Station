const { User, Project, Comment } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { userId }) => {
            return User.findOne({ id: userId });
        },
        
        projects: async () => {
            return Project.find();
        },

        comments: async () => {
            return Comment.find();
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw AuthenticationError
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError
            }

            const token = signToken(user);

            return { token, user };
        },
        addComment: async (parent, { comment_description }) => {
            return Comment.create({ comment_description });
        },
        addProject: async (parent, { title, descprition }) => {
            return Project.create({ title, descprition });
        },
    }
}

module.exports = resolvers;