const express = require("express");
const cors = require("cors");

const app = express();

// ==> Rotas da API:
const index = require("./routes/index");
const addressRoute = require("./routes/address.routes");
const clientRoute = require("./routes/client.routes");
const restaurantRoute = require("./routes/restaurant.routes");
const itemRoute = require("./routes/item.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use(index);
app.use("/api/", addressRoute);
app.use("/api/", clientRoute);
app.use("/api/", itemRoute);
app.use("/api/", restaurantRoute);
app.use('/api/', orderRoute);

module.exports = app;
