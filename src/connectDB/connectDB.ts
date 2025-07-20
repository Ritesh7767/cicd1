import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.DB_URL}${process.env.DB_NAME}`)
        console.log("Database connection successfull at host :-", connection.connection.host)
    } catch (error) {
        console.error("Failed connecting database", error)
        process.exit(-1)
    }
}

