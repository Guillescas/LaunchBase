const usuarios = [
    {nome: 'Gui', techs: ['JavaScript', ' HTML']},
    {nome: 'Laura', techs: ['JavaScript', ' CSS']},
    {nome: 'Ana', techs: ['Node.js', ' CSS']}
]

function mostraUsers(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].techs}`)
    }
}

const a = mostraUsers(usuarios)

function ChecaCSS(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        if ((usuarios[i].techs.indexOf(' CSS')) == true) {
            console.log(`${usuarios[i].nome} possui conhecimentos em CSS`)
        }
    }
}

const b = ChecaCSS(usuarios)
