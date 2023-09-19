const homesteadModel = require("../model/homestead.model");

const getHomestead = async (req, res) => {
  try {
    const homestead = await homesteadModel.find();
    res.json({ data: homestead, message: "ok", code: 200 });
  } catch (error) {
    res.json({ message: `error:${error}`, code: 500 });
  } 
};
const createHomestead = async (req, res) => {
  try {
    const homestead = new homesteadModel(req.body);
    const result = await homestead.save();
    if (result) {
      res.json({
        message: "homestead " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ message: "error during creation", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};
const updateHomestead = async (req, res) => {
  try {
    const result =  await homesteadModel.findByIdAndUpdate(req.params.id, req.body);
    if (result) {
    res.json({ message: "updated successfully", code:200 });
    }else{
        res.json({ message: "error during update", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const getOneHomestead = async (req, res) => {
  try {
    const homestead = await homesteadModel.findById(req.params.id);
    if (homestead){
        res.json({ data: homestead, message: "ok", code: 200 });
    }else{
        res.json({ data: null, message: "homestead not found", code: 404 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const deleteHomestead = async (req, res) => {
  try {
    const result =  await homesteadModel.findByIdAndDelete(req.params.id);
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
  getHomestead,
  createHomestead,
  getOneHomestead,
  updateHomestead,
  deleteHomestead,
};