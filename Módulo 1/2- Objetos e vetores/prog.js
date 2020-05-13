const prog = {
    nome: 'Gui',
    idade: 20,
    tecnologias: [
        //{nome: 'C++', especialidade: 'Desktop'},
        //{nome: 'Python', especialidade: 'DataScience'},
        {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
}

console.log(`O usuário ${prog.nome} tem ${prog.idade} anos, e a sua tecnologia principal é a ${prog.tecnologias[0].especialidade}`)

// console.log(prog.tecnologias[0].especialidade)