const { responde } = require('express');
const Medicamentos = require('../models/Medicamentos.js');

const getMedicamentos = async (req, res = responde)=>{
    try {
        const medicamento = await Medicamentos.find();
        res.send(medicamento);
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaa"});
    }
}

const getMedicamentosMenos = async (req, res = responde)=>{
    try {
        const query = { stock: {$lt: 50} };

        const [ total, medicamento ] = await Promise.all([
            Medicamentos.countDocuments(query),
            Medicamentos.find(query)
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

const getMedicamentosContacto = async (req, res = responde)=>{
    try {
        const query = req.query

        const [ total, medicamento ] = await Promise.all([
            Medicamentos.countDocuments(query),
            Medicamentos.find(query).select("proveedor")
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

const getMedicamentosContactoProveedorA = async (req, res = responde)=>{
    try {
        const query = {'proveedor.nombre':"ProveedorA"}

        const [ total, medicamento ] = await Promise.all([
            Medicamentos.countDocuments(query),
            Medicamentos.find(query)
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


const getMedicamentosAntes1Eneron = async (req, res = responde)=>{
    try {
        const fechaExpiracion = new Date('2024-01-01')
        const query = { fechaExpiracion: {$lt: fechaExpiracion} };

        const [ total, medicamento ] = await Promise.all([
            Medicamentos.countDocuments(query),
            Medicamentos.find(query)
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
    getMedicamentos,
    getMedicamentosMenos,
    getMedicamentosContacto,
    getMedicamentosContactoProveedorA,  
    getMedicamentosAntes1Eneron
}