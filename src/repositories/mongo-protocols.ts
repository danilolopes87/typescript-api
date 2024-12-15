import { ObjectId } from "mongodb";
import { User } from "../models/user";

export type MongoUser = Omit<User, "id"> & { _id: ObjectId };
