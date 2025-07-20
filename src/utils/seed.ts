import mongoose from 'mongoose';
import { User } from '../models/user.model'
import { Todo } from '../models/todo.model'

import bcrypt from 'bcrypt';

const MONGO_URI = 'mongodb://localhost:27017/GRAPHQL_TODO'; // replace with your URI

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("🟢 Connected to MongoDB");

    // Clean existing data
    await User.deleteMany();
    await Todo.deleteMany();

    console.log("🧹 Cleared existing users and todos");

    // Create users
    const hashedPassword = await bcrypt.hash("password123", 10);

    const users = await User.insertMany([
      {
        username: "ritesh",
        email: "ritesh@example.com",
        password: hashedPassword,
      },
      {
        username: "laxman",
        email: "laxman@example.com",
        password: hashedPassword,
      }
    ]);

    console.log("👤 Users created");

    // Create todos
    const todos = await Todo.insertMany([
      {
        task: "Complete backend assignment",
        completed: false,
        user: users[0]._id,
      },
      {
        task: "Study MongoDB aggregations",
        completed: true,
        user: users[0]._id,
      },
      {
        task: "Build portfolio project",
        completed: false,
        user: users[1]._id,
      }
    ]);

    console.log("✅ Todos created");
  } catch (err) {
    console.error("❌ Seeding error:", err);
  } finally {
    mongoose.disconnect();
  }
}

seed();
