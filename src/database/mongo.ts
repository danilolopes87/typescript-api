import { MongoClient as Mongo, Db } from "mongodb";
import { MongoUser } from "../repositories/mongo-protocols";
import { User } from "../models/user";

export const MongoClient = {
  client: null as unknown as Mongo,
  db: null as unknown as Db,

  async connect(): Promise<void> {
    try {
      const url = process.env.MONGODB_URL || "mongodb://localhost:27017";
      const username = process.env.MONGO_USERNAME;
      const password = process.env.MONGO_PASSWORD;

      const client =
        username && password
          ? new Mongo(url, { auth: { username, password } })
          : new Mongo(url);

      await client.connect();

      const db = client.db("users-db");

      this.client = client;
      this.db = db;

      console.log("Connected to MongoDB!");
    } catch (error) {
      console.error("Failed to connect to MongoDB", error);
      throw error; // Lança o erro para que possa ser tratado no nível superior
    }
  },

  mapUser(mongoUser: MongoUser): User {
    const { _id, ...rest } = mongoUser;
    return { id: _id.toHexString(), ...rest };
  },

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      console.log("Disconnected from MongoDB.");
    }
  },
};
