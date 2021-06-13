const db = require("../config/database");

// ==> Método responsável por criar um novo 'Address':

exports.createOrder = async (req, res) => {
  const { value, delivery, status, iditem, idrestaurant,idclient} = req.body;
  const orderNew = await db.query(
    "INSERT INTO Pedido (Valor, CustoEntrega, Status, IDItem, IDRestaurante, IDCliente) VALUES($1, $2, $3, $4, $5, $6)",
    [value, delivery, status, iditem, idrestaurant,idclient]
  );

  res.status(201).send({
    message: "Order added successfully!",
    body: {
      order: { value, delivery, status, iditem, idrestaurant,idclient}
    },
  });
};

module.exports = {
  createOrder
}