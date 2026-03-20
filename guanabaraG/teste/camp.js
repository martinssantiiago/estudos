let input = document.querySelector(`#nome`);
let res = document.querySelector(`.resp`);

let numeros = [];

function ver() {

  let valor = Number(input.value)

  numeros.push(valor)

  let maior = numeros[0]
  let menor = numeros[0]
  
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i]
    } 
    
    if (numeros[i] < menor) {
      menor = numeros[i]
    }
  } 

  
  res.innerHTML +=`<br><br>${numeros.join(`<br>`)} 
  <br><br>Total: ${numeros.length}
  <br> Maior: ${maior} 
  <br> Menor: ${menor}`;
   

  input.focus();
}
