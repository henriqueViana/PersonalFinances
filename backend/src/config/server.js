const PORT = 3000;
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.listen(PORT, () => console.log(`server is running in port ${PORT}`));