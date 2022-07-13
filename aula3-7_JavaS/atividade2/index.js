'use strict';

let dadosFetch =[]

const receberDado = fetch('https://jsonplaceholder.typicode.com/posts/6')

//GET
receberDado.then(res => res.json())
.then(data => {
    dadosFetch = data;
    mostrarJSON(dadosFetch.body)
})

function mostrarJSON(dado){
    document.getElementById('fetch').innerText = dado
}

/* Exibindo o texto de uma API no seu HTML */
