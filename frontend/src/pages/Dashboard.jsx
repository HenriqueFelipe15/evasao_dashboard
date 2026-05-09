import { useEffect, useState } from "react";
import axios from "axios";
import { FaUser, FaUserCheck, FaUserTimes, FaPercentage } from "react-icons/fa";
import CardMetric from "../components/CardMetric";

function Dashboard() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/alunos")
      .then(res => {
        console.log("DADOS:", res.data); // 👈 debug
        setDados(res.data);
      })
      .catch(err => console.error("Erro:", err));
  }, []);

  const normalizar = (s) => s?.toLowerCase();

  const total = dados.length;
  const ativos = dados.filter(a => normalizar(a.status) === "ativo").length;
  const evadidos = dados.filter(a => normalizar(a.status) === "evadido").length;
  const taxa = total ? ((evadidos / total) * 100).toFixed(2) : 0;

  return (
    <div style={{
      background: "#f5f6fa",
      minHeight: "100vh",
      padding: "30px"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h1 style={{ fontSize: "28px" }}>
          Análise e Ação Preventiva de Evasão
        </h1>

        <p style={{ color: "#555" }}>
          Monitore o desempenho e a permanência dos estudantes em tempo real
        </p>

        {/* CARDS */}
        <div style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap"
        }}>
          <CardMetric title="Total de Alunos" value={total} color="#1565c0" icon={<FaUser />} />
          <CardMetric title="Alunos Ativos" value={ativos} color="#2e7d32" icon={<FaUserCheck />} />
          <CardMetric title="Evadidos" value={evadidos} color="#c62828" icon={<FaUserTimes />} />
          <CardMetric title="Taxa de Evasão" value={`${taxa}%`} color="#6a1b9a" icon={<FaPercentage />} />
        </div>

        {/* TABELA */}
        <div style={{
          marginTop: "30px",
          background: "#fff",
          padding: "25px",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
        }}>
          <h2>Lista de Alunos</h2>

          {dados.length === 0 ? (
            <p style={{ color: "#777" }}>
              Sem registros no momento.
            </p>
          ) : (
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px"
            }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  <th style={th}>Nome</th>
                  <th style={th}>Curso</th>
                  <th style={th}>Semestre</th>
                  <th style={th}>Status</th>
                </tr>
              </thead>

              <tbody>
                {dados.map(aluno => (
                  <tr key={aluno.id} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={td}>{aluno.nome}</td>
                    <td style={td}>{aluno.curso}</td>
                    <td style={td}>{aluno.semestre}</td>
                    <td style={td}>
                      <span style={{
                        padding: "5px 10px",
                        borderRadius: "8px",
                        color: "#fff",
                        background:
                          normalizar(aluno.status) === "ativo"
                            ? "#2e7d32"
                            : "#c62828"
                      }}>
                        {aluno.status}
                      </span>
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

/* estilos */
const th = { textAlign: "left", padding: "10px" };
const td = { padding: "10px" };

export default Dashboard;