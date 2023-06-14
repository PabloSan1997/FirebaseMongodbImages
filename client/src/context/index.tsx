import React from 'react';


const Contexto = React.createContext({});


export  function Provedor({children}:Hijo) {
    const [mostrarMenu, setMostrarMenu] = React.useState(false);
  return (
    <Contexto.Provider value={
        {
            mostrarMenu,
            setMostrarMenu
        }
    } >
        {children}
    </Contexto.Provider>
  )
}

export const ContextoImagenes = () => React.useContext(Contexto) as ValoresContexto;