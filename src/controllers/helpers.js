"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.badRequest = exports.created = exports.ok = void 0;
const protocols_1 = require("./protocols");
const ok = (body) => ({
    statusCode: protocols_1.HttpStatusCode.OK,
    body,
});
exports.ok = ok;
const created = (body) => ({
    statusCode: protocols_1.HttpStatusCode.CREATED,
    body,
});
exports.created = created;
const badRequest = (message) => {
    return {
        statusCode: protocols_1.HttpStatusCode.BAD_REQUEST,
        body: message,
    };
};
exports.badRequest = badRequest;
const serverError = () => {
    return {
        statusCode: protocols_1.HttpStatusCode.SERVER_ERROR,
        body: "Something went wrong",
    };
};
exports.serverError = serverError;
