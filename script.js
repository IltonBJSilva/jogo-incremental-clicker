var pontuacao = 0;
var melhoramentos=[false,false,false];

function repeticaoAudio(){
  var som = document.getElementById('meuAudio');
  som.play();
}

//Animação no segundo personagem começo
function personagem2(){
setTimeout(function (){
  document.getElementById("martelo").src="img/marteloN.png"}, 100);
  document.getElementById("martelo").src="img/marteloB.png";
}
//Animação no segundo personagem Fim

//Inicio no cronometro
var segundo = 0 + "0";
var minuto = 0 + "0";
var hora = 0 + "0"; 

function tempo(){
   if (segundo < 59){
      segundo++
      if(segundo < 10){segundo = "0"+segundo}
   }else
      if(segundo == 59 && minuto < 59){
         segundo = 0+"0";
	minuto++;
	if(minuto < 10){minuto = "0"+minuto}

      }
   if(minuto == 59 && segundo == 59 && hora < 23){
      segundo = 0+"0";
      minuto = 0+"0";
      hora++;
      if(hora < 10){hora = "0"+hora}
   }else
      if(minuto == 59 && segundo == 59 && hora == 23){
         segundo = 0+"0";
	minuto = 0+"0";
	hora = 0+"0";
      }
      document.getElementById("cronometrol").innerHTML = minuto +":"+ segundo;
}
//Fim no cronometro


//Função que conta
function contador(){
  pontuacao += 1;
  document.getElementById("engragem").innerHTML = "Pontos: " + pontuacao;
  verifica(pontuacao);

}

function contador2(){
  pontuacao += 5;
}

//função que conta fim

function verifica(pontuacao){
  if(pontuacao == 20 && melhoramentos[0] == false){
      melhoramentos[0] = true;
      console.log('up1');
      setInterval(contador, 20000);
      ver_1();
  } else if(pontuacao == 50 && melhoramentos[1] == false){
      melhoramentos[1] = true;
      setInterval(contador, 1000);
      console.log("up2");
      ver_2();
  } else if(pontuacao == 70 && melhoramentos[2] == false){
      melhoramentos[2] = true;
      setInterval(contador2,10000);
      console.log("up3");
      ver_3();
    }
}

//Função que aumenta opacity ao comprar o upgrade
function ver_1(){
  document.getElementById("Mel1").style.opacity = "1.0";
}

function ver_2(){
  document.getElementById("Mel2").style.opacity = "1.0";
}

function ver_3(){
  document.getElementById("Mel3").style.opacity = "1.0";
}
//fim no aumento de opacity quando o upgrade e comprado
