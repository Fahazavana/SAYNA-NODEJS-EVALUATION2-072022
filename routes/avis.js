const router = require("express").Router();
const {
  addAvis,
  getAllAvis,
  getBackEndAvis,
  getFrontEndAvis,
  getMarketingAvis,
  getUXUIAvis,
} = require("../controllers/avis");

router.get("/", getAllAvis);
router.post("/", addAvis);
 router.get("/backend", getBackEndAvis);
router.get("/frontend", getFrontEndAvis);
router.get("/marketing", getMarketingAvis);
router.get("/uxui", getUXUIAvis);

module.exports = router;
