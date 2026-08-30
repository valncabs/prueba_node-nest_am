import type { CreateUserDto } from "../../dto/request/user.dto";

export interface UserRepository {
    createUser(user: CreateUserDto): Promise<CreateUserDto>;
}