function adicionaItem(nomeItem, qtdItem) {
  const novoItem = document.createElement(`li`);
  novoItem.innerHTML = `<div class="chatUsuario">
                        <h5 class="labelUsuario">Você disse:</h5>\n
                        <p class="MSGusuario">${nomeItem}</p>
                        </div>`;

  const listaCompras = document.querySelector("#mensagem");
  listaCompras.appendChild(novoItem);

}

