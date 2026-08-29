import { Router } from "express";
import { getUsers, getUser, createUser } from "../controllers/user.controller";
import { validateCreateUser } from "../middleware/validateUser";
const router = Router()


router.get("/", getUsers)
router.get("/:id", getUser)
router.post("/", validateCreateUser, createUser);

export default router