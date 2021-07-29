//Variavel de listas de carros

let xCarros = [600, 600, 600, 600, 600, 600] //Posicionamento na largura
let yCarros = [40, 96, 150, 210, 270, 318]; // Posicionamento na altura
let velocidadeCarros = [2, 2.5, 3.5, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

/*Variáveis do carro 1

let xCarro = 600;
let yCarro = 40;
let velocidadeCarro1 = 2;

Variáveis carro 2
let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro2 = 2.5;

Variáveis carro 3
let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro3 = 3.5;*/

function mostraCarro(){
  for (let i = 0; i < carros.length; i += 1) {
    image(carros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentoCarro(){
  for(let i = 0; i < carros.length; i += 1) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function posicaoInicialCarro(){
  for(let i = 0; i < carros.length; i += 1) {
    if(verificarPosicaoInicial(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function verificarPosicaoInicial(xCarro){
  return xCarro < -50;
}