const db = require("../config/database");

// ==> Método responsável por criar um novo 'client':

const createItem = async (req, res) => {
  const { name, description, images, deliveryTime, price, idrestaurant } =
    req.body;
  const itemNew = await db.query(
    "INSERT INTO Item(Nome,Descricao,Imagens,TempoDeEntrega,Preco,IDRestaurante) VALUES($1, $2, $3, $4, $5, $6)",
    [name, description, images, deliveryTime, price, idrestaurant]
  );

  res.status(201).send({
    message: "Item added successfully!",
    body: {
      item: { name, description, images, deliveryTime, price, idrestaurant },
    },
  });
};

const listAllItems = async (req, res) => {
  const response = await db.query("SELECT * FROM item");
  res.status(200).send(response.rows);
};

const findItemById = async (req, res) => {
  const itemId = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM item WHERE iditem = $1", [
    itemId,
  ]);
  res.status(200).send(response.rows);
};

const updateItemById = async (req, res) => {
  const itemId = parseInt(req.params.id);
  const { name, description, images, deliveryTime, price, idrestaurant } =
    req.body;

  const response = await db.query(
    "UPDATE item SET Nome = $1, Descricao = $2, Imagens = $3, TempoDeEntrega = $4, Preco = $5, IDRestaurante = $6 WHERE idItem = $7",
    [name, description, images, deliveryTime, price, idrestaurant, itemId]
  );

  res.status(200).send({ message: "Item Updated Successfully!" });
};

const deleteItemById = async (req, res) => {
  const itemId = parseInt(req.params.id);
  await db.query("DELETE FROM item WHERE IDItem = $1", [itemId]);

  res.status(200).send({ message: "Item deleted successfully!", itemId });
};

module.exports = {
  deleteItemById, 
  updateItemById,
  findItemById,
  listAllItems,
  createItem
}