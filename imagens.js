//Variáveis das imagens

let fundoJogo;
let personagem;
let carro;
let carro2;
let carro3;

//Sons do jogo

let trilhaSonora;
let somPonto;

function preload(){
  fundoJogo = loadImage("imagens/estrada.png");
  personagem = loadImage("imagens/ator-1.png");
  carro = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  carros = [carro, carro2, carro3, carro, carro2, carro3]
  trilhaSonora = loadSound("sons/better_of_alone.mp3");
  somPonto = loadSound("sons/pingas.mp3");
}
