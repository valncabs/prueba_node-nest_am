import { Request, Response } from "express";
import { CreateUserDto } from "../dto/request/user.dto";
import { createUserService } from "../services/user.service";
import { UserRepositoryImpl } from "../repositories/user.repository";

export const getUsers = (req: Request, res: Response):void =>{
    
    res.status(200).json({
        message: 'Lista de usuarios'
    })
} 

export const getUser = (req: Request, res: Response):void=>{
    res.status(200).json({
        message: "Usuario encontrado",
        id: req.params.id
    })
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
const user: CreateUserDto = req.body;
    const repository = new UserRepositoryImpl();
    const result = await createUserService(user, repository);
    res.status(201).json({
        message: "Usuario creado correctamente",
        user: result
    });
};