const db = require("../config/database");

// ==> Método responsável por criar um novo 'Address':

exports.createAddress = async (req, res) => {
  const { cep, state, city, street, neighborhood, number, complement } = req.body;
  const addressNew = await db.query(
    "INSERT INTO Endereco (CEP,Estado,Cidade,Rua,Bairro,Numero,Complemento) VALUES($1, $2, $3, $4, $5, $6, $7)",
    [cep, state, city, street, neighborhood, number, complement]
  );

  res.status(201).send({
    message: "Address added successfully!",
    body: {
      address: { cep, state, city, street, neighborhood, number, complement}
    },
  });
};