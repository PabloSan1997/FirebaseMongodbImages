/// <reference types="vite/client" />

// Api
type Solicitud = {
	method:"DELETE" | "POST",
	headers:{
		"Content-Type":"application/json"
	},
	body:string
}
type ImagenReq={
    title: string,
	images: {
		id: string,
		url: string
	}
}

type ImagenRes = {
    title: string,
	images: {
		id: string,
		url: string
	},
    _id:string
}

type generarURL = {
	nombre:string,
	imagen:File
}

//Contexto
type Hijo = {
	children:JSX.Element | JSX.Element[]
}
type ValoresContexto = {
	mostrarMenu:boolean,
	setMostrarMenu:{
		(a:boolean):void
	},
	generar:{
		(a:string, b:File):Promise<void>
	},
	imagenes:ImagenRes[],
	setId:{
		(a:string):void
	},
	loading:boolean,
	setBuscar:{
		(a:string):void
	}
}