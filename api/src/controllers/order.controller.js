const db = require("../config/database");

// ==> Método responsável por criar um novo 'Address':

exports.createOrder = async (req, res) => {
  const { value, delivery, status, iditem, idrestaurant, idclient } = req.body;
  const orderNew = await db.query(
    "INSERT INTO Pedido (Valor, CustoEntrega, Status, IDItem, IDRestaurante, IDCliente) VALUES($1, $2, $3, $4, $5, $6)",
    [value, delivery, status, iditem, idrestaurant, idclient]
  );

  res.status(201).send({
    message: "Order added successfully!",
    body: {
      order: { value, delivery, status, iditem, idrestaurant, idclient },
    },
  });
};

exports.listAllOrders = async (req, res) => {
  const response = await db.query("SELECT * FROM pedido");
  res.status(200).send(response.rows);
};

exports.findOrderById = async (req, res) => {
  const orderId = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM pedido WHERE idpedido = $1", [
    orderId,
  ]);
  res.status(200).send(response.rows);
};

exports.updateOrderById = async (req, res) => {
  const orderId = parseInt(req.params.id);
  const { value, delivery, status, iditem, idrestaurant, idclient } = req.body;

  const response = await db.query(
    "UPDATE order SET Valor = $1, CustoEntrega = $2, Status = $3, IDItem = $4, IDRestaurante = $5, IDCliente = $6 WHERE IDPedido = $7",
    [value, delivery, status, iditem, idrestaurant, idclient, orderId]
  );

  res.status(200).send({ message: "Item Updated Successfully!" });
};

exports.deleteOrderById = async (req, res) => {
  const orderId = parseInt(req.params.id);
  await db.query("DELETE FROM pedido WHERE IDPedido = $1", [orderId]);

  res.status(200).send({ message: "Item deleted successfully!", orderId });
};
