import "../styles/buscador.scss";

export function Buscador() {
  return (
    <div className="buscador">
        <label htmlFor="bucar">Buscar</label>
        <input type="text" placeholder='Escribir...'/>
    </div>
  )
}
