import { JwtPayload } from "jsonwebtoken";

export interface AuthPayload extends JwtPayload {
    id: number;
    roleId: number;
}

declare global {
    namespace Express {
        interface Request {
            user?: AuthPayload;
        }
    }
}