import { TaskRepositoryImpl } from "../repositories/task.repository";

const taskRepository = new TaskRepositoryImpl();

export const createTask = async (data: {
    title: string;
    description?: string;
    userId: number;
}) => {
    return await taskRepository.create(data);
};

export const getAllTasks = async () => {
    return await taskRepository.findAll();
};

export const getTaskById = async (id: number) => {
    const task = await taskRepository.findById(id);

    if (!task) {
        throw new Error("Tarea no encontrada");
    }

    return task;
};

export const updateTask = async (
    id: number,
    data: {
        title?: string;
        description?: string;
        status?: string;
    }
) => {
    const task = await taskRepository.update(id, data);

    if (!task) {
        throw new Error("Tarea no encontrada");
    }

    return task;
};

export const deleteTask = async (id: number) => {
    const task = await taskRepository.delete(id);

    if (!task) {
        throw new Error("Tarea no encontrada");
    }

    return task;
};

