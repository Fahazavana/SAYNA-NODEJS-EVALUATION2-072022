const { avis } = require("../models");
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
  let data = await Avis.findAll({
    attributes: ["id", "firstname", "formation", "note", "avis"],
    order: [["note", "DESC"]],
  });
  res.status(200).json({ data });
};

const getBackEndAvis = async (req, res) => {
  let data = await Avis.findAll({
    where: { formation: "Backend" },
    attributes: ["id", "note", "firstname", "avis"],
    order: [["note", "DESC"]],
  });
  res.status(200).json({ data });
};

const getFrontEndAvis = async (req, res) => {
  let data = await Avis.findAll({
    where: { formation: "Frontend" },
    attributes: ["id", "note", "firstname", "avis"],
    order: [["note", "DESC"]],
  });
  res.status(200).json({ data });
};
const getMarketingAvis = async (req, res) => {
  let data = await Avis.findAll({
    where: { formation: "Marketing" },
    attributes: ["id", "note", "firstname", "avis"],
    order: [["note", "DESC"]],
  });
  res.status(200).json({ data });
};
const getUXUIAvis = async (req, res) => {
  let data = await Avis.findAll({
    where: { formation: "UX-UI" },
    attributes: ["id", "note", "firstname", "avis"],
    order: [["note", "DESC"]],
  });
  res.status(200).json({ data });
};
module.exports = {
  addAvis,
  getAllAvis,
  getBackEndAvis,
  getFrontEndAvis,
  getMarketingAvis,
  getUXUIAvis,
};
