import type { CreateUserDto } from "../../dto/user.dto";

export interface UserRepository {
    createUser(user: CreateUserDto): Promise<CreateUserDto>;
}