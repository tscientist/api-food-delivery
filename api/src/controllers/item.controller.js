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
    createItem
}