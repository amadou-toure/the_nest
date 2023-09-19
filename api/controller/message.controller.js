const messageModel = require("../model/message.model");

const getMessage = async (req, res) => {
  try {
    const message = await messageModel.find();
    res.json({ data: message, message: "ok", code: 200 });
  } catch (error) {
    res.json({ message: `error:${error}`, code: 500 });
  } 
};
const createMessage = async (req, res) => {
  try {
    const message = new messageModel(req.body);
    const result = await message.save();
    if (result) {
      res.json({
        message: "message " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ message: "error during creation", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};
const updateMessage = async (req, res) => {
  try {
    const result =  await messageModel.findByIdAndUpdate(req.params.id, req.body);
    if (result) {
    res.json({ message: "updated successfully", code:200 });
    }else{
        res.json({ message: "error during update", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const getOneMessage = async (req, res) => {
  try {
    const message = await messageModel.findById(req.params.id);
    if (message){
        res.json({ data: message, message: "ok", code: 200 });
    }else{
        res.json({ data: null, message: "message not found", code: 404 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const result =  await messageModel.findByIdAndDelete(req.params.id);
    if (result) {
    res.json({ message: "deleted successfully" });
    }else{
        res.json({ message: "error during update", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

module.exports = {
  getMessage,
  createMessage,
  getOneMessage,
  updateMessage,
  deleteMessage,
};