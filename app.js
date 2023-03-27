//REQUERIMOS EXPRESS QUE ES UNA LIBRERIA
const express = require('express');
const cors = require('cors');
//:(
// const productsRoutes = require("./routes/products.routes");
//:)
const usersRoutes = require('./routes/users.routes');
const repairsRoutes = require('./routes/repairs.routes');

const app = express();

//1. MIDDLEWARES
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    req.requestTime = new Date();
    next();
});

//2. ROUTES
//:(
// app.use("/api/v1/products", productsRoutes);
//:)
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/repairs', repairsRoutes);

//3. EXPORTS APP

module.exports = app;