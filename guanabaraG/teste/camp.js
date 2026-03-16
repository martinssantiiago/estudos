let nome = document.getElementById(`nome`)
let resp = document.querySelector(`.res`)

let nomes = []


function ver(){
   let input = nome.value
   
   if( nome.value === ``) {
    alert(`digite seu nome`)
    return
   }

   nomes.push(input)

   resp.innerHTML = nomes
}