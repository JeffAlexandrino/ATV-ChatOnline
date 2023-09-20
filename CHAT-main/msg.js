function adicionaItem(nomeItem, qtdItem) {
  const novoItem = document.createElement(`li`);
  novoItem.innerHTML = `<div class="chatUsuario">
                        <h5 class="labelUsuario">Você diz:</h5>\n
                        <h4 class="h4Usuario">${nomeItem}</h4>
                        </div>`;

  const listaCompras = document.querySelector("#lista-de-compras");
  listaCompras.appendChild(novoItem);

}

function formAdiciona(event) {
  event.preventDefault();

  const campoItem = document.querySelector("#item");
  // se eu chegar aqui, o código está validado...
  adicionaItem(campoItem.value);

  campoItem.value = "";
}

const formAdd = document.querySelector("#formAdd");
formAdd.addEventListener("submit", formAdiciona);
