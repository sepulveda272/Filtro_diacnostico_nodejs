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
        const endpoint = (await conection()).Medicamentos
        const result = await endpoint.find().toArray();
        let total = [0, 0, 0];
        result.map((e) => {
          if (e.proveedor.nombre == "ProveedorA") {
            total[0]++;
          }
          if (e.proveedor.nombre == "ProveedorB") {
            total[1]++;
          } else if ((e.proveedor.nombre = "proveedorC")) {
            total[2]++;
          }
        });
        const medicamentoProveedor = [
          { proveedorA: total[0] },
          { proveedorB: total[1] },
          { proveedorC: total[2] },
        ];
        res.json({
          Numero_medicamentos_proveedor: medicamentoProveedor,
        });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint12 = async (req, res) => {
    try {
        const endpoint = (await conection()).Ventas
        const result = await endpoint
        .find({ "medicamentosVendidos.nombreMedicamento": "Paracetamol" })
        .toArray();
        res.json({
        result,
        });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint13 = async (req, res) => {
    try {
        const endpoint = (await conection()).Ventas
        const comprasM2023 = await endpoint
        .find({
            fechaVenta: {
            $gte: new Date("2022-01-00T00:00:00.000+00:00"),
            $lte: new Date("2022-12-31T00:00:00.000+00:00"),
            },
        })
        .toArray();
        res.json({ proveedoresNoVentas2023: comprasM2023 });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint14 = async (req, res) => {
    try {
        const endpoint = (await conection()).Ventas
        const fechaInicio = new Date("2023-03-01");
        const fechaFin = new Date("2023-04-01");
        const ventasEnRango = await endpoint
        .find({
            $and: [
            { fechaVenta: { $gte: fechaInicio } },
            { fechaVenta: { $lt: fechaFin } },
            ],
        })
        .toArray();
        const cantidadesVendidas = ventasEnRango.map((venta) => {
            return venta.medicamentosVendidos[0].cantidadVendida;
        });
        const totalVentas = cantidadesVendidas.reduce(
            (tsotal, cantidad) => total + cantidad, 0
        );
        res.json({
            result: totalVentas,
        });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint15 = async (req, res) => {
    try {
        const endpoint = (await conection()).Ventas
        const fechaInicio = new Date("2023-01-10T00:00:00.000+00:00");
        const fechaFin = new Date("2024-01-10T00:00:00.000+00:00");
        const ventas2023 = await endpoint
            .find({
            fechaVenta: { $gte: fechaInicio, $lt: fechaFin },
            })
            .toArray();

        const medicinas = {};

        ventas2023.forEach((venta) => {
            venta.medicamentosVendidos.forEach((medicamento) => {
            const { nombreMedicamento, cantidadVendida } = medicamento;
            medicinas[nombreMedicamento] =
                (medicinas[nombreMedicamento] || 0) + cantidadVendida;
            });
        });

        const minCantidad = Math.min(...Object.values(medicinas));
        const medicinasMenosVendidas = Object.entries(medicinas).filter(
        ([_, cantidad]) => cantidad === minCantidad
        );

        res.json({
            medicina_menos_vendida_2023: medicinasMenosVendidas,
        });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint16 = async (req, res) => {
    try {
        const endpoint = (await conection()).Compras
        const proveedorAData = await endpoint
            .find({ "proveedor.nombre": "ProveedorA" })
            .toArray();
        const medicamentosProveedorA = proveedorAData.map(
            (e) => e.medicamentosComprados[0]
        );
        const ganaciaProveedorA = medicamentosProveedorA
            .map((e) => e.cantidadComprada * e.precioCompra)
            .reduce((a, b) => a + b, 0);

        const proveedorBData = await endpoint
            .find({ "proveedor.nombre": "ProveedorB" })
            .toArray();
        const medicamentosProveedorB = proveedorBData.map(
            (e) => e.medicamentosComprados[0]
        );
        const ganaciaProveedorB = medicamentosProveedorB
            .map((e) => e.cantidadComprada * e.precioCompra)
            .reduce((a, b) => a + b, 0);

        const proveedorCData = await endpoint
            .find({ "proveedor.nombre": "ProveedorC" })
            .toArray();
        const medicamentosProveedorC = proveedorCData.map(
            (e) => e.medicamentosComprados[0]
        );
        const ganaciaProveedorC = medicamentosProveedorC
            .map((e) => e.cantidadComprada * e.precioCompra)
            .reduce((a, b) => a + b, 0);

        res.json({
            ganaciaProveedorA,
            ganaciaProveedorB,
            ganaciaProveedorC,
        });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint17 = async (req, res) => {
    try {
        const endpoint = (await conection()).Ventas
        const precioMedicamentosData = await endpoint
            .aggregate([{ $project: { medicamentosVendidos: 1, _id: 0 } }])
            .toArray();
        const medicamentoPrecio = precioMedicamentosData
            .map((e) => {
                return e.medicamentosVendidos.map((e) => e.precio);
            })
            .flat(Infinity);
        const medicamentosPromedioo =
            medicamentoPrecio.reduce((a, b) => a + b, 0) / medicamentoPrecio.length;
        res.json({
            Precio_promedio: medicamentosPromedioo,
        });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint18 = async (req, res) => {
    try {
        const endpointVenta = (await conection()).Ventas
        const endpointEmpleado = (await conection()).Empleados
        const empleadosData = await endpointEmpleado.find().toArray();
        const empleados = empleadosData.map((e) => {
          return { nombre: e.nombre, ventas: 0 };
        });
        const ventas = await endpointVenta
          .find({
            $and: [
              { fechaVenta: { $gte: new Date("2023-01-10T00:00:00.000+00:00") } },
              { fechaVenta: { $lt: new Date("2024-01-10T00:00:00.000+00:00") } },
            ],
          })
          .toArray();
        ventas.forEach((e) => {
          for (let i = 0; i < empleados.length; i++) {
            if (e.empleado.nombre === empleados[i].nombre) {
              empleados[i].ventas += e.medicamentosVendidos
                .map((e) => e.cantidadVendida)
                .reduce((a, b) => a + b, 0);
            }
          }
        });
    
        res.json({
          Ventas_realizadas_2023_por_cada_empleado: empleados,
        });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint19 = async (req, res) => {
    try {
        const endpoint = (await conection()).Medicamentos
        const fecha = new Date("2024-01-01");
        const fechafin = new Date("2025-01-01");
        const result = await endpoint
          .find({
            $and: [
              { fechaExpiracion: { $gte: fecha } },
              { fechaExpiracion: { $lt: fechafin } },
            ],
          })
          .toArray();
        res.json({
          Todos_medicamentos_caducan_2024: result,
        });
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint20 = async (req, res) => {
    try {
        const endpointVenta = (await conection()).Ventas
        const endpointEmpleado = (await conection()).Empleados
        const empleadosData = await endpointEmpleado.find().toArray();
        const empleados = empleadosData.map((e) => {
          return { nombre: e.nombre, ventas: 0 };
        });
        const ventas = await endpointVenta.find().toArray();
        ventas.forEach((e) => {
          for (let i = 0; i < empleados.length; i++) {
            if (e.empleado.nombre === empleados[i].nombre) {
              empleados[i].ventas += 1;
            }
          }
        });
        const empleadosMas5 = empleados.filter((e) => e.ventas >= 5);
        res.json({
          Hecho_mas_5_ventas: empleadosMas5,
        });
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

export const endpoint22 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint23 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint24 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint25 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint26 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint27 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint28 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint29 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint30 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint31 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint32 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint33 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint34 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint35 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint36 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint37 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint38 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}