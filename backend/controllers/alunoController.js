const db = require("../config/db");

exports.getAlunos = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM alunos");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.createAluno = async (req, res) => {
  const { nome, curso, semestre, status } = req.body;

  try {
    await db.query(
      "INSERT INTO alunos (nome, curso, semestre, status) VALUES ($1, $2, $3, $4)",
      [nome, curso, semestre, status]
    );

    res.json({ message: "Aluno criado!" });
  } catch (err) {
    res.status(500).json(err);
  }
};