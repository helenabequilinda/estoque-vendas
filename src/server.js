const express = require('express');
const app = express();

app.use(express.json());

const produtosRoutes = require('./routes/produtos');

app.use('/', produtosRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});