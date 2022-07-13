'use strict';

let user = 'octocat'

async function mostrarFotoDoGithub(){
    const verGithub = await fetch(`https://api.github.com/users/${user}`)
    const usarieGithub = await verGithub.json()
    const fotoGit = usarieGithub.avatar_url

    return Promise.resolve(fotoGit)
    .then(document.getElementById('foto').src=fotoGit)
}
mostrarFotoDoGithub()

/* Exibindo a foto do perfil do Github na pagina HTML */
