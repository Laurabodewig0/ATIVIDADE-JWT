
// Inicializar o Express e o APP
const express = require('express');
const donenv = require('donenv');
const connectDB = require('./config/db');
const userRouters = require('/routers/userRouters');

donenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api', userRouters);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));