/// <reference types="vite/client" />

// Api

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

//Contexto
type Hijo = {
	children:JSX.Element | JSX.Element[]
}
type ValoresContexto = {
	mostrarMenu:boolean,
	setMostrarMenu:{
		(a:boolean):void
	}
}