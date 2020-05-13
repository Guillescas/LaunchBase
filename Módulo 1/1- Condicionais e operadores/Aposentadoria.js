const nome = 'Gui';
const sexo = 'F';
const idade = 20;
const contribuicao = 2; // Em anos
const fanosm = -((idade + contribuicao) - 95);
const fanosf = -((idade + contribuicao) - 85);

if (sexo == 'M') {
    if ((idade + contribuicao) >= 95) {
        console.log(`${nome}, você já pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda NÃO pode se aposentar... Faltam ${fanosm} anos para sua aposentadoria!`)
    }
} else {
    if ((idade + contribuicao) >= 85) {
        console.log(`${nome}, você já pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda NÃO pode se aposentar... Faltam ${fanosf} anos para sua aposentadoria!`)
    }   
}
