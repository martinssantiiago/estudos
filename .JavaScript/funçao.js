

 




function individado(receita, gastos){
    if(receita > gastos) {
        return 'RED'
    } else {
        return 'BLUE'
    }
}


const maria = individado(5000,550)
const joao = individado(1000,2000)

console.log(maria)
console.log(joao)