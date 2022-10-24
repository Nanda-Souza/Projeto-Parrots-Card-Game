let numero_cartas;

let indice = 0;

let nomeImagem = [
  "bobrossparrot",
  "explodyparrot",
  "fiestaparrot",
  "metalparrot",
  "revertitparrot",
  "tripletsparrot",
  "unicornparrot",
];

let cartasJogo = [];

const baralhoJogo = document.querySelector(".cartas");
baralhoJogo.innerHTML = "";

function IniciarJogo() {
  numero_cartas = prompt(
    "Com quantas cartas quer jogar(escolha um numero par de 4 a 14)?"
  );
  while (
    numero_cartas % 2 != 0 ||
    numero_cartas < 4 ||
    numero_cartas > 14 ||
    isNaN(numero_cartas) === true
  ) {
    numero_cartas = prompt(
      "Por favor escolha apenas um numero par de 4 a 14)?"
    );
  }

  while (cartasJogo.length < numero_cartas) {
    cartasJogo.push(nomeImagem[indice], nomeImagem[indice]);
    indice++;
  }
  cartasJogo.sort(comparador)
 
  indice = 0;
  while (indice < cartasJogo.length){
  baralhoJogo.innerHTML += ` 
  <div class="carta">
  <div class="front-face face">
      <img src="./imagem/${cartasJogo[indice]}.gif" alt="">
    </div>
    <div class="back-face face">
     <img src="./imagem/back.png" alt="">
    </div>
</div>
`
  indice++;
  }

}

function comparador() { 
	return Math.random() - 0.5; 
}
// cartasJogo.sort()

console.log(cartasJogo);

IniciarJogo();
