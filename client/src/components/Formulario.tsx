import { ContextoImagenes } from "../context";
import "../styles/formulario.scss";

export function Formulario() {
    const {mostrarMenu} = ContextoImagenes();
    return (
        <form className={mostrarMenu?"activado":""}>
            <h2>Agregar imagen</h2>
            <div className="entrada">
                <label htmlFor="textoNombre">Titulo</label>
                <input type="text" className='texto' placeholder='Escribir...' id="textoNombre"/>
            </div>
            <label htmlFor="agregar" className="botonAgregar">Subir Imagen</label>
            <input type="file" id="agregar" />
        </form>
    )
}
