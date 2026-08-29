import { Router } from "express";

const router = Router()



router.get("/", (req, res)=>{
    res.json({
        message: "Lista de usuarios"
    })
})

router.get("/:id", (req, res)=>{
    res.json({
        message: "Usuario encontrado",
        id: req.params.id
    })
})

export default router