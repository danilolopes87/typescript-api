import { MongoClient as Mongo, Db } from "mongodb";
import { MongoUser } from "../repositories/mongo-protocols";
import { User } from "../models/user";

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL || "localhost: 27017";
    const username = process.env.MONGO_USERNAME;
    const password = process.env.MONGO_PASSWORD;

    const client = new Mongo(url, { auth: { username, password } });
    const db = client.db("users-db");

    this.client = client;
    this.db = db;

    console.log("connected to mongodb!");
  },
  mapUser(mongoUser: MongoUser): User {
    const { _id, ...rest } = mongoUser;

    return { id: _id.toHexString(), ...rest };
  },
};
