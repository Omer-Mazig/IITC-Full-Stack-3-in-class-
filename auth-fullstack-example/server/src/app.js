const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// REMOVE THIS MIDDLEWARE BEFORE DEPLOYMENT ❗
function waitMiddleware(req, res, next) {
  setTimeout(() => {
    next();
  }, 2000);
}

// Routes
app.use("/api/auth", waitMiddleware, require("./routes/auth.route"));
app.use("/api/products", waitMiddleware, require("./routes/product.route"));

module.exports = app;
