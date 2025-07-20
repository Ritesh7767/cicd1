import { ApolloServer } from "@apollo/server";
import { schema } from "./graphql/schema";
import { getAllTodos, getTodo } from "./controllers/todo.controller";

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
        Query: {
            getAllTodos,
            getTodo
        }
    }
})

console.log("hii there")

export default server