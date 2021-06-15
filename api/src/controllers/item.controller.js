const db = require("../config/database");

// ==> Método responsável por criar um novo 'client':

const createItem = async (req, res) => {
  const { Name,Description,Images,DeliveryTime,Price,IDRestaurant } = req.body;
  const itemNew = await db.query(
    "INSERT INTO Item (Nome,Descricao,Imagens,TempoDeEntrega,Preco, IDRestaurante) VALUES($1, $2, $3, $4, $5, $6)",
    [Name,Description,Images,DeliveryTime,Price,IDRestaurant]
  );

  res.status(201).send({
    message: "Item added successfully!",
    body: {
      item: {Name,Description,Images,DeliveryTime,Price,IDRestaurant}
    },
  });
};
module.exports = {
  createItem,
};

// ==> Método responsável por listar todos os 'Products':
exports.listAllItems = async (req, res) => {
  const response = await db.query("SELECT * FROM item");
  res.status(200).send(response.rows);
};

// => Método responsável por atualizar o item pelo id:
exports.updateItemById = async (req, res) => {
  const itemId = parseInt(req.params.id);
  const { Name,Description,Images,DeliveryTime,Price,IDRestaurant} =
    req.body;

  const response = await db.query(
    "UPDATE item SET Nome = $1, Descricao = $2, Imagem = $3, TempoDeEntrega = $4, Preco = $5, IDRestaurante = $6 WHERE idEndereco = $7",
    [ame,Description,Images,DeliveryTime,Price,IDRestaurant, itemID]
  );

  res.status(200).send({ message: "Item Updated Successfully!" });
};

// ==> Método responsável por selecionar 'Product' pelo 'Id':
exports.findItemById = async (req, res) => {
  const itemId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM item WHERE iditem = $1",
    [itemId]
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por excluir um 'Product' pelo 'Id':
exports.deleteAddressById = async (req, res) => {
  const itemId = parseInt(req.params.id);
  await db.query("DELETE FROM item WHERE IDItem = $1", [itemId]);

  res.status(200).send({ message: "Item deleted successfully!", itemId });
};
