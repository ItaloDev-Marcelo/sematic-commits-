const express = require("express");
const app = express();
const Port = 3000;


function CriarUsuario(body) {
    return {name: 'usuario test', id: 1}
}


app.post("/users", (req, res) => {
  const usuario = CriarUsuario(req.body)

  res.json(usuario);
});

app.listen(Port, () => {
  console.log("Servidor está rodando");
});
