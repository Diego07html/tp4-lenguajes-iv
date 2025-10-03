import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0", marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Subida de Imágenes</Link>
      <Link to="/contacto" style={{ marginRight: "15px" }}>Contacto</Link>
      <Link to="/servicios">Servicios</Link>
    </nav>
  );
}

export default Navbar;

