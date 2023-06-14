

export async function mandarInfo(data:ImagenReq):Promise<void>{
        const solicitud:Solicitud = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
        const mandar = await fetch("https://guardarimagenes.onrender.com/api/v1/imagen", solicitud);
        if(!mandar.ok){
            throw "Error al mandar datos"
        }
        const datos = await mandar.json();
        console.log(datos);
}