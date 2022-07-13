'use strict';

function exibirMsg(msg){
  document.getElementById('saudacao').innerText = msg
}

function primeiraMsg(){
  exibirMsg('Olá');
}

function segundaMensagem(){
  exibirMsg('Como Vai?');
}

primeiraMsg();
segundaMensagem();

function monstrarResultado(valor){
    document.getElementById('calculo').innerText = valor;
}


function calcularResultado(num1, num2){
  setTimeout(()=> {
    let soma = num1 + num2
    monstrarResultado(soma)
  },3000)
}

calcularResultado(20,10)

/* Somar valores no javascript, importar o arquivo e exibir no HTML */
/* Função de retornar saudações */
