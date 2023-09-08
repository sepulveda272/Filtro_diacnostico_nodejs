const {Schema, model} = require('mongoose');
// el schema solo se hace en metodo post
const VentasSchema = Schema({
    
});

module.exports = model('Venta', VentasSchema, "Ventas");