const typeDef = `
type User {
    id: ID
    username: String
    password: String
}

type Project {
    id: ID
    title: String
    description: String
    date_created: String
}

type Comment {
    id: ID
    comment_description: String
    date_created: Date
}

type Auth {
    token: ID!
    user: User
}

type Query {}

type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
}
`

module.exports = typeDef;