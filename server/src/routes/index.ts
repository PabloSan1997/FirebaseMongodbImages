import express ,{Express, Router, Request, NextFunction} from "express";
import { routerUser } from "./routerImage";

const router:Router = express.Router();

export function crearApi(app:Router){
    app.use("/api/v1", router);
    router.use("/imagen", routerUser);
}