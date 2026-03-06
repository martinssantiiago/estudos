function verificar() {
    const num = document.querySelector(`#numero`).value
    let res = document.querySelector(`#res`)
     
     if(num < 10 ) {
        res.innerHTML = `voce tem ${num} ano e é menor`
     } if(num > 1) {
        res.innerHTML = `voce tem ${num} anos e é menor`
     } if(num === ``) {
        alert(`coloque sua idade`)
     }
}