const router = require("express").Router();
const {
  indexView,
  frontendView,
  backendView,
  uxuiView,
  marketingView,
  contactView,
} = require("../controllers/pages");
/* GET home page. */
router.get("/", indexView);
router.get("/backend", backendView);
router.get("/frontend", frontendView);
router.get("/uxui", uxuiView);
router.get("/marketing", marketingView);
router.get("/contact", contactView);
module.exports = router;
