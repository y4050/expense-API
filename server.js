// Imports
require('dotenv').config()
const express = require('express');
const routes = require('./routes');
const cors = require('cors')

// App Set up
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// API Routes
app.get('/v1/', (req, res) => {
  res.send("Expense DB");
});

app.use('/v1/expenses', routes.expense);

// Server
const server = app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

module.exports = server;