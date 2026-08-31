import { Request, Response } from "express";
import * as taskService from "../services/task.service";

export const createTask = async (
    req: Request,
    res: Response
) => {
    try {
        const { title, description } = req.body;
        if (!req.user) {
            return res.status(401).json({
                message: "Usuario no autenticado"
            });
        }
        const userId = req.user.id;
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


export const getAllTasks = async (
    req: Request,
    res: Response
) => {
    try {
        const tasks = await taskService.getAllTasks();

        res.status(200).json({
            message: "Tareas obtenidas correctamente",
            tasks
        });

    } catch (error: any) {
        console.error("ERROR AL OBTENER TAREAS:", error);

        res.status(500).json({
            message: "Error al obtener tareas",
            error: error.message
        });
    }
};

export const getTaskById = async (
    req: Request,
    res: Response
) => {
    try {
        const id = Number(req.params.id);

        const task = await taskService.getTaskById(id);

        res.status(200).json({
            message: "Tarea obtenida correctamente",
            task
        });

    } catch (error: any) {
        console.error("ERROR AL OBTENER TAREA:", error);

        res.status(404).json({
            message: error.message
        });
    }
};


export const deleteTask = async (
    req: Request,
    res: Response
) => {
    try {
        const id = Number(req.params.id);

        const task = await taskService.deleteTask(id);

        res.status(200).json({
            message: "Tarea eliminada correctamente",
            task
        });

    } catch (error: any) {
        console.error("ERROR AL ELIMINAR TAREA:", error);

        res.status(404).json({
            message: error.message
        });
    }
};


export const updateTask = async (
    req: Request,
    res: Response
) => {
    try {
        const id = Number(req.params.id);

        const { title, description, status } = req.body;

        const task = await taskService.updateTask(id, {
            title,
            description,
            status
        });

        res.status(200).json({
            message: "Tarea actualizada correctamente",
            task
        });

    } catch (error: any) {
        console.error("ERROR AL ACTUALIZAR TAREA:", error);

        res.status(404).json({
            message: error.message
        });
    }
};

