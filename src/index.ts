import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from 'dotenv'
import { connectDB } from "./connectDB/connectDB";
import server from './app'

dotenv.config()

connectDB()
.then(() => {
    startStandaloneServer(server, {
        listen: {
            port: 4444
        }
    })
    .then(() => console.log("Server started at port 4444"))
    .catch(() => console.log("Server failed to start"))
})
.catch((error) => {
    console.error("Something went wrong with database", error)
    process.exit(-1)
})