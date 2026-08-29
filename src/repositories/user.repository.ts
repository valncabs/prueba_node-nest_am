
import type { CreateUserDto } from "../dto/user.dto";
import type { UserRepository } from "./interfaces/user.repository.interface";

export class UserRepositoryImpl implements UserRepository {
    async createUser(user: CreateUserDto): Promise<CreateUserDto> {
    return  user;
    }
}
