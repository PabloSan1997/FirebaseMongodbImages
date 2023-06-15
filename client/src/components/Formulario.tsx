import { ContextoImagenes } from "../context";
import "../styles/formulario.scss";
import React from 'react';
import { generarImagenVista } from "../utilities/imagenMuestra";

export function Formulario() {
    const { mostrarMenu, generar, setMostrarMenu } = ContextoImagenes();
    const [imagen, setImage] = React.useState<File>();
    const [nombre, setNombre] = React.useState<string>("");
    const [vista, setVista] = React.useState("");
    const agregarImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            generarImagenVista(setImage, setVista, e);
        }
    }
    const subir = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (imagen && nombre) {
            await generar(nombre, imagen);
            setVista("");
            setNombre("");
            setMostrarMenu(false);
        }
    }
    return (
        <form className={mostrarMenu ? "activado" : ""} onSubmit={subir}>
            <h2>Agregar imagen</h2>
            <div className="entrada">
                <label htmlFor="textoNombre">Titulo</label>
                <input
                    type="text"
                    className='texto'
                    placeholder='Escribir...'
                    id="textoNombre"
                    onChange={e => setNombre(e.target.value)}
                    value={nombre}
                />
            </div>
            <label htmlFor="agregar" className="botonAgregar">Subir Imagen</label>
            <input type="file" id="agregar" accept="image/png,image/jpeg" onChange={agregarImagen} />
            <img
                src={vista}
                className="imagenMuestra" />
            <button className="boton">Agregar</button>
        </form>
    )
}
