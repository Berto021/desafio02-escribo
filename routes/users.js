async function getUsers(req, res, connection) {
  try {
    const userId = req.params.id;

    const [userData] = await connection
      .promise()
      .query(
        "SELECT id, nome, email, telefones, data_criacao, data_atualizacao, ultimo_login, token FROM users WHERE id = ?",
        [userId],
        (error, results, fields) => {
          if (error) return { queryError: error.message };
        }
      );

    if (!userData.length) {
      throw new Error("Usuário não encontrado");
    }

    userData[0].telefones = JSON.parse(userData[0].telefones);

    return res.status(200).send(userData[0]);
  } catch (error) {
    if (error.message.includes("não encontrado")) {
      res.status(404).send({ message: error.message });
    }
  }
}

module.exports = { getUsers };
