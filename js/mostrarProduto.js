import { conectaApi } from "./conectaApi.js";
import { deletaProduto } from "./deletaProduto.js";

//pegando a div que dentro vai o produto
const listaDeProdutos = document.querySelector("[data-lista]");

//função que constroi o card de um produto
export default function constroiCard(id, nome, valor, imagem) {
  const produto = document.createElement("div");
  produto.className = "card";
  produto.innerHTML = `<div class="container-img" data-card><img src="${imagem}" alt="produto" /></div>
  <p class="nome-produto">${nome}</p>
  <div class="container-valor">
    <p class="valor-produto">$ ${valor}</p>
    <button class="delete" type="reset" title="Delete">
                <i class="fa-solid fa-trash"></i>
              </button>
  </div>`;

  // Adiciona um ouvinte de evento ao botão de exclusão
  const botaoDeletar = produto.querySelector(".delete");
  botaoDeletar.addEventListener("click", async (event) => {
    event.preventDefault();
    try {
      await deletaProduto(id); // Chamando a função deletaProduto quando o botão é clicado
      produto.remove();
    } catch (erro) {
      console.error("Falha ao deletar o produto:", erro);
    }
  });

  return produto;
}

async function listaProdutos() {
  try {
    const listaApi = await conectaApi.listaProduto();
    listaApi.forEach((elemento) =>
      listaDeProdutos.appendChild(
        constroiCard(
          elemento.id,
          elemento.nome,
          elemento.valor,
          elemento.imagem
        )
      )
    );
  } catch {
    listaDeProdutos.innerHTML = `<h2 class="mensagem__titulo">Não foi possivel carregar a lista de videos</h2>`;
  }
}

listaProdutos();
