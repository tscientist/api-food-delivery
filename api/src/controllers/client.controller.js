const db = require("../config/database");

// ==> Método responsável por criar um novo 'client':

const createClient = async (req, res) => {
  const { Nome,Senha,Telefone,Email,IDEndereco } = req.body;
  const clientNew = await db.query(
    "INSERT INTO Cliente (Nome,Senha,Telefone,Email,IDEndereco) VALUES($1, $2, $3, $4, $5)",
    [Nome,Senha,Telefone,Email,IDEndereco]
  );

  res.status(201).send({
    message: "Client added successfully!",
    body: {
      client: { Nome,Senha,Telefone,Email,IDEndereco}
    },
  });
};

module.exports = {
    createClient
}