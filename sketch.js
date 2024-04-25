//Bolinha
let xBoll = 300;       //Variavel eixo x
let yBoll = 200;       //Variavel eixo y
let dBoll = 15;        //Variavel diametro  
let raio = dBoll / 2;        //Variavel raio da bolinha

//Velocidade
let velocidadexBoll = 3;     //Variavel velocidade eixo x
let velocidadeyBoll = 3;     //Variavel velocidade eixo y

//Raquete 
let xrect = 3;
let yrect = 150;
let larguraRect = 10;   //largura
let alturaRect = 90;   //altura

//Raquete Oponente
let xrectOponente = 587;
let yrectOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//Placar do Jogo
let meusPontos = 0;
let pontosOponente = 0;


//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("Trilha.Mp3");
    ponto = loadSound("Pontos.Mp3");
    raquetada = loadSound("Raquete.Mp3");
  
}
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaBatidaBorda();
  mostraRaquete(xrect, yrect);
  movimentaRaquete();
  //verificaColisaoRaquete1();
  verificaColisaoRaquete(xrect, yrect);
  mostraRaquete(xrectOponente, yrectOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xrectOponente, yrectOponente);
  incluiPlacar();
  marcaPonto();
  
  }

function mostraBolinha(){
  circle(xBoll, yBoll, dBoll);     //Desenha a bolinha
}

function movimentaBolinha(){
  xBoll += velocidadexBoll;    //Movimenta a Bolinha
  yBoll += velocidadeyBoll;    //Movimenta a Bolinha
}

function verificaBatidaBorda(){
  if (xBoll + raio> width || xBoll - raio< 0){
    velocidadexBoll *= -1;
    ponto.play();
    
  }
  
  if (yBoll + raio> height || yBoll - raio< 0){
    velocidadeyBoll *= -1;
  }
}

function mostraRaquete(x, y){
  rect( x, y, larguraRect, alturaRect);
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yrect -= 10;
  }
    if (keyIsDown(DOWN_ARROW)){
    yrect += 10;
    }
}

function verificaColisaoRaquete(){
  if (xBoll - raio < xrect + larguraRect && yBoll - raio < yrect + alturaRect){
    velocidadexBoll *= -1;
  }
}
 function verificaColisaoRaquete(x, y){
  colidiu =
   collideRectCircle(x, y, larguraRect, alturaRect, xBoll, yBoll, raio);
   if(colidiu){
     velocidadexBoll *= -1;
     raquetada.play();
   }
 }
function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
    yrectOponente -= 10;
  }
    if (keyIsDown(83)){
    yrectOponente += 10;
    }
  
}

 function incluiPlacar(){
  stroke(300);
  textAlign(CENTER);
  textSize(16);
  fill("orange");
  rect(130, 10, 40, 20);
  fill(300);
  text(meusPontos, 150, 26);
  fill("orange");
  rect(430, 10, 40, 20);
  fill(300);
  text(pontosOponente, 450, 26);
 }
 function marcaPonto(){
    
    if(xBoll > 592) {
      meusPontos += 1;
    } 
    if(xBoll < 8) {
      pontosOponente += 1;
    
 }
  

 }