const express = require("express");
const app = express();
const Port = 3000;

app.post("/users", (req, res) => {
  //logicapara criar usuario
  //...
  res.json({ message: "Usuario criado com sucesso!" });
});

app.listen(Port, () => {
  console.log("Servidor está rodando");
});
