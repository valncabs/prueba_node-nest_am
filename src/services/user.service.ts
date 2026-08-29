import type { CreateUserDto } from "../dto/user.dto";
import type { UserRepository } from "../repositories/interfaces/user.repository.interface";
import { UserRepositoryImpl } from "../repositories/user.repository";

export const createUserService = async (user: CreateUserDto, repository: UserRepository): Promise<CreateUserDto> => {

    return repository.createUser(user);
};