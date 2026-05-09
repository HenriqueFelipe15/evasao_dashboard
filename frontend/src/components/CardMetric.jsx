function CardMetric({ title, value, color, icon }) {
  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      width: "260px" // 👈 FIXA largura (resolve quebra)
    }}>
      <div style={{
        background: color,
        color: "#fff",
        padding: "12px",
        borderRadius: "10px",
        fontSize: "20px"
      }}>
        {icon}
      </div>

      <div>
        <p style={{ margin: 0, color: "#666" }}>
          {title}
        </p>
        <h2 style={{ margin: 0 }}>
          {value}
        </h2>
      </div>
    </div>
  );
}

export default CardMetric;