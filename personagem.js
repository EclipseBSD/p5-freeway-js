//Nosso personagem
let xPersonagem = 85;
let yPersonagem = 366;
let colisao = false;
let meusPontos = 0;

function mostraPersonagem() {
  image(personagem, xPersonagem, yPersonagem, 30, 30);
  print(yPersonagem);
}

function movimentoPersonagem() {
  if (keyIsDown(UP_ARROW)) {
    yPersonagem -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeMovimentar()) {
      yPersonagem += 3;
    }
  }
}

function verificarColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carros.length; i += 1) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xPersonagem,
      yPersonagem,
      15
    );
    if (colisao) {
      resetarPersonagem();
      if (pontosMaiorQueZero()) {
        meusPontos--;
      }
    }
  }
}

function resetarPersonagem() {
  yPersonagem = 366;
}

function mostrarPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(127, 255, 212));
  text(meusPontos, width / 5, 27);
}

function marcarPonto() {
  if (yPersonagem < 9) {
    meusPontos++;
    somPonto.play();
    resetarPersonagem();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeMovimentar() {
  return yPersonagem < 366;
}
