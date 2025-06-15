function setup() {
  createCanvas(400, 400);
}

let xJogador = [0,0,0,0,0]
let yJogador = [50,130,200,280,370]
let jogador = ["🦋", "🐞", "🐝","🦗","🐜"];
let teclas = ["z", "a", "m", "n", "v"];
let quantidade = jogador.length;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#78C44F");
  } else {
    background("#AD2104");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < 5; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }

}

function desenhaLinhaDeChegada() {
 fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
 }
  
}
function verificaVencedor() {
  for (let i = 0; i < 5; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + " venceu!", 50, 200);
      noLoop();
    }
  }
}
  if (xJogador [3] > 350) {
    text("Jogador 4 venceu!", 0, 200);
    noLoop();
  
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(20);
    }
  }
}
