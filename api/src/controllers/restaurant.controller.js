const db = require("../config/database");

// ==> Método responsável por criar um novo 'restaurant':

const createRestaurant = async (req, res) => {
  const { Nome, Email, Senha, Icone, Telefone, IDEndereco } = req.body;
  const restaurantNew = await db.query(
    "INSERT INTO Restaurante(Nome,Email,Senha,Icone,Telefone,IDEndereco) VALUES($1, $2, $3, $4, $5, $6)",
    [Nome, Email, Senha, Icone, Telefone, IDEndereco]
  );

  res.status(201).send({
    message: "Restaurant added successfully!",
    body: {
      restaurant: { Nome, Email, Senha, Icone, Telefone, IDEndereco },
    },
  });
};

module.exports = {
  createRestaurant,
};
