const express = require('express');
const router = express.Router();
const usuariosServices = require('../services/app/usuariosServices');




router.get('/',usuariosServices.obtenerUsuarios);
router.get('/obtenerPorLogin/:usuario_login?',usuariosServices.obtenerUsuarioPorLogin);
router.post('/agregar', usuariosServices.agregarUsuarios);



module.exports = router;