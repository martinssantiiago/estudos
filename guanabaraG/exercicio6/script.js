let input = document.getElementById(`numb`)
let resp = document.getElementById(`res`)

let a = []

function adicionar() {
    let num = input.value
     
    a.push(num)

    resp.innerHTML = a
}