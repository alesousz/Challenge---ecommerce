import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
  evento.preventDefault();

  const imagem = document.querySelector("[data-imagem]").value;
  const nome = document.querySelector("[data-nome]").value;
  const valor = document.querySelector("[data-valor]").value;
  try {
    await conectaApi.criaProduto(nome, valor, imagem);

    alert("Produto cadastrado com sucesso!");
  } catch (e) {
    alert(e);
  }
}

formulario.addEventListener("submit", criarProduto);
