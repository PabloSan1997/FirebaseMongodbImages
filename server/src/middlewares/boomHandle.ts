import express ,{ Request, Response,NextFunction} from "express";
import {Boom} from "@hapi/boom";

export function boomHandle(error:Boom, req:Request, res:Response, next:NextFunction){
    if(error.isBoom){
        const info = error.output.payload;
        res.status(info.statusCode).json(info);
    }
    next(error);
}