console.log("ciao");

// verificato ok, javascript

const elementCountadown = document.getElementById("countdown");
console.log(elementCountadown);

for (let i = 0; i < timeLimit; i - 1000) {
  let timeLimit = 1000 * 30;
  if (timeLimit[i] === 0) {
    setTimeout(function () {
      const ElementAnswerForm = document.getElementById("answers-form");
      ElementAnswerForm.remove("d-none");
      clearTimeout(timeLimit);
    }, timeLimit);
  }
  return;
}
