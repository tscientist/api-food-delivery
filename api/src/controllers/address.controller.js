const db = require("../config/database");

exports.createAddress = async (req, res) => {
  let IDRestaurante, IDCliente;

  if (req.body.IDRestaurante) {
    IDCliente = null;
    IDRestaurante = req.body.IDRestaurante;
  } else {
    IDCliente = req.body.IDCliente;
    IDRestaurante = null;
  }

  const { cep, state, city, street, neighborhood, number, complement } =
    req.body;
  const addressNew = await db.query(
    "INSERT INTO Endereco (CEP,Estado,Cidade,Rua,Bairro,Numero,Complemento,IDCliente,IDRestaurante) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)",
    [
      cep,
      state,
      city,
      street,
      neighborhood,
      number,
      complement,
      IDCliente,
      IDRestaurante,
    ]
  );

  res.status(201).send({
    message: "Address added successfully!",
    body: {
      address: {
        cep,
        state,
        city,
        street,
        neighborhood,
        number,
        complement,
        IDCliente,
        IDRestaurante,
      },
    },
  });
};

exports.listAllAddress = async (req, res) => {
  const response = await db.query("SELECT * FROM endereco");
  res.status(200).send(response.rows);
};

exports.findAddressById = async (req, res) => {
  const addressId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM endereco WHERE idendereco = $1",
    [addressId]
  );
  res.status(200).send(response.rows);
};

exports.updateAddressById = async (req, res) => {
  let IDRestaurante, IDCliente;

  if (req.body.IDRestaurante) {
    IDCliente = null;
    IDRestaurante = req.body.IDRestaurante;
  } else if (req.body.IDCliente) {
    IDCliente = req.body.IDCliente;
    IDRestaurante = null;
  }

  const addressId = parseInt(req.params.id);
  const { cep, state, city, street, neighborhood, number, complement } =
    req.body;

  const response = await db.query(
    "UPDATE endereco SET CEP = $1, Estado = $2, Cidade = $3, Rua = $4, Bairro = $5, Numero = $6, Complemento = $7, IDCliente = $8, IDRestaurante = $9 WHERE idEndereco = $10",
    [
      cep,
      state,
      city,
      street,
      neighborhood,
      number,
      complement,
      IDCliente,
      IDRestaurante,
      addressId,
    ]
  );

  res.status(200).send({ message: "Address Updated Successfully!" });
};

exports.deleteAddressById = async (req, res) => {
  const addressId = parseInt(req.params.id);
  await db.query("DELETE FROM endereco WHERE IDEndereco = $1", [addressId]);

  res.status(200).send({ message: "Address deleted successfully!", addressId });
};
