export const schema = `#graphql

    type User {
        _id: ID!,
        username: String!,
        email: String!,
        password: String! 
    }

    type Todo {
        _id: ID!,
        task: String!,
        completed: Boolean!,
        user: User!
    }

    type Query {
        getAllTodos: [Todo]!,
        getTodo (id: ID!): Todo!
    }
`