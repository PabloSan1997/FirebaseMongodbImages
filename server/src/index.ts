import express ,{Express, Router, Request, NextFunction} from "express";
import cors from "cors";

const PUERTO = process.env.PORT || 3006;

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.json({message:"Bienvenido a mi api :)"});
});

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}/`);
});