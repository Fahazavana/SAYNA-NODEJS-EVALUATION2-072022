const router = require("express").Router();
const { addAvis, getAllAvis } = require("../controllers/avis");
router.get("/", getAllAvis);
router.post("/", addAvis);

module.exports = router;
