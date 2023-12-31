import {ImagenesReq, ImagenesRes} from "../mytypes";
import joi from "joi";

const title = joi.string();
const  id = joi.string();
const url = joi.string();

export const agregarImagen:joi.ObjectSchema<ImagenesReq> = joi.object(
    {
        title:title.required(),
        images:{
            id:id.required(),
            url:url.required()
        }
    }
);
export const eliminarImagen: joi.ObjectSchema<{_id:string}>=joi.object({
    _id:id.required()
});