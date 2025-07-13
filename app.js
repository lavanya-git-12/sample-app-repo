const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  const message = process.env.MESSAGE || 'Hello from the GitHub-CI/CD-ed sample app - V1!';
  const hostname = require('os').hostname();
  res.send(`${message} (served by ${hostname})\n`);
});

app.listen(port, () => {
  console.log(`Sample app listening on port ${port}`);
});
