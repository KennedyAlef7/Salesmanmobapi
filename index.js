//index.js
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const http = require('http');
var app = require('./config/server');

const blacklist = [];

const bodyParser = require('body-parser');
const { log } = require("console");
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.json({ message: "Tudo ok por aqui!" });
})


const server = http.createServer(app);
server.listen(3000);
console.log("Servidor escutando na porta 3000...")