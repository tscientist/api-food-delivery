const db = require("../config/database");

// ==> Método responsável por criar um novo 'restaurant':

exports.createRestaurant = async (req, res) => {
  const { name, email, password, icon, phone, idaddress } = req.body;
  const restaurantNew = await db.query(
    "INSERT INTO Restaurante(Nome,Email,Senha,Icone,Telefone,IDEndereco) VALUES($1, $2, $3, $4, $5, $6)",
    [name, email, password, icon, phone, idaddress]
  );

  res.status(201).send({
    message: "Restaurant added successfully!",
    body: {
      restaurant: { name, email, password, icon, phone, idaddress },
    },
  });
};

exports.listAllRestaurants = async (req, res) => {
  const response = await db.query("SELECT * FROM restaurante");
  res.status(200).send(response.rows);
};

exports.findRestaurantById = async (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM restaurante WHERE idrestaurante = $1",
    [restaurantId]
  );
  res.status(200).send(response.rows);
};

exports.updateRestaurantById = async (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const { name, email, password, icon, phone, idaddress } = req.body;

  const response = await db.query(
    "UPDATE restaurante SET Nome = $1, Email = $2, Senha = $3, Icone = $4, Telefone = $5, IDEndereco = $6 WHERE IDRestaurante = $7",
    [name, email, password, icon, phone, idaddress]
  );

  res
    .status(200)
    .send({ message: "Restaurant Updated Successfully!", restaurantId });
};

exports.deleteRestaurantById = async (req, res) => {
  const restaurantId = parseInt(req.params.id);
  await db.query("DELETE FROM restaurante WHERE idrestaurante = $1", [
    restaurantId,
  ]);

  res
    .status(200)
    .send({ message: "Restaurant deleted successfully!", restaurantId });
};
