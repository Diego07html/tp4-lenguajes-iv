import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!form.nombre || !form.correo || !form.mensaje) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.correo)) {
      alert("Correo inválido.");
      return;
    }

    // Enviar con EmailJS (usando tus datos)
    emailjs
      .send(
        "service_7pilp08",      // ✅ Tu Service ID
        "template_ybypymj",     // ✅ Tu Template ID
        form,
        "ExU4wgzcIbAbJB8A4"     // ✅ Tu Public Key
      )
      .then(() => {
        setEnviado(true);
        setForm({ nombre: "", correo: "", mensaje: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Hubo un error al enviar el correo.");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contacto</h2>
      {enviado && <p style={{ color: "green" }}>✅ Correo enviado correctamente</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label><br />
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Correo:</label><br />
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Mensaje:</label><br />
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>Enviar</button>
      </form>
    </div>
  );
}
