function calcular() {
  let nome = document.getElementById(`nome`).value;
  let altura = Number(document.getElementById(`altura`).value);
  let peso = Number(document.getElementById(`peso`).value);

  let res = document.getElementById(`res`);

  let nm = nome;

  let classificacao = ``

  let imc = peso / (altura * altura);

  if(imc < 18.5) {
    classificacao = `abaixo do peso`
  } else if (imc < 25) {
    classificacao = ` com peso normal`
  } else if (imc < 30) {
    classificacao = ` com sobre peso`
  } else {
    classificacao = ` com obesidade`
  }

  res.innerHTML = `${nm}, seu IMC é ${imc.toFixed(2)}, e voce esta${classificacao}`;
}
