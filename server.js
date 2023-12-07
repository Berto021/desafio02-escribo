const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const { signUp } = require("./routes/signup");
const { getUsers } = require("./routes/users");
const { signIn } = require("./routes/signin");

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Flamengo22#",
  database: "desafio",
});

connection.connect(function (erro) {
  if (erro) throw erro;
});

app.post("/signup", (req, res) => signUp(req, res, connection));

app.post("/signin", (req, res) => signIn(req, res, connection));

app.get("/users/:id", (req, res) => getUsers(req, res, connection));

app.use(function (req, res) {
  return res.status(404).send({
    mensagem: {
      status: 404,
      erro: "Rota não encontrada",
    },
  });
});

app.listen(8080);
