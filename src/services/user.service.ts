import type { CreateUserDto } from "../dto//request/user.dto";
import User from "../models/User";
import type { UserRepository } from "../repositories/interfaces/user.repository.interface";
import bcrypt from 'bcrypt'

export const createUserService = async (user: CreateUserDto, repository: UserRepository): Promise<User> => {
    //hash (10, salt)
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const userWithHashedPassword = {
        ...user,
        password: hashedPassword
    };

    return repository.createUser(userWithHashedPassword);
};