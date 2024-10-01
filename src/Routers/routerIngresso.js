const express = require('express');
const controllerIngressos = require('../Controllers/controllerIngressos');


const router = express.Router();


router.post('/',controllerIngressos.criarIngresso);
router.get('/',controllerIngressos.listarIngresso);
router.put('/',controllerIngressos.atualizarIngresso);
router.delete('/',controllerIngressos.deletarIngresso);

module.exports = router;