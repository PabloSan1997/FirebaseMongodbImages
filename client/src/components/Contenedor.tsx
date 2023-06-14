import { ContextoImagenes } from "../context"
import "../styles/contenedor.scss"
import { Caja } from "./Caja";


export function Contenedor() {
    const { imagenes, loading } = ContextoImagenes();
    return (
        <>
            {!loading ? (<div className="contenedor">
                {imagenes.map(elemento => (
                    <Caja key={elemento._id} {...elemento} />
                ))}
            </div>) : <div className="loading"></div>}
        </>
    )
}
