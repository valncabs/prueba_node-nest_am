import express from "express";
import type { Request, Response} from "express";
import userRouter from "./routes/user.routes";

const app = express()
app.use(express.json());


app.use("/users", userRouter);

// app.use((req: Request, res: Response, next: NextFunction):void =>{
//     console.log(`${req.method} ${req.url}`);
//     next()
// })


// const validateUser = (req: Request, res: Response, next: NextFunction): void => {
//     const { name } = req.body;
//     if (!name) {
//         res.status(400).json({
//             message: "El nombre es obligatorio"
//         });
//         return;
//     }
//     next();
// };

// app.post("/users", validateUser, (req: Request, res: Response) => {
//     const user = req.body;
//     res.status(201).json({
//         message: "Usuario creado",
//         user
//     });
// });

app.get("/health", (req: Request, res: Response)=>{
    res.json({
        status: 'ok',
        message: 'Servidor funcionando'
    })
})

// app.post("/users", (req, res) => {
//     const user = req.body;
//     console.log(user);

//     res.status(201).json({
//         message: "Usuario creado",
//         user: user
//     });
// });

app.listen(3000, ()=>{
    console.log('hola desde el puerto 3000')
})

