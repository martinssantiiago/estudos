function verificar() {
    const num = document.querySelector(`#numero`).value
    let res = document.querySelector(`#res`)
     
     if(num < 18 ) {
        res.innerHTML = `voce tem ${num} anos e é menor`
     } if(num >= 18) {
        res.innerHTML = `voce tem ${num} anos e é maior `
     } if(num === ``) {
        alert(`coloque sua idade`)
     }
}