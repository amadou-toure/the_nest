const express = require('express');
const route = express.Router();
const announce = require('../controller/announce.controller')

route.get('/announce',announce.getAnnounce);
route.post('/announce',announce.createAnnounce);
route.put('/announce/:id',announce.updateAnnounce);
route.delete('/announce/:id',announce.deleteAnnounce);

module.exports=route;