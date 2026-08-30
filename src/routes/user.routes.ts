import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";

const router = Router();

router.post("/", userController.createUser);

router.get(
    "/",
    authMiddleware,
    roleMiddleware([1]),
    userController.getUsers
);

router.get(
    "/:id",
    authMiddleware,
    roleMiddleware([1]),
    userController.getUser
);

router.put(
    "/:id",
    authMiddleware,
    roleMiddleware([1]),
    userController.updateUser
);

router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware([1]),
    userController.deleteUser
);
export default router