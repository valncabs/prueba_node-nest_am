import type { CreateUserDto } from "../dto/request/user.dto"
import User from "../models/User";
import type { UserRepository } from "./interfaces/user.repository.interface";

export class UserRepositoryImpl implements UserRepository {

    async createUser(user: CreateUserDto): Promise<User> {
        return User.create(user);
    }
}