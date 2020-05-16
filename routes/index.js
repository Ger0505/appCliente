var express = require('express');
var router = express.Router();


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { titulo: 'Lista de Estudiantes' });
// });

router.get('/', function(req, res, next) {
  if(req.session.nombre){
    res.send('Hola' + req.session.nombre);
  }else{
    res.session.nombre = 'Luis';
    res.send('Hola usuario desconocido de ahora en adelante te llamaremos: '+res.session.nombre)
  }
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

router.get('/registrarMat', function(req, res, next) {
  res.render('registrarMat');
});

router.get('/actualizarMat', function(req, res, next) {
  res.render('actualizarMat');
});

router.get('/eliminarMat', function(req, res, next) {
  res.render('eliminarMat');
});

router.get('/buscarMat', function(req, res, next) {
  res.render('buscarMat');
});

/**
 * Destruir sesión
 */
router.get('/test',function(req, res, next) {
  if(req.session.nombre != NULL)
    req.session.nombre = null;
    req.session.isLogin = false;
  res.send('Fin de sesión');
});

router.get('/prueba',function(req, res, next) {
  if(req.session.isLogin){
    res.send("Hola" + req.session.nombre);

  }else{
    req.session.nombre = null;
    res.send("Usuario no registrado");
    //res.redirect();
  }
});
module.exports = router;
