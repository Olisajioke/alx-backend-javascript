/* Script that starts a server that listens on port 1245 and prints Hello Holberton School! when it receives a GET request. */

const express = require('express');

const PORT = 1245;
const app = express();


app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;