const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  next();
});

app.listen(3000, () => console.log('Server is listening on port 3000'));

