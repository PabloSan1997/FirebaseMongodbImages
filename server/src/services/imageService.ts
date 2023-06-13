import { ModelImage } from "../db/models";
import { ImagenesRes, ImagenesReq } from "../mytypes";
import boom, {Boom} from "@hapi/boom";

export class ServicioImage {
    async leerImagenes(): Promise<ImagenesRes[]> {
        const datos: ImagenesRes[] = await ModelImage.find();
        if (datos.length===0) {
            throw boom.notFound("No se encontraron datos");
        }
        return datos;
    }
    async agregarImagen (body: ImagenesReq):Promise<ImagenesRes | unknown>{
        try {
            const agregar = await ModelImage.create(body);
        return agregar;
        } catch (error) {
            throw boom.badRequest("No se puede agregar elemento");
        }
    }
}
