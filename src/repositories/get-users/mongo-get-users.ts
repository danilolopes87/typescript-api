import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Danilo",
        lastName: "Lopes",
        email: "danilo@email.com",
        password: "123",
      },
    ];
  }
}
