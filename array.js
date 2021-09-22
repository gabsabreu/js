console.log('Listas')

//criando lista
const listaDeFrutas = new Array (
    'Banana', 'Maçã', 'Abacate', 'Goiaba', 'Laranja'
);

// exibindo lista criada
console.log(listaDeFrutas);

// adicionando item na lista
listaDeFrutas.push('Caju');

console.log(listaDeFrutas);

// removendo item da lista (x,y = indice,qtd de itens)

listaDeFrutas.splice(3,2);

console.log(listaDeFrutas);

listaDeFrutas.splice(3,2);
console.log(listaDeFrutas[0]);
