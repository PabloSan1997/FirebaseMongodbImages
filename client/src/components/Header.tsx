import { ContextoImagenes } from "../context";
import "../styles/header.scss";
import { Bars3Icon } from '@heroicons/react/24/solid'

export  function Header() {
  const {setMostrarMenu, mostrarMenu} = ContextoImagenes();
  console.log(mostrarMenu);
  const mostrar = () =>{
    setMostrarMenu(!mostrarMenu);
  }
  return (
    <header>
        <h1>Mis imagenes</h1>
        <Bars3Icon className='menuDesplegar' onClick={mostrar}/>
    </header>
  )
}
