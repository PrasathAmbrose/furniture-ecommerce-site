const scriptURL =
  "https://script.google.com/macros/s/AKfycbwuEsoHi0OxFSl5t4IcoAzWTm0y8em0HFq3O0aLK5DSC4axvOHtbpM5475bRjdAFps/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});
