var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Lista de Estudiantes' });
});

router.get('/registrar', function(req, res, next) {
  res.render('registrar');
});

router.get('/buscar', function(req, res, next) {
  res.render('buscar');
});

router.get('/eliminar', function(req, res, next) {
  res.render('eliminar');
});

router.get('/actualizar', function(req, res, next) {
  res.render('actualizar');
});

module.exports = router;
