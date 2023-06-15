/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { eliminarImagen, subirImagen } from '../firebase/config';
import { mandarInfo } from '../Api/mandarInfo';
import { leerInfo } from '../Api/leerInfo';
import { eliminarInfo } from '../Api/eliminarInfo';
import { generarBuscador } from '../utilities/imagenMuestra';



const Contexto = React.createContext({});

const initialState = { title: "", images: { id: "", url: "" } };

export function Provedor({ children }: Hijo) {
  const [mostrarMenu, setMostrarMenu] = React.useState(false);
  const [llamar, setLlamar] = React.useState<ImagenReq>(initialState);
  const [actualizar, setActualizar] = React.useState(false);
  const [imagenes, setImagenes] = React.useState<ImagenRes[]>([]);
  const [id, setId] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [buscar, setBuscar] = React.useState<string>("");

  const imagenesMostrar: ImagenRes[] = generarBuscador(buscar, imagenes);

  const generar = async (nombre: string, imagen: File) => {
    const id = uuidv4();
    const url = await subirImagen(imagen, id);
    setLlamar({
      title: nombre,
      images: {
        id,
        url
      }
    });
  }

  React.useEffect(() => {
    (async () => {
      try {
        if (llamar.title && llamar.images.url) {
          setLoading(true);
          await mandarInfo(llamar);
          setActualizar(!actualizar);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [llamar]);

  React.useEffect(() => {
    (async () => {
      try {
        const info = await leerInfo();
        setImagenes(info);
      } catch (error) {
        setImagenes([]);
        console.error(error);
      }
      setLoading(false);
    })();
  }, [actualizar]);

  React.useEffect(() => {
    (async () => {
      try {
        if (id) {
          setLoading(true);
          const miId = await eliminarInfo({ _id: id });
          await eliminarImagen(miId);
          setActualizar(!actualizar);
        }
      } catch (error) {
        console.log(error);
        window.location.reload();
      }
    })();
  }, [id]);
  
  return (
    <Contexto.Provider value={
      {
        mostrarMenu,
        setMostrarMenu,
        generar,
        imagenes: imagenesMostrar,
        setId,
        loading,
        setBuscar
      }
    } >
      {children}
    </Contexto.Provider>
  )
}

export const ContextoImagenes = () => React.useContext(Contexto) as ValoresContexto;

