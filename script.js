var pontuacao = 0;
var melhoramentos=[false,false,false];
var segundo = 0+"0";
var minuto = 0+"0";
var hora = 0+"0";

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
      form.cronometro.value = hora +":"+ minuto +":"+ segundo
}
function contador(){
  pontuacao +=1;

  document.getElementById("engragem").innerHTML = "Engrenagem: " + pontuacao;
}

//Funçors de melhoramentos acresentando a quantidade pedida
function acresenta_1(){

    pontuacao +=1;
    document.getElementById("engragem").innerHTML = "Engrenagem: " + pontuacao;
}
function acresenta_2(){
    pontuacao +=4;
    document.getElementById("engragem").innerHTML = "Engrenagem: " + pontuacao;
}
function acresenta_3(){
    pontuacao +=40;
    document.getElementById("engragem").innerHTML = "Engrenagem: " + pontuacao;
}
//Fim nas funçoes de acressentamento

//Função que aumenta opacity ao comprar o upgrade
function upgrade1(){
  document.getElementById("Mel1").style.opacity = "1.0";
}

function upgrade2(){
  document.getElementById("Mel2").style.opacity = "1.0";
}

function upgrade3(){
  document.getElementById("Mel3").style.opacity = "1.0";
}
//fim no aumento de opacity quando o upgrade e comprado


//A cada 20 segundo acresenta 1 as Engrenagem
//Se score for maior ou igual a 60 sera acresentado 4 as Engrenagem
// e se melhoramentos na possição 0 for igual a false entra na condição
function Melhoramento_1(){
    if(pontuacao>=20 && melhoramentos[0]===false){
        melhoramentos[0]=true;
        setInterval(acresenta_1, 20000)
        upgrade1();

}

}

//A cada 60 segundo acresenta 4 as Engrenagem
//Se score for maior ou igual a 60 sera acresentado 4 as Engrenagem
// e se melhoramentos na possição 0 for igual a false entra na condição
function Melhoramento_2(){

  if(pontuacao>=60 && melhoramentos[1]===false){
      melhoramentos[1]=true;
      setInterval(acresenta_2, 20000)
      upgrade2();
}

//A cada 60 segundo acresenta 4 as Engrenagem
//Se score for maior ou igual a 60 sera acresentado 4 as Engrenagem
// e se melhoramentos na possição 0 for igual a false entra na condição
}

function Melhoramento_3(){

  if(pontuacao>=100 && melhoramentos[2]===false){
      melhoramentos[2]=true;
      setInterval(acresenta_3, 10000)
      upgrade3();
    }
}

//Fim nos melhoramentos
