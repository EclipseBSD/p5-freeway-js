function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop();
}

function draw() {
  background(fundoJogo);
  mostraPersonagem();
  mostraCarro();
  movimentoCarro();
  movimentoPersonagem();
  posicaoInicialCarro();
  verificarColisao();
  mostrarPontos();
  marcarPonto();
}
