

export async function eliminarInfo({_id}:{_id:string}){
    try {
        const solicitud:Solicitud={
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({_id})
        }
        const datos = await fetch("https://guardarimagenes.onrender.com/api/v1/imagen", solicitud);
        if(!datos.ok){
            throw "error"
        }
        const id = await datos.json();
        return id.id;
    } catch (error) {
        throw "error al eliminar info"
    }
}