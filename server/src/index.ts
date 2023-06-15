import express ,{Express} from "express";
import cors from "cors";
import { conectar } from "./db/config";
import { crearApi } from "./routes";
import { boomHandle } from "./middlewares/boomHandle";

const PUERTO = process.env.PORT || 3006;
const app: Express = express();


conectar();
app.use(express.json());
app.use(cors());

crearApi(app);
app.use(boomHandle);
app.get("/", (req, res)=>{
    res.json({message:"Bienvenido a mi api :)"});
});

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}/`);
});