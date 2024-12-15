"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoCreateUserRepository = void 0;
const mongo_1 = require("../../database/mongo");
class MongoCreateUserRepository {
    createUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { insertedId } = yield mongo_1.MongoClient.db
                .collection("users")
                .insertOne(params);
            const user = yield mongo_1.MongoClient.db
                .collection("users")
                .findOne({ _id: insertedId });
            if (!user) {
                throw new Error("User not created");
            }
            return mongo_1.MongoClient.mapUser(user);
        });
    }
}
exports.MongoCreateUserRepository = MongoCreateUserRepository;
