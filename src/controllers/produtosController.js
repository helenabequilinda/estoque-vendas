let produtos = [];

const listarProdutos = (req, res) => {
  res.status(200).json(produtos);
};

const buscarProduto = (req, res) => {
  const id = Number(req.params.id);

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({
      mensagem: 'Produto não encontrado'
    });
  }

  res.status(200).json(produto);
};

const criarProduto = (req, res) => {
  const { nome, preco } = req.body;

  const novoProduto = {
    id: Date.now(),
    nome,
    preco
  };

  produtos.push(novoProduto);

  res.status(201).json(novoProduto);
};

const atualizarProduto = (req, res) => {
  const id = Number(req.params.id);

  const indice = produtos.findIndex(
    p => p.id === id
  );

  if (indice === -1) {
    return res.status(404).json({
      mensagem: 'Produto não encontrado'
    });
  }

  produtos[indice] = {
    ...produtos[indice],
    ...req.body
  };

  res.status(200).json(produtos[indice]);
};

const deletarProduto = (req, res) => {
  const id = Number(req.params.id);

  const indice = produtos.findIndex(
    p => p.id === id
  );

  if (indice === -1) {
    return res.status(404).json({
      mensagem: 'Produto não encontrado'
    });
  }

  produtos.splice(indice, 1);

  res.status(204).send();
};

module.exports = {
  listarProdutos,
  buscarProduto,
  criarProduto,
  atualizarProduto,
  deletarProduto
};