const db = require("../config/database");

// ==> Método responsável por criar um novo 'Address':

exports.createAddress = async (req, res) => {
  const { cep, state, city, street, neighborhood, number, complement, IdCliente } =
    req.body;
  const addressNew = await db.query(
    "INSERT INTO Endereco (CEP,Estado,Cidade,Rua,Bairro,Numero,Complemento, IdCliente) VALUES($1, $2, $3, $4, $5, $6, $7, $8)",
    [cep, state, city, street, neighborhood, number, complement, IdCliente]
  );

  res.status(201).send({
    message: "Address added successfully!",
    body: {
      address: { cep, state, city, street, neighborhood, number, complement, IdCliente },
    },
  });
};

// ==> Método responsável por listar todos os 'Products':
exports.listAllAddress = async (req, res) => {
  const response = await db.query("SELECT * FROM endereco");
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Product' pelo 'Id':
exports.findAddressById = async (req, res) => {
  const addressId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM endereco WHERE idendereco = $1",
    [addressId]
  );
  res.status(200).send(response.rows);
};

exports.updateAddressById = async (req, res) => {
  const addressId = parseInt(req.params.id);
  const { cep, state, city, street, neighborhood, number, complement, IdCliente } =
    req.body;

  const response = await db.query(
    "UPDATE endereco SET CEP = $1, Estado = $2, Cidade = $3, Rua = $4, Bairro = $5, Numero = $6, Complemento = $7, IdCliente = $8 WHERE idEndereco = $9",
    [cep, state, city, street, neighborhood, number, complement, IdCliente, addressId]
  );

  res.status(200).send({ message: "Address Updated Successfully!" });
};

// ==> Método responsável por excluir um 'Product' pelo 'Id':
exports.deleteAddressById = async (req, res) => {
  const addressId = parseInt(req.params.id);
  await db.query("DELETE FROM endereco WHERE IDEndereco = $1", [addressId]);

  res.status(200).send({ message: "Address deleted successfully!", addressId });
};
