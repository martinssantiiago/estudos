let num = document.getElementById(`numb`)
let lista = document.getElementById(`flista`)
let resp =  document.getElementById(`res`)
let valores = []


num.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    adicionar()
  }
})


function isNumero(n) {
  if(Number(n) >= 1 && Number (n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if(isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement(`option`)
    item.text = `Valor ${num.value} adiconado`
    lista.appendChild(item)
    resp.innerHTML =``
  } else {
    alert (`[ERRO] O Numero Que Voce Digitou Esta Invalido ou Foi Encontrado Na Lista.`)
  }
  num.value = ``
  num.focus()
}


function finalizar() {
    if(valores.length == 0) {
        alert(`adicione valores antes de finalizar`)  
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores [pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot
        resp.innerHTML = `` 
        resp.innerHTML += `<p>ao todo, temos ${tot} numeros cadastrados</p>`
        resp.innerHTML += `<p>O maior valor infomado foi ${maior}</p>`
        resp.innerHTML += `<p>O menor valor infomado foi ${menor}</p>`
        resp.innerHTML += `<p>A soma dos valores e ${soma}</p>`
        resp.innerHTML += `<p>A media dos valores e ${media}</p>`
    }   
    
}