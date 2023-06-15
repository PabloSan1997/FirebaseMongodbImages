import express ,{Express} from "express";
import cors from "cors";
import { conectar } from "./db/config";
import { crearApi } from "./routes";
import { boomHandle } from "./middlewares/boomHandle";

const PUERTO = process.env.PORT || 3006;
const app: Express = express();


let corsOptions = {
    origin: '"https://imagenesguardar.onrender.com/"',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
conectar();
app.use(express.json());
app.use(cors(corsOptions));

crearApi(app);
app.use(boomHandle);
app.get("/", (req, res)=>{
    res.json({message:"Bienvenido a mi api :)"});
});

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}/`);
});