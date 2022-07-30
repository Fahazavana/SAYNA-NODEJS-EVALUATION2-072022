const db = require("../models");

const Avis = db.avis;

const addAvis = async (req, res) => {
  let data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    note: req.body.note,
    avis: req.body.avis,
    formation: req.body.formation,
  };

  if (
    !data.firstname ||
    !data.lastname ||
    !data.note ||
    !data.avis ||
    !data.formation
  ) {
    res.status(400).json({
      error: true,
      message: "Donné erroné ou manquent",
      data,
    });
  } else {
    try {
      const avis = Avis.create(data);
      res.json({
        succes: "ok",
        avis,
      });
    } catch (err) {
      res.status(400).json({
        error: true,
        message: "Une erreur est survenu",
        err,
      });
    }
  }
};
const getAllAvis = async (req, res) => {
  let allavis = await Avis.findAll();
  res.status(200).json({ allavis });
};
module.exports = { addAvis, getAllAvis };
