// console.log('Condicionais')

//criando lista
const listaDeFrutas = new Array (
    'Banana', 'Maçã', 'Abacate', 'Goiaba', 'Laranja'
);

const idadeComprador = 15;
const estaAcompanhada = true;

console.log(listaDeFrutas)

if(idadeComprador >= 18){
    console.log('Voce é maior de idade')
    listaDeFrutas.splice(1,1)
    console.log('Pode comprar uma fruta')
} else{
    if (estaAcompanhada){
        console.log('Comprador acompanhado')
        listaDeFrutas.splice(3,1)
    }else{
        console.log('Voce é menor de idade, não pode comprar fruta');
    }
    
}


console.log(listaDeFrutas)