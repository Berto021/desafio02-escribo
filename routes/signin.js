async function fetchUserByEmail(connection, email) {
  const [userData] = await connection
    .promise()
    .query(
      "SELECT id, data_criacao, data_atualizacao, ultimo_login, token FROM users WHERE email = ? ",
      [email]
    );

  return userData;
}

async function signIn(req, res, connection) {
  try {
    const { email, senha } = req.body;

    const [userCredentials] = await connection
      .promise()
      .query("SELECT email, senha FROM users WHERE email = ? ", [email]);

    if (!userCredentials.length) {
      throw new Error("422");
    }

    const userExist = userCredentials[0].email === email;

    const senhaExist = userCredentials[0].senha === senha;

    if (!senhaExist) {
      throw new Error("401");
    }

    await connection
      .promise()
      .query(
        "UPDATE users SET ultimo_login = ?",
        [new Date()],
        (error, results, fields) => {
          if (error) return { queryError: error.message };
        }
      );

    const [userData] = await fetchUserByEmail(connection, email);

    if (userExist && senhaExist) {
      return res.status(200).send(userData);
    }
  } catch (error) {
    console.log({ error });
    if (error.message === "422") {
      return res.status(422).send({
        mensagem: "Usuário e/ou senha inválidos",
      });
    }
    if (error.message === "401") {
      return res.status(401).send({
        mensagem: "Usuário e/ou senha inválidos",
      });
    }
  }
}
module.exports = { signIn };
