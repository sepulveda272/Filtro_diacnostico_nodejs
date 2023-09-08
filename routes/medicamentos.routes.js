const  { Router } = require("express");
const  { getMedicamentos,getMedicamentosMenos,getMedicamentosContacto,getMedicamentosContactoProveedorA,getMedicamentosAntes1Eneron }  = require("../controllers/medicamento.controllers.js");

const router = Router();

router.get("/", getMedicamentos)
router.get("/menos", getMedicamentosMenos)
router.get("/contacto", getMedicamentosContacto)
router.get("/contacto/proveedorA", getMedicamentosContactoProveedorA)
router.get("/vencidos", getMedicamentosAntes1Eneron)

module.exports = router;