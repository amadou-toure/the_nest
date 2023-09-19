const express = require('express');
const route = express.Router();
const announce = require('../controller/announce.controller');
const auth = require('../middleware/auth');

route.get('/announce',auth,announce.getAnnounce);
route.post('/announce',auth,announce.createAnnounce);
route.put('/announce/:id',auth,announce.updateAnnounce);
route.delete('/announce/:id',auth,announce.deleteAnnounce);
route.get('/announce/:id',auth,announce.getOneAnnounce);

module.exports=route;