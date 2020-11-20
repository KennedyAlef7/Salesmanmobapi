require("dotenv-safe").config();
var app = require('./config/server');
var expressValidator = require('express-validator');

app.use(expressValidator());

app.listen(3000);
console.log("Servidor escutando na porta 3000...")