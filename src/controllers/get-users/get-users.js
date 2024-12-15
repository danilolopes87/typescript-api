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
exports.GetUsersController = void 0;
const helpers_1 = require("../helpers");
class GetUsersController {
    constructor(getUsersRepository) {
        this.getUsersRepository = getUsersRepository;
    }
    handle() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.getUsersRepository.getUsers();
                return (0, helpers_1.ok)(users);
            }
            catch (error) {
                return (0, helpers_1.serverError)();
            }
        });
    }
}
exports.GetUsersController = GetUsersController;
