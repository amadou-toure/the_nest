const express = require('express');
const route = express.Router();
const homestead = require('../controller/homestead.controller');
const auth = require('../middleware/auth');

route.get('/homestead',auth,homestead.getHomestead);
route.post('/homestead',auth,homestead.createHomestead);
route.put('/homestead/:id',auth,homestead.updateHomestead);
route.delete('/homestead/:id',auth,homestead.deleteHomestead);
route.get('/homestead/:id',auth,homestead.getOneHomestead);

module.exports=route;