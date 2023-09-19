const express = require('express');
const route = express.Router();
const message = require('../controller/message.controller');
const auth = require('../middleware/auth');

route.get('/message',auth,message.getMessage);
route.post('/message',auth,message.createMessage);
route.put('/message/:id',auth,message.updateMessage);
route.get('/message/:id',auth,message.getOneMessage);
route.delete('/message/:id',auth,message.deleteMessage);

module.exports=route;