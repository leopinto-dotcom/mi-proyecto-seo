export default function LargeComponent() {
  return (
    <div className="card" style={{ borderLeft: "4px solid #2563eb" }}>
      <span className="badge">Lazy Loading Activo</span>
      <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
        Componente Cargado con Lazy Loading
      </h2>
      <p style={{ color: "#475569" }}>
        Este componente se descargó de forma diferida en el navegador gracias a{" "}
        <code style={{ background: "#f1f5f9", padding: "2px 6px", borderRadius: "4px" }}>
          next/dynamic
        </code>
        , mejorando el tiempo de carga inicial de la página.
      </p>
    </div>
  );
}