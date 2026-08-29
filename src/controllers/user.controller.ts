import type { Request, Response } from "express";

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

    const user = req.body;

    res.status(201).json({
        message: "Usuario creado correctamente",
        user: user
    });
};