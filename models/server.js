const express = require('express');
const cors = require('cors');

const {dbConnection} = require('../database/config.js');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT 

        this.paths = {
            medicamentos: '/api/medicamentos',
            ventas: '/api/ventas',
            compras: '/api/compras',
            proveedores: '/api/proveedores',
            pacientes: '/api/pacientes',
            empleados: '/api/empleados',
        }
        //Conectar a base de datos MONGODB
        this.connectDB();
        //Middlewares
        this.middleware();
        //Routing
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middleware(){
        //cors
        this.app.use(cors());
        //Leer y parsear JSON en BODY
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.medicamentos, require('../routes/medicamentos.routes.js'))
        this.app.use(this.paths.ventas, require('../routes/ventas.routes.js'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT: ${this.port}`);
        })
    }
}

module.exports = Server;