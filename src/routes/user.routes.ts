import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/user.controller";
import { validateCreateUser } from "../middleware/validateUser";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router()


router.get("/", authMiddleware, getUsers);
router.get("/:id", getUser)
router.post("/", validateCreateUser, createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


export default router