let lista = []

function adicionar() {
  let item = document.getElementById(`item`).value
  lista.push(item)
}
 
function mostrar() {
   let res =document.getElementById(`res`)
   res.innerHTML = ``

   for ( let i = 0;i < lista.length; i++) {
       res.innerHTML += lista[i] + `<br>`
   }
}
