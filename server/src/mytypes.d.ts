

export type ImagenesReq = {
    title:string,
    images:{
        id:string,
        url:string
    }
}
export type ImagenesRes = {
    title:string,
    images:{
        id:string,
        url:string
    },
    _id:string
}