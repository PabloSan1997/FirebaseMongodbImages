import { XMarkIcon } from '@heroicons/react/24/solid'
import { ContextoImagenes } from '../context';

export function Caja({title, images, _id}:ImagenRes) {
    const { url, id} = images;
    const {setId} = ContextoImagenes();
    const borrar = () =>{
       setId(_id);
    }
  return (
    <div className="caja">
        <XMarkIcon className='cerrar' onClick={borrar}/>
        <img src={url} alt={id} className="foto" />
        <h2 className='nombre'>{title}</h2>
    </div>
  )
}
