const evaluationModel = require("../model/evaluation.model");

const getEvaluation = async (req, res) => {
  try {
    const evaluation = await evaluationModel.find();
    res.json({ data: evaluation, message: "ok", code: 200 });
  } catch (error) {
    res.json({ message: `error:${error}`, code: 500 });
  } 
};
const createEvaluation = async (req, res) => {
  try {
    const evaluation = new evaluationModel(req.body);
    const result = await evaluation.save();
    if (result) {
      res.json({
        message: "evaluation " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ message: "error during creation", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};
const updateEvaluation = async (req, res) => {
  try {
    const result =  await evaluationModel.findByIdAndUpdate(req.params.id, req.body);
    if (result) {
    res.json({ message: "updated successfully", code:200 });
    }else{
        res.json({ message: "error during update", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const getOneEvaluation = async (req, res) => {
  try {
    const evaluation = await evaluationModel.findById(req.params.id);
    if (evaluation){
        res.json({ data: evaluation, message: "ok", code: 200 });
    }else{
        res.json({ data: null, message: "evaluation not found", code: 404 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const deleteEvaluation = async (req, res) => {
  try {
    const result =  await evaluationModel.findByIdAndDelete(req.params.id);
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
  getEvaluation,
  createEvaluation,
  getOneEvaluation,
  updateEvaluation,
  deleteEvaluation,
};