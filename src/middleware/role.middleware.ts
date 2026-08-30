import { Request, Response, NextFunction } from "express";



export const adminMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    if (!req.user) {
        return res.status(401).json({
            message: "Usuario no autenticado"
        });
    }
    
    if (req.user.roleId !== 1) {
        return res.status(403).json({
            message: "No tienes permisos para realizar esta acción"
        });
    }

    next();
};