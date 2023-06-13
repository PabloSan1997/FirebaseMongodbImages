import Mongoose from "mongoose";

const imageScema = new Mongoose.Schema(
    {
        title:{
            type:String,
            require:true
        },
        images:{
            id:{
                type:String,
                required:true,
                unique:true
            },
            url:{
                type:String,
                required:true
            }
        }
    },
    {
        versionKey:false
    }
);

export const ModelImage= Mongoose.model("imagenes", imageScema);