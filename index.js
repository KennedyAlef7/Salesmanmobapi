require("dotenv-safe").config();
var app = require('./config/server');
var consign = require('consign');
app.get('/', (req, res, next) => {
  res.json({ message: "Tudo ok por aqui!" });
})



app.listen(3000);
console.log("Servidor escutando na porta 3000...")