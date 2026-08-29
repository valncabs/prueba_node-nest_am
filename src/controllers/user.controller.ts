import type { Request, Response } from "express";
import type { createUserDto } from "../dto/user.dto";

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

    if (!req.body.name || !req.body.email) {
        res.status(400).json({
            message: "Nombre y email son obligatorios"
        });
        return;
    }

    const user : createUserDto = req.body;

    res.status(201).json({
        message: "Usuario creado correctamente",
        user: user
    });
};