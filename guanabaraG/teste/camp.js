let input = document.querySelector(`#nome`);
let resp = document.querySelector(`.resp`);

let nomes = [];

function ver() {
  if (input.value === ``) {
    alert(` [ERRO] Coloque seu nome abaixo !`);
    return;
  }

  let nm = input.value
  
  nomes.push(nm)
 
  resp.innerHTML = nomes.join(`<br>`)

  input.focus()
  
}

input.addEventListener(`keydown`, function(event) {
  if(event.key === `Enter`) {
      ver()
  }
})