const db = require("../config/database");

exports.createRestaurant = async (req, res) => {
  const { name, email, password, icon, phone } = req.body;
  const restaurantNew = await db.query(
    "INSERT INTO Restaurante(Nome,Email,Senha,Icone,Telefone) VALUES($1, $2, $3, $4, $5)",
    [name, email, password, icon, phone]
  );

  res.status(201).send({
    message: "Restaurant added successfully!",
    body: {
      restaurant: { name, email, password, icon, phone },
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

exports.getRestaurantWithItems = async (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT r.nome as nome, i.nome as item, i.descricao, i.preco, i.tempodeentrega FROM restaurante as r inner join item as i on i.idrestaurante = r.idrestaurante WHERE i.idrestaurante = $1",
    [restaurantId]
  );
  res.status(200).send(response.rows);
};

exports.updateRestaurantById = async (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const { name, email, password, icon, phone } = req.body;

  const response = await db.query(
    "UPDATE restaurante SET Nome = $1, Email = $2, Senha = $3, Icone = $4, Telefone = $5 WHERE IDRestaurante = $6",
    [name, email, password, icon, phone]
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
