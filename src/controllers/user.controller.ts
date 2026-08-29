import { Request, Response } from "express";
import { CreateUserDto } from "../dto/user.dto";
import { createUserService } from "../services/user.service";
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

export const createUser = (req: Request, res: Response): void => {

    const user: CreateUserDto = req.body;

    const result = createUserService(user);

    res.status(201).json({
        message: "Usuario creado correctamente",
        user: result
    });
};