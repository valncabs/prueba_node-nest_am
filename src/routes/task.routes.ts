import { Router } from "express";
import * as taskController from "../controllers/task.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { upload } from "../middleware/upload.middleware";

const router = Router();

router.use(authMiddleware);

router.post(
    "/import",
    authMiddleware,
    upload.single("file"),
    taskController.importTasks
);


router.post("/", taskController.createTask);
router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export default router;