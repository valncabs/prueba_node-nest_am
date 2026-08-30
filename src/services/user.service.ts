import type { CreateUserDto } from "../dto/request/user.dto";
import type { UserRepository } from "../repositories/interfaces/user.repository.interface";


export const createUserService = async (user: CreateUserDto, repository: UserRepository): Promise<CreateUserDto> => {

    return repository.createUser(user);
};