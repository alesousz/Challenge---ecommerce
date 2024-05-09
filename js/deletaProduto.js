import { conectaApi } from "./conectaApi.js";

export async function deletaProduto(id) {
  const resposta = await fetch(`http://localhost:3000/produto/${id}`, {
    method: "DELETE",
  });

  if (!resposta.ok) {
    throw new Error(
      `Falha ao deletar o produto com id ${id}: ${resposta.status}`
    );
  }
}
