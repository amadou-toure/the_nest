const express = require('express');
const route = express.Router();
const evaluation = require('../controller/evaluation.controller');
const auth = require('../middleware/auth');

route.get('/evaluation',auth,evaluation.getEvaluation);
route.post('/evaluation',auth,evaluation.createEvaluation);
route.put('/evaluation/:id',auth,evaluation.updateEvaluation);
route.delete('/evaluation/:id',auth,evaluation.deleteEvaluation);
route.get('/evaluation/:id',auth,evaluation.getOneEvaluation);

module.exports=route;