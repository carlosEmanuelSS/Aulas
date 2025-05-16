const prompt = require('prompt-sync')();
let coisas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// .join(“-”) - junta os itens em apenas uma string com o separador.
    console.log(coisas.join(' + '));

console.log('===================================================================================================')

// .slice - retorna uma array entre as posições dos índices. 
    console.log(coisas.slice(0, 8))

console.log('===================================================================================================')

// .length - para contar quantos intens tem
    console.log(coisas.length )

console.log('===================================================================================================')

// .length -1  - Para contar quntas posições tem
    console.log(coisas.length -1 )

console.log('===================================================================================================')

// .push('final') - Para adicionar coisas ao final da lista
        //let add = prompt('Digite algo para adicionar')
    coisas.push('x')
        //console.log(coisas)

console.log('===================================================================================================')

// .unshift('começo') - Para adicionar coisas no começo da lista
    coisas.unshift('começo')

console.log('===================================================================================================')

// .pop() - Para remover o último item da lista
    coisas.pop()
        //console.log(coisas)

console.log('===================================================================================================')

// .shift() - Para remover o primeiro item da lista
    coisas.shift()
        console.log(coisas)

console.log('===================================================================================================')

// .map() - Mapear item por item do Array
    const numeros = coisas.map((item) => {
         if(item % 2 == 0){
        return console.log(item)
        }
        
    })

console.log('===================================================================================================')    

// .reduce() - Reduz a Array em um unico valor
const soma = coisas.reduce((acumulador,item)=>{
    const somar = acumulador + item
    return somar
})
console.log(soma) 

 console.log('===================================================================================================')  

// .Filter() - Cria um novo Array filtrado com os valores desejados da Array original

const impares = coisas.filter((item)=>{
    if(item %2 != 0){
        return item
    }
})
console.log(impares)