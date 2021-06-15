const db = require("../config/database");

// ==> Método responsável por criar um novo 'client':

exports.createClient = async (req, res) => {
  const { name, password, phone, email, idaddress } = req.body;
  const clientNew = await db.query(
    "INSERT INTO Cliente (Nome,Senha,Telefone,Email,IDEndereco) VALUES($1, $2, $3, $4, $5)",
    [name, password, phone, email, idaddress]
  );

  res.status(201).send({
    message: "Client added successfully!",
    body: {
      client: { name, password, phone, email, idaddress },
    },
  });
};

exports.listAllClients = async (req, res) => {
  const response = await db.query("SELECT * FROM cliente");
  res.status(200).send(response.rows);
};

exports.findClientById = async (req, res) => {
  const clientId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM cliente WHERE idcliente = $1",
    [clientId]
  );
  res.status(200).send(response.rows);
};

exports.updateClientById = async (req, res) => {
  const clientId = parseInt(req.params.id);
  const { name, password, phone, email, idaddress } = req.body;

  const response = await db.query(
    "UPDATE cliente SET Nome = $1, Senha = $2, Telefone = $3, Email = $4, IDEndereco = $5 WHERE IDCliente = $6",
    [name, password, phone, email, idaddress, clientId]
  );

  res.status(200).send({ message: "Client Updated Successfully!", clientId });
};

exports.deleteClientById = async (req, res) => {
  const clientId = parseInt(req.params.id);
  await db.query("DELETE FROM cliente WHERE idcliente = $1", [clientId]);

  res.status(200).send({ message: "Client deleted successfully!", clientId });
};
