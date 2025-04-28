const prompt = require('prompt-sync')();

console.log('__HOSPITAL__')

let nome = prompt('Digite seu nome > ');

    let idade = prompt('Digite sua idade : ')
    let emergencia = prompt( 'É situação de emergência SIM ou NÃO ? digite > ')

        if(idade >= 12 && emergencia == 'nao' ){
            console.log("Atendimento não emergencial.")
            console.log(' ')
            console.log('PULSEIRAS : ')
            console.log('Vermelha - Atendimento imediato ')
            console.log('Amarela- Atendimento em até 15 minutos ')
            console.log('verde - Atendimento em até 30 minutos ')
            console.log('Azul - Atendimento com baixa prioridade ')

        }else if (idade <= 12 && emergencia == 'sim' ){
            console.log("!! ATENDIMENTO EMERGENCIAL !!")
            return;
        }

let pulseira = prompt('Digite a cor da PULSEIRA:')
    switch(pulseira){
        
        case 'vermelha':
        console.log('O atendimento é IMEDIATO ! ')
        break;
        case 'amarela':
            console.log('O atendimento é em ate 15 minutos ! ')
            break;
        case 'verde':
            console.log('O atendimento é em ate 30 minutos ! ')
            break;
        case 'azul':
            console.log('O atendimento é de baixa prioridade...')
            break;
        default:
        console.log('Cor da pulseira não identificada !')
            return;
}
    


