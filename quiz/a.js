const form = dokument.querySelector("form");
form.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault();
  let p = 0;
  let answers = dokument.querySelectorAll("input[type=radio]");
  awnsers.forEach((anwser) => {
    if (answer.checked) {
      p += Number.parseInt(answer.getAttribute(data - p));
    }
  });
}

if ((p = 1)) {
  form.classlist.toggle("h1");
}
if ((p = 0)) {
  form.classlist.toggle("h2");
}
