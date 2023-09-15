const typeDef = `
type User {
    _id: ID
    username: String
    password: String
}

type Project {
    _id: ID
    title: String
    description: String
    date_created: String
}

type Comment {
    _id: ID
    comment_description: String
    date_created: Date
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user: User
    projects: [Project]
    comments: [Comment]
}

type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addComment(comment_description: String): Comment
}
`

module.exports = typeDef;