import { ChangeEvent } from "react";
import { ContextoImagenes } from "../context";
import "../styles/buscador.scss";

export function Buscador() {
  const {setBuscar} = ContextoImagenes();
  const escribir = (e:ChangeEvent<HTMLInputElement>) =>{
    setBuscar(e.target.value);
  }
  return (
    <div className="buscador">
        <label htmlFor="bucar">Buscar</label>
        <input type="text" placeholder='Escribir...' onChange={escribir}/>
    </div>
  )
}
