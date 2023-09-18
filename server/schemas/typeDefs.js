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
    comments: [Comment]
}

type Mutation {
    addUser(username: String, email: String, password: String): Auth
    login(email: String, password: String): Auth
    addComment(comment_description: String): Comment
    addProject(title: String, description: String): Project
}
`

module.exports = typeDefs;