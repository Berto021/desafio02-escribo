function checkValidParams(nome, email, senha, telefones) {
  if (!nome || !email || !senha || !telefones) {
    throw new Error("Dados incorretos");
  }
}

async function signUp(req, res, connection) {
  try {
    const { nome, email, senha, telefones } = req.body;
    checkValidParams(nome, email, senha, telefones);

    const user = [
      nome,
      email,
      senha,
      JSON.stringify(telefones),
      new Date(),
      new Date(),
      new Date(),
      "",
    ];

    const query =
      "INSERT INTO users(nome,email,senha,telefones,data_criacao,data_atualizacao,ultimo_login,token) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";

    const result = await connection
      .promise()
      .query(query, user, (error, results, fields) => {
        if (error) {
          throw new Error(error.message);
        }
      });

    const userId = result[0].insertId;
    const [userData] = await connection
      .promise()
      .query(
        "SELECT id, data_criacao, data_atualizacao, ultimo_login, token FROM users WHERE id = ?",
        [userId]
      );

    return res.status(201).send(userData[0]);
  } catch (error) {
    if (error.message.includes("Duplicate entry")) {
      return res.status(422).send({
        mensagem: "E-mail já existente",
      });
    }

    if (error.message === "Dados incorretos") {
      return res.status(400).send({
        mensagem: "Faltam parâmetros para concluir o cadastro.",
      });
    }

    return res.status(500).send({
      mensagem: "Ocorreu um erro inesperado no servidor.",
    });
  }
}

module.exports = { signUp };
