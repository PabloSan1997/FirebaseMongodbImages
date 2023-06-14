

export async function leerInfo():Promise<ImagenRes[]>{
    try {
        const leer = await fetch("https://guardarimagenes.onrender.com/api/v1/imagen");
        if(!leer.ok){
            throw {status:leer.status}
        }
        const imagenes = await leer.json() as ImagenRes[];
        return imagenes;
    } catch (error) {
        const {status} = error as {status:string};
        if(status){
            throw `Error al obtener datos Error: ${status}`;
        }
        throw "Error al obtener datos"
    }
}