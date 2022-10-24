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

let cartasClicadas = [];

let numeroAcertos = 0;

let numeroJogadas = 0;

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
  <div class="carta" onclick="virarCarta(this)">
  <div class="front-face face">
      <img src="./imagem/${cartasJogo[indice]}.gif" class="imagemFrente" alt="">
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

function virarCarta(elemento){
    numeroJogadas++
    const cartaVirada = elemento.querySelector(".imagemFrente").getAttribute("src");
  
    if (elemento.classList.contains("virada")!== true && elemento.classList.contains("acertada")!== true){
        elemento.classList.add("virada")
        cartasClicadas.push(cartaVirada);
        
    }
    const cartasViradas = document.querySelectorAll(".virada")
    if (cartasViradas.length == 2){

        
    if (cartasClicadas[0] !== cartasClicadas[1]){
        
        setTimeout(() => {
            desvirarCartas(cartasViradas)
            
        }, 1000);
    }
    else if(cartasClicadas[0] == cartasClicadas[1]) {
        cartasViradas[0].classList.remove("virada")
        cartasViradas[1].classList.remove("virada")
        cartasViradas[0].classList.add("acertada")
        cartasViradas[1].classList.add("acertada")
        cartasClicadas = [];
        numeroAcertos++;
        ganharJogo ();
   
    }
    }
  
  console.log(cartasClicadas)
}
    function desvirarCartas(cartasViradas){
        console.log(cartasViradas)
        cartasViradas[0].classList.remove("virada")
        cartasViradas[1].classList.remove("virada") 
        cartasClicadas = [];
    }

    function ganharJogo (){
        if (numeroAcertos == numero_cartas/2){
            alert(`Você ganhou em ${numeroJogadas}  jogadas!`)
        }
    }

console.log(cartasJogo);

IniciarJogo();
