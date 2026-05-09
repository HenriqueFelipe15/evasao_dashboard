const express = require("express");
const cors = require("cors");
const client = require("./config/db"); // ✅ CAMINHO CORRETO

const app = express();

app.use(cors());
app.use(express.json());

/* ===== ROTAS ===== */

// GET alunos
app.get("/alunos", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM alunos ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar alunos:", err);
    res.status(500).send("Erro ao buscar alunos");
  }
});

// POST aluno
app.post("/alunos", async (req, res) => {
  const { nome, curso, status } = req.body;

  if (!nome || !curso) {
    return res.status(400).send("Nome e curso são obrigatórios");
  }

  try {
    const result = await client.query(
      "INSERT INTO alunos (nome, curso, status) VALUES ($1, $2, $3) RETURNING *",
      [nome, curso, status]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Erro ao inserir aluno:", err);
    res.status(500).send("Erro ao inserir aluno");
  }
});

// DELETE aluno
app.delete("/alunos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await client.query("DELETE FROM alunos WHERE id = $1", [id]);
    res.send("Aluno excluído");
  } catch (err) {
    console.error("Erro ao excluir aluno:", err);
    res.status(500).send("Erro ao excluir aluno");
  }
});

/* ===== SERVER ===== */

app.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});