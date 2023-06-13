import express, { Express, Router, Request, NextFunction } from "express";
import { ServicioImage } from "../services/imageService";
import { validatorHandler } from "../middlewares/joiHandle";
import { agregarImagen } from "../schemas/imagenSchema";

const servicio = new ServicioImage();

export const routerUser: Router = express.Router();

routerUser.get("/", async (req, res, next) => {
    try {
        const data = await servicio.leerImagenes();
        res.json(data);
    } catch (error) {
        next(error);
    }
});

routerUser.post("/",validatorHandler(agregarImagen, "body") ,async (req, res, next) => {
    const {body} = req;
    try {
        const data = await servicio.agregarImagen(body);
        res.json(data);
    } catch (error) {
        next(error);
    }
});