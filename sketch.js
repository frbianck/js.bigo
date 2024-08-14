let palavra;

function setup() {
  createCanvas(1990, 1000);

  palavra = palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["love", "mat and bia", "bigo"];
  return random(palavras);
}

function inicializaCores() {

  background("purple");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {

  inicializaCores();

  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
}
