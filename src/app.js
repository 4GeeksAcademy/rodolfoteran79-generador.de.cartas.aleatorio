/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

const palos = ["♠", "♣", "♥", "♦"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function generarCartaAleatoria() {
  const paloIndex = Math.floor(Math.random() * 4);
  const valorIndex = Math.floor(Math.random() * 13);
  return {
    palo: palos[paloIndex],
    valor: valores[valorIndex],
    clase: ["spade", "club", "heart", "diamond"][paloIndex]
  };
}

function mostrarCarta() {
  const { palo, valor, clase } = generarCartaAleatoria();

  document.querySelector("#app").innerHTML = `
    <div class="card ${clase}">
      <div class="card-corner top-left">
        <div>${valor}</div>
        <div>${palo}</div>
      </div>
      <div class="card-center">${palo}</div>
      <div class="card-corner bottom-right">
        <div>${valor}</div>
        <div>${palo}</div>
      </div>
    </div>
  `;
}

window.onload = mostrarCarta;
