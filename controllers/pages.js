const indexView = (req, res) => {
  res.render("index");
};
const backendView = (req, res) => {
  res.render("backend");
};

const frontendView = (req, res) => {
  res.render("frontend");
};
const marketingView = (req, res) => {
  res.render("marketing");
};
const uxuiView = (req, res) => {
  res.render("uxui");
};
const contactView = (req, res) => {
  res.render("contact");
};

module.exports = {
  indexView,
  frontendView,
  backendView,
  uxuiView,
  marketingView,
  contactView,
};
