const express = require("express");
const router = express.Router();
const controller = require("../controllers/alunoController");

router.get("/", controller.getAlunos);
router.post("/", controller.createAluno);

module.exports = router;
