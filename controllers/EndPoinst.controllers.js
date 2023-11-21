import { ObjectId } from "mongodb";
import { conection } from "../database/config.js";

export const endpoint1 = async (req, res) => {
    try {
        const endpoint = (await conection()).Medicamentos
        const result = await endpoint.find({ stock: { $lt: 50 } }).toArray();
        res.json(result);
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint2 = async (req, res) => {
    try {
        const endpoint = (await conection()).Medicamentos
        const projection = {
          projection: { "proveedor.nombre": 1, "proveedor.contacto": 1, _id: 0 },
        };
        const result = await endpoint.find({}, projection).toArray();
        res.json(result);   
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint3 = async (req, res) => {
    try {
        const endpoint = (await conection()).Medicamentos
        const result = await endpoint
          .find({ "proveedor.nombre": "ProveedorA" })
          .toArray();
        res.json(result);
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint4 = async (req, res) => {
    try {
        const endpoint = (await conection()).Ventas
        const fecha = new Date("2023-01-01");
        const result = await endpoint
          .find({ fechaVenta: { $gte: fecha } })
          .toArray();
        res.json(result);
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint5 = async (req, res) => {
    try {
        const medicamento = "Paracetamol";
        const endpoint = (await conection()).Ventas
        const ventas = await endpoint
          .find({ "medicamentosVendidos.nombreMedicamento": medicamento })
          .toArray();

        let totalCantidades = 0;

        ventas.forEach((venta) => {
          venta.medicamentosVendidos.forEach((medicamentoVendido) => {
            if (medicamentoVendido.nombreMedicamento === medicamento) {
              totalCantidades += medicamentoVendido.cantidadVendida;
            }
          });
        });
        res.json({
          totalCantidades,
          ventas,
        });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint6 = async (req, res) => {
    try {
        const endpoint = (await conection()).Ventas
        const fecha = new Date("2024-01-01");
        const result = await endpoint
          .find({ fechaVenta: { $lt: fecha } })
          .toArray();
        res.json(result);
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint7 = async (req, res) => {
    try {
        const endpoint = (await conection()).Compras
        const result = await endpoint.find().toArray();
        let total = [0, 0, 0];
        result.map((e) => {
          if (e.proveedor.nombre == "ProveedorA") {
            total[0] += e.medicamentosComprados[0].cantidadComprada;
          }
          if (e.proveedor.nombre == "ProveedorB") {
            total[1] += e.medicamentosComprados[0].cantidadComprada;
          } else {
            total[2] += e.medicamentosComprados[0].cantidadComprada;
          }
        });
        const ComprasProveerdores = [
          { proveedorA: total[0] },
          { proveedorB: total[1] },
          { proveedorC: total[2] },
        ];
        res.json({
          Cantidad_Vendida: ComprasProveerdores,
        });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint8 = async (req, res) => {
    try {
        const endpoint = (await conection()).Ventas
        const ventas = await endpoint.find({}).toArray();
        
        let recaudadoTotal = 0;
        
        ventas.forEach((venta) => {
          venta.medicamentosVendidos.forEach((medicamentoVendido) => {
            recaudadoTotal += medicamentoVendido.precio;
          });
        });
        res.json({
          recaudadoTotal,
          ventas,
        });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint9 = async (req, res) => {
    try {
        const endpoint = (await conection()).Medicamentos
        const result = await endpoint
          .aggregate([
            {
              $lookup: {
                from: "Ventas",
                localField: "nombre",
                foreignField: "medicamentosVendidos.nombreMedicamento",
                as: "diferencia",
              },
            },
            {
              $match: {
                diferencia: [],
              },
            },
          ]).toArray();
        res.json({
          Medicamentos_no_vendidos: result,
        });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint10 = async (req, res) => {
    try {
        const endpoint = (await conection()).Medicamentos
        const result = await endpoint
          .aggregate([{ $sort: { precio: -1 } }, { $limit: 1 }])
          .toArray();
        res.json({
          Lo_mas_caro: result,
        });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint11 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint12 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint13 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint14 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint15 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint16 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint17 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint18 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint19 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint20 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint21 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}