import dotenv from 'dotenv';
import cors from 'cors';
import express from "express";

import EndpointRouter from "../routes/EndPoinst.routes.js"

dotenv.config();

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use("/get" , EndpointRouter)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`se escucha en el puerto: ${this.port}`);
        });
    }
}

export default Server;