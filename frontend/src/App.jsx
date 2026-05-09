import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Alunos from "./pages/Alunos";

function App() {
  return (
    <BrowserRouter>
      {/* MENU DE NAVEGAÇÃO */}
      <nav style={navStyle}>
        <Link to="/" style={link}>Dashboard</Link>
        <Link to="/alunos" style={link}>Alunos</Link>
        <Link to="/upload" style={link}>Upload</Link>
        <Link to="/relatorios" style={link}>Relatórios</Link>
        <Link to="/login" style={link}>Login</Link>
      </nav>

      {/* ROTAS */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/upload" element={<h1>Upload</h1>} />
        <Route path="/relatorios" element={<h1>Relatórios</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

/* ===== ESTILO SIMPLES ===== */

const navStyle = {
  padding: "15px",
  background: "#1565c0",
  display: "flex",
  gap: "15px"
};

const link = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold"
};

export default App;