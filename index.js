const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my Express.js server!\n');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
