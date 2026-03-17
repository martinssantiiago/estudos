let nome = document.querySelector(`#nome`);
let endereço = document.querySelector(`#endereço`);
let idade = document.querySelector(`#idade`);

let resp = document.querySelector(`#res`);

let valores = [];

function adicionar() {
  resp.innerHTML = `Bem-Vindo ${nome.value} !, Vi que voce mora na ${endereço.value}, e tem ${idade.value} anos de idade`;

  let pessoas = {
    nme: nome.value,

    ende: endereço.value,

    idd: idade.value,
  };
  valores.push(pessoas);
  
}
