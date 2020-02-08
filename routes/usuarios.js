const express = require('express');
const router = express.Router();
const usuariosServices = require('../services/app/usuariosServices');




router.get('/',usuariosServices.getUsuarios);
router.post('/agregar', usuariosServices.addUsuarios);


module.exports = router;