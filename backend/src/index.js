const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const products = [
  { id: 1, name: 'Produto Exemplo 1', price: 10.0 },
  { id: 2, name: 'Produto Exemplo 2', price: 20.0 }
];

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'src')));

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
