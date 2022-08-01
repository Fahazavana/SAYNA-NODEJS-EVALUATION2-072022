const connexion = require("../models/mysql");

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
      const avis = connexion.query(
        "INSERT INTO Avis (firstname, lastname, avis, note, formation) VALUES (?,?,?,?,?)",
        [data.firstname, data.lastname, data.avis, data.note, data.formation],
        (error, data) => {
          if (error) {
            res.status(400).json({
              error: true,
              message: "Une erreur est survenu try",
              error,
            });
          } else {
            res.status(200).json({ error: false });
          }
        }
      );
    } catch (err) {
      res.status(400).json({
        error: true,
        message: "Une erreur est survenu",
        err,
        data,
      });
    }
  }
};

const getAllAvis = async (req, res) => {
  connexion.query(
    "SELECT id,firstname,formation,note,avis from Avis ORDER BY note DESC",
    (err, data) => {
      res.status(200).json({ data });
    }
  );
};
const getBackEndAvis = async (req, res) => {
  connexion.query(
    "SELECT id,firstname,formation,note,avis from Avis WHERE formation='Backend' ORDER BY note DESC",
    (err, data) => {
      res.status(200).json({ data });
    }
  );
};

const getUXUIAvis = async (req, res) => {
  connexion.query(
    "SELECT id,firstname,formation,note,avis from Avis WHERE formation='UX-UI' ORDER BY note DESC",
    (err, data) => {
      res.status(200).json({ data });
    }
  );
};

const getFrontEndAvis = async (req, res) => {
  connexion.query(
    "SELECT id,firstname,formation,note,avis from Avis WHERE formation='Frontend' ORDER BY note DESC",
    (err, data) => {
      res.status(200).json({ data });
    }
  );
};

const getMarketingAvis = async (req, res) => {
  connexion.query(
    "SELECT id,firstname,formation,note,avis from Avis WHERE formation='Marketing' ORDER BY note DESC",
    (err, data) => {
      res.status(200).json({ data });
    }
  );
};
module.exports = {
  addAvis,
  getAllAvis,
  getBackEndAvis,
  getFrontEndAvis,
  getMarketingAvis,
  getUXUIAvis,
};
