import { Request, Response } from "express";
import * as taskService from "../services/task.service";

export const createTask = async (
    req: Request,
    res: Response
) => {
    try {
        const { title, description } = req.body;

        const userId = 4;

        const task = await taskService.createTask({
            title,
            description,
            userId
        });

        res.status(201).json({
            message: "Tarea creada correctamente",
            task
        });

    } catch (error) {
        console.error("ERROR AL CREAR TAREA:", error);

        res.status(500).json({
            message: "Error al crear tarea"
        });
    }
};