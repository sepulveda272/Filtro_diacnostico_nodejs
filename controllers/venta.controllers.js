const { responde } = require('express');
const Ventas = require('../models/Ventas.js');

const getVentas = async (req, res = responde)=>{
    try {
        const venta = await Ventas.find();
        res.send(venta);
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaa"});
    }
}

const getVentasDespues1Eneron = async (req, res = responde)=>{
    try {
        const fechaVenta = new Date('2023-01-02')
        const query = { fechaVenta: {$gte: fechaVenta} };

        const [ total, ventaaaa ] = await Promise.all([
            Ventas.countDocuments(query),
            Ventas.find(query)
    ]);

    res.json({
        total,
        ventaaaa
    });
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaa"});
    }
}

const getVentasCantidadTotal = async (req, res = responde)=>{
    try {
        const query = { "medicamentosVendidos.nombreMedicamento":"Paracetamol"};

        const [ total, medicamento ] = await Promise.all([
            Ventas.countDocuments(query),
            Ventas.find(query)
    ]);

    res.json({
        total,
        medicamento
    });
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaa"});
    }
}



module.exports={
    getVentas,
    getVentasDespues1Eneron,
    getVentasCantidadTotal
}