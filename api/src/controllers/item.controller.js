const db = require("../config/database");

// ==> Método responsável por criar um novo 'client':

const createItem = async (req, res) => {
  const { Nome,Descricao,Imagens,TempoDeEntrega,Preco,IDRestaurante } = req.body;
  const itemNew = await db.query(
    "INSERT INTO Item (Nome,Descricao,Imagens,TempoDeEntrega,Preco, IDRestaurante) VALUES($1, $2, $3, $4, $5, $6)",
    [Nome,Descricao,Imagens,TempoDeEntrega,Preco, IDRestaurante]
  );

  res.status(201).send({
    message: "Item added successfully!",
    body: {
      item: { Nome,Descricao,Imagens,TempoDeEntrega,Preco, IDRestaurante}
    },
  });
};

module.exports = {
    createItem
}