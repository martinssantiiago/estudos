function verificar() {
    let data = new Date()
    let ano = data.getUTCFullYear()
    let fano = document.querySelector(`#age`)
    let res = document.querySelector(`.fotos`)
    if(fano.value.length == 0 || fano.value > ano) {
          alert(`verifique os dados colocados`)
    } else {
        let idade = ano - Number(fano.value)     
} 
}