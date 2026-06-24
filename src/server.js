const express = require('express');
const app = express();

app.use(express.json());

const produtosRoutes = require('./routes/produtos.routes');

app.use('/api', produtosRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
