const  { Router } = require("express");
const  { getVentas,getVentasDespues1Eneron,getVentasCantidadTotal }  = require("../controllers/venta.controllers.js");

const router = Router();

router.get("/", getVentas)
router.get("/despues", getVentasDespues1Eneron)
router.get("/total", getVentasCantidadTotal)

module.exports = router;