console.log("ciao");

// verificato ok, javascript

const numberListElm = document.getElementById("numbers-list");

const guessNumbers = [];

// Popolare l'array con 5 elementi

for (let i = 0; i < guessNumbers.length; i++) {
  numberListElm.innerHTML += `<li>${guessNumbers[i]}</li>`;
}

// const elementCountadown = document.getElementById("countdown");
// console.log(elementCountadown);
// // creo variabile per timer
// let timeLimit = 1000 * 30;
// // creato ciclo for per timer con condizione di scadenza e verifica del tempo trascorso
// for (let i = timeLimit; i < timeLimit; i - 1000) {
//   console.log(timeLimit[i]);
//   // verifica del tempo trascorso, se uguale a 0
//   if (timeLimit[i] === 0) {
//     console.log(timeLimit[i]);
//     // si attiva il setTimeout con il cambio da display none a block e comparsa sezione form
//     setTimeout(function () {
//       const ElementAnswerForm = document.getElementById("answers-form");
//       ElementAnswerForm.remove("d-none");
//       clearTimeout(timeLimit);
//     }, timeLimit);
//   }
// }
let counter = 0;
let intervalId;
intervalId = setInterval(function () {
  counter += 1;
  console.log(counter);
  if (counter === 5) {
    clearInterval(intervalId);
  }
}, 1000);
