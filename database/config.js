import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.MONGO_URI;
const nombreDB = process.env.BDKEY;
const client = new MongoClient(url);
const conection = async () => {
  try {
    await client.connect();
    const db = client.db(nombreDB);
    const colections = {
      Compras: db.collection("Compras"),
      Empleados: db.collection("Empleados"),
      Medicamentos: db.collection("Medicamentos"),
      Pacientes: db.collection("Pacientes"),
      Proveedores: db.collection("Proveedores"),
      Ventas: db.collection("Ventas")
    };
    console.log("Coneccion Exitosa");
    return colections;
  } catch (error) {
    console.log(error);
    throw new Error("Paila no se pudo conectar a la db");
  }
};
export { conection, client };