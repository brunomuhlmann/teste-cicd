const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Versão 2.0 - Modificado para testar CI/CD');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
