import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      background: "#0d47a1",
      color: "#fff",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div>Observatório Educacional</div>

      <div>
        <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>Dashboard</Link>
        <Link to="/alunos" style={{ color: "#fff" }}>Alunos</Link>
      </div>
    </div>
  );
}

export default Navbar;