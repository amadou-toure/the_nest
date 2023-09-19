const announceModel = require("../model/announce.model");

const getAnnounce = async (req, res) => {
  try {
    const announce = await announceModel.find();
    res.json({ data: announce, message: "ok", code: 200 });
  } catch (error) {
    res.json({ message: `error:${error}`, code: 500 });
  } 
};
const createAnnounce = async (req, res) => {
  try {
    const announce = new announceModel(req.body);
    const result = await announce.save();
    if (result) {
      res.json({
        message: "announce " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ message: "error during creation", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};
const updateAnnounce = async (req, res) => {
  try {
    const result =  await announceModel.findByIdAndUpdate(req.params.id, req.body);
    if (result) {
    res.json({ message: "updated successfully", code:200 });
    }else{
        res.json({ message: "error during update", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const getOneAnnounce = async (req, res) => {
  try {
    const announce = await announceModel.findById(req.params.id);
    if (announce){
        res.json({ data: announce, message: "ok", code: 200 });
    }else{
        res.json({ data: null, message: "announce not found", code: 404 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const deleteAnnounce = async (req, res) => {
  try {
    const result =  await announceModel.findByIdAndDelete(req.params.id);
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
  getAnnounce,
  createAnnounce,
  getOneAnnounce,
  updateAnnounce,
  deleteAnnounce,
};