import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";


const router = Router();

router.post("/", userController.createUser);
router.get("/", authMiddleware, userController.getUsers);
router.get("/:id", authMiddleware, userController.getUser);
router.put("/:id", authMiddleware, userController.updateUser);
router.delete("/:id", authMiddleware, userController.deleteUser);


export default router