import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByEmail } from "../repositories/user.repository";

export const loginUser = async (email: string, password: string) => {
    const user = await findUserByEmail(email);
    if (!user) {
        throw new Error("Usuario no encontrado");
    }
    if (!user.status) {
        throw new Error("Usuario inactivo");
    }
    const passwordCorrecta = await bcrypt.compare(
        password,
        user.password
    );
    if (!passwordCorrecta) {
        throw new Error("Contraseña incorrecta");
    }
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            name: user.name,
            roleId: user.roleId
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn: "1h"
        }
    );
    return {
        message: "Login correcto",
        token
    };
};