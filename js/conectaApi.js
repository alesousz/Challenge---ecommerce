async function listaProduto() {
  try {
    const conexao = await fetch("http://localhost:3000/produto");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
  } catch (erro) {
    console.error("Erro ao listar produtos:", erro);
  }

  if (conexaoConvertida == " ") {
  }
}

async function criaProduto(nome, valor, imagem) {
  const conexao = await fetch("http://localhost:3000/produto", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      valor: valor,
      imagem: imagem,
    }),
  });

  if (!conexao.ok) {
    throw new Error("Não foi possivel enviar o produto");
  }

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

export const conectaApi = {
  listaProduto,
  criaProduto,
};
