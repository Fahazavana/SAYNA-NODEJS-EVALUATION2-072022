const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const avis = document.querySelector("#avis");
const note = document.querySelector("#note");
const formation = document.querySelector("#formation");
const form = document.querySelector("form");

const checkError = () => {
  let errors = {};
  if (!fname.value) {
    errors.fname = "Prénom requis";
  }
  if (!lname.value) {
    errors.lname = "Nom requis";
  }
  if (!avis.value) {
    errors.avis = "Avis requis";
  }
  if (!note.value) {
    errors.note = "Note requis";
  }
  return errors;
};
const setError = (key, value) => {
  const id = key + "Error";
  let err = document.getElementById(id);
  err.innerText = value;
};
const onSubmitHandler = (e) => {
  e.preventDefault();
  let errors = checkError();
  for (const [key, value] of Object.entries(errors)) {
    setError(key, value);
  }
};
form.addEventListener("submit", onSubmitHandler);
