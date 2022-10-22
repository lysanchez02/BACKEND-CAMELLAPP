var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const empleadores = require ('../models').empleador;
const postulantes = require ('../models').postulante; 
const ofertas = require ('../models').ofertaempleo; 

const controladorEmpleador = require ('../controllers/empladorcontroller');
const controladorPostulante = require ('../controllers/postulantecontroller');
const controladorOfertas = require ('../controllers/ofertacontroller');


/* GET users listing. */
router.get('/ListarEmpleador', controladorEmpleador.ListarEmpleador);
router.get('/empleador/:id', controladorEmpleador.ListarId);
router.post('/GuardarEmpleador', controladorEmpleador.GuardarEmpleador);
router.delete('/eliminarempleador/:id', controladorEmpleador.EliminarEmpleador);
module.exports = router;
router.get('/ListarPostulante', controladorPostulante.ListarPostulante);
router.get('/postulante/:id', controladorPostulante.ListarId2);
router.post('/GuardarPostulante', controladorPostulante.GuardarPostulante);
router.delete('/eliminarpostulante/:id', controladorPostulante.EliminarPostulante);
router.get('/ListarOfertaNombre/:nombres',controladorOfertas.ListarOfertaNombre);
router.get('/ListarOfertas',controladorOfertas.ListarOfertas);
router.post('/GuardarOferta', controladorOfertas.GuardarOferta);
router.delete('/EliminarOferta/:id', controladorOfertas.EliminarOferta);
module.exports = router;
