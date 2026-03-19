let input = document.getElementById(`tarefa`);
let btn = document.getElementById(`add-tasks`);

let listacompleta = document.getElementById(`list-task`)

let valores = [];

function adicionarTarefa() {
  valores.push(input.value);

  mostrar();
}

function mostrar() {
  let novali =  ``;

  valores.forEach((item) => {
    novali = novali + `
     <li class="task">
     <img src="img/checked.png" />
     <p>${item}</p>
     <img src="img/trash.png"/>
     </li>
     `;
  });

listacompleta.innerHTML = novali

}

btn.addEventListener(`click`, adicionarTarefa);
