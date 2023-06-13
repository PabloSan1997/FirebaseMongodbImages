import Mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const db_url = process.env.URL_DB as string;

export function conectar(){
    Mongoose.connect(db_url)
    .then(() => console.log("Conectado a la base de datos"))
    .catch(()=>console.log("Error al conectar a la base de datos"));
}