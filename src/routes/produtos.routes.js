const express = require('express');
const router = express.Router();

router.get('/produtos', (req, res) => {
  res.status(200).json({
    mensagem: 'Lista de produtos'
  });
});

router.post('/produtos', (req, res) => {
  res.status(201).json({
    mensagem: 'Produto cadastrado com sucesso'
  });
});

router.get('/produtos/:id', (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    mensagem: `Produto ${id}`
  });
});

module.exports = router;