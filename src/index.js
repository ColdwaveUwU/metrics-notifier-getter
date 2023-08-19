const data = require('../data.json');
const express = require('express');
const app = express();
const port = 8081;

app.get('/metrics', (req, res) => {
    res.status(202).send(data);
});

app.listen(port);
console.log(`Service listening on port ${port}`);
console.log(`http://127.0.0.1:${port}/metrics`);