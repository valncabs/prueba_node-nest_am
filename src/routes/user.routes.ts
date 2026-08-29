import { Router } from "express";
import { getUsers } from "../controllers/user.controller";

const router = Router()


router.get("/", getUsers)

router.get("/:id", (req, res)=>{
    res.json({
        message: "Usuario encontrado",
        id: req.params.id
    })
})

export default router