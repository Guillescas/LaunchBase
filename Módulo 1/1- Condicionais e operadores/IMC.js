const nome = 'Gui';
const peso = 61;
const altura = 1.74

imc = ( peso / altura**2 );

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso!`)
} else {
    console.log(`${nome}, você NÃO está acima do peso!`)
}
