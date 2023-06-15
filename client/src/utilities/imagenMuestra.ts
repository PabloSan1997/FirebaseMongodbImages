
type Event = React.ChangeEvent<HTMLInputElement>
export function generarImagenVista(setImagen: { (a: File): void }, setVista: { (a: string): void }, e:Event ) {
    if (e.target.files) {
        const readfile = new FileReader();
        readfile.readAsDataURL(e.target.files[0]);
        readfile.addEventListener("load", (e) => {
            if (e.target?.result) {
                setVista(e.target.result as string);
            }
        });
        setImagen(e.target.files[0]);
    }
}



export function generarBuscador(buscar: string, imagenes: ImagenRes[]) {
    if (!buscar) {
      return imagenes;
    } else {
      const imagenesClonar = [...imagenes];
      return imagenesClonar.filter(elemento => {
        const buscarMayus = buscar.toLocaleUpperCase();
        const tituloGrande = elemento.title.toLocaleUpperCase();
        return tituloGrande.includes(buscarMayus);
      });
    }
  }