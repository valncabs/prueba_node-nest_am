import type { NextFunction, Request, Response } from "express";

export const getUsers = (req: Request, res: Response):void =>{

    res.status(200).json({
        message: 'Lista de usuarios'
    })
} 