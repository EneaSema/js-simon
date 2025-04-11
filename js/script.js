console.log("ciao");

// verificato ok, javascript

const elementCountadown = document.getElementById("countdown");
console.log(elementCountadown);
// creo variabile per timer
let timeLimit = 1000 * 30;
// creato ciclo for per timer con condizione di scadenza e verifica del tempo trascorso
for (let i = timeLimit; i < timeLimit; i - 1000) {
  // verifica del tempo trascorso, se uguale a 0
  if (timeLimit[i] === 0) {
    // si attiva il setTimeout con il cambio da display none a block e comparsa sezione form
    setTimeout(function () {
      const ElementAnswerForm = document.getElementById("answers-form");
      ElementAnswerForm.remove("d-none");
      clearTimeout(timeLimit);
    }, timeLimit);
  }
}
