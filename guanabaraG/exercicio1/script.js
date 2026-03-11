function conta() {
  let inicio = document.getElementById(`inicio`);
  let fim = document.getElementById(`fim`);
  let passos = document.getElementById(`passos`);
  let res = document.getElementById(`res`);

  if (inicio.length == 0 || fim.length == 0 || passos.length == 0) {
  } else {
    res.innerHTML = `contando...`;
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passos.value);
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    } else {
        for(let c = i; c >= f; c -= p) {
            res.innerHTML = `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
