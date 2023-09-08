const {Schema, model} = require('mongoose');
// el schema solo se hace en metodo post
const MedicamentosSchema = Schema({
    
});

module.exports = model('Medicamento', MedicamentosSchema, "Medicamentos");