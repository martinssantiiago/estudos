let input = document.getElementById(`task`)
let res = document.getElementById(`res`)

let lista = []

input.addEventListener(`keypress`, function(event) {
    if (event.key === `Enter`) {
        adicionar()
    }
})


function adicionar() {
   let tarefas = input.value
   lista.push(tarefas)
   
   res.innerHTML = ``

   for (let i = 0;i < lista.length; i++) {
       
       res.innerHTML += `<li>
       
       
       ${lista[i]} 
       <button onclick=`remove(${i})`><ion-icon name="close-circle-outline"></ion-icon></button>
       </li>` 
   }
   
   input.value = ``
}


function remove() {
    
}


