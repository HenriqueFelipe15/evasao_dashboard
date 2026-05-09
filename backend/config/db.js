const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "SUA_SENHA", // coloque sua senha real
  database: "evasao_db",
  port: 5432
});

client.connect()
  .then(() => console.log(" Conectado ao PostgreSQL"))
  .catch(err => console.error(" Erro ao conectar:", err));

module.exports = client;