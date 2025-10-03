import React from "react";

function Servicios() {
  return (
    <div>
      <h2>Servicios - Habitaciones de Hotel</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        
        {/* Habitación Simple */}
        <div className="card">
          <img 
            src="https://i.imgur.com/89J9bHg.png" 
            alt="Habitación Simple" 
            style={{ width: "100%", borderRadius: "8px" }} 
          />
          <h3>Habitación Simple</h3>
          <p>Ideal para una persona, equipada con cama individual y escritorio.</p>
          <p><strong>$40 USD / noche</strong></p>
        </div>

        {/* Habitación Doble */}
        <div className="card">
          <img 
            src="https://i.imgur.com/FW8u9be.png" 
            alt="Habitación Doble" 
            style={{ width: "100%", borderRadius: "8px" }} 
          />
          <h3>Habitación Doble</h3>
          <p>Perfecta para dos personas, cuenta con dos camas y TV.</p>
          <p><strong>$70 USD / noche</strong></p>
        </div>

        {/* Suite Premium */}
        <div className="card">
          <img 
            src="https://i.imgur.com/vjW4Q8Z.png" 
            alt="Suite Premium" 
            style={{ width: "100%", borderRadius: "8px" }} 
          />
          <h3>Suite Premium</h3>
          <p>Habitación de lujo con jacuzzi, minibar y balcón privado.</p>
          <p><strong>$120 USD / noche</strong></p>
        </div>

      </div>
    </div>
  );
}

export default Servicios;

