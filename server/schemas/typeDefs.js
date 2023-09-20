const typeDefs = `
type User {
    _id: ID
    email: String
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
    date_created: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user: User
    projects: [Project]
    project: Project
    comments: [Comment]
    comment: Comment
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(comment_description: String): Comment
    addProject(title: String, description: String): Project
    removeUser: User
    removeProject(projectId: ID!): Project
}
`

module.exports = typeDefs;