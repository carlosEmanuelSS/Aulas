const prompt = require('prompt-sync')();
let coisas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// .join(“-”) - junta os itens em apenas uma string com o separador.
    console.log(coisas.join(' + '));

// .slice - retorna uma array entre as posições dos índices. 
    console.log(coisas.slice(0, 8))

// .length - para contar quantos intens tem
    console.log(coisas.length )

// .length -1  - Para contar quntas posições tem
    console.log(coisas.length -1 )

// .push('final') - Para adicionar coisas ao final da lista
        //let add = prompt('Digite algo para adicionar')
    coisas.push('x')
        //console.log(coisas)

// .unshift('começo') - Para adicionar coisas no começo da lista
    coisas.unshift('começo')

// .pop() - Para remover o último item da lista
    coisas.pop()
        //console.log(coisas)

// .shift() - Para remover o primeiro item da lista
    coisas.shift()
        console.log(coisas)
     
    