import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:3000";

function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [status, setStatus] = useState("ativo");
  const [busca, setBusca] = useState("");

    const carregarAlunos = async () => {
    try {
      const res = await axios.get(`${API}/alunos`);
      console.log("API:", res.data);
      setAlunos(res.data);
    } catch (err) {
      console.error("Erro ao buscar alunos:", err);
    }
  };

  useEffect(() => {
    carregarAlunos();
  }, []);

  // ===== ADICIONAR =====
  const adicionarAluno = async () => {
    if (!nome || !curso) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      await axios.post(`${API}/alunos`, {
        nome,
        curso,
        status
      });

      setNome("");
      setCurso("");
      setStatus("ativo");

      carregarAlunos();
    } catch (err) {
      console.error("Erro ao adicionar aluno:", err);
    }
  };

  const excluirAluno = async (id) => {
    try {
      await axios.delete(`${API}/alunos/${id}`);
      carregarAlunos();
    } catch (err) {
      console.error("Erro ao excluir:", err);
    }
  };

  const alunosFiltrados = alunos.filter(a =>
    (a.nome || "").toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div style={{ background: "#f5f6fa", minHeight: "100vh", padding: "30px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "28px" }}>Gestão de Alunos</h1>

        {/* FORMULÁRIO */}
        <div style={card}>
          <h2>Adicionar Novo Aluno</h2>

          <div style={row}>
            <input
              placeholder="Nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
              style={input}
            />

            <input
              placeholder="Curso"
              value={curso}
              onChange={e => setCurso(e.target.value)}
              style={input}
            />

            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              style={input}
            >
              <option value="ativo">Ativo</option>
              <option value="evadido">Evadido</option>
            </select>

            <button onClick={adicionarAluno} style={btnAdd}>
              Adicionar
            </button>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <input
            placeholder="Buscar aluno..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            style={{ ...input, width: "100%" }}
          />
        </div>

        <div style={card}>
          <h2>Lista de Alunos</h2>

          {alunosFiltrados.length === 0 ? (
            <p style={{ color: "#777" }}>Nenhum aluno encontrado.</p>
          ) : (
            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>Nome</th>
                  <th style={th}>Curso</th>
                  <th style={th}>Status</th>
                  <th style={th}>Ações</th>
                </tr>
              </thead>

              <tbody>
                {alunosFiltrados.map(aluno => (
                  <tr key={aluno.id}>
                    <td style={td}>{aluno.nome}</td>
                    <td style={td}>{aluno.curso}</td>
                    <td style={td}>
                      <span
                        style={{
                          ...statusBadge,
                          background:
                            aluno.status === "ativo"
                              ? "#2e7d32"
                              : "#c62828"
                        }}
                      >
                        {aluno.status}
                      </span>
                    </td>
                    <td style={td}>
                      <button
                        onClick={() => excluirAluno(aluno.id)}
                        style={btnDelete}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

/* ===== ESTILOS ===== */

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  marginTop: "20px"
};

const row = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "10px"
};

const input = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  flex: "1"
};

const btnAdd = {
  background: "#1565c0",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  borderRadius: "8px",
  cursor: "pointer"
};

const btnDelete = {
  background: "#c62828",
  color: "#fff",
  border: "none",
  padding: "6px 10px",
  borderRadius: "6px",
  cursor: "pointer"
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "10px"
};

const th = {
  textAlign: "left",
  padding: "10px",
  borderBottom: "1px solid #ddd"
};

const td = {
  padding: "10px",
  borderBottom: "1px solid #eee"
};

const statusBadge = {
  padding: "5px 10px",
  borderRadius: "8px",
  color: "#fff"
};

export default Alunos;