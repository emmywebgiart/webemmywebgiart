import React, { useState } from "react";

function WeddingForm() {
  const [fullName, setFullName] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { fullName, confirmation, guests, message };

    try {
    //   const response = await fetch("http://localhost:5000/rsvp", {
        const response = await fetch("https://script.google.com/macros/s/AKfycbyJOFiCqWufkCuk6vvQePJywZxNq8DBlDYnpfvOCCyr6mSe5GBGvs-kvbqvwYBrGyQA/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        });

      const result = await response.json()
      if (result.result === "success") {
        setStatus("Formulario enviado correctamente")
        setFullName("")
        setConfirmation("")
        setGuests(1)
        setMessage("")
      } else {
        setStatus("Error al enviar el formulario")
      }
    } catch (error) {
      console.error(error);
      setStatus("Error al enviar el formulario")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre completo:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Confirmación:</label>
        <label>
          <input
            type="radio"
            name="confirmation"
            value="Sí"
            checked={confirmation === "Sí"}
            onChange={(e) => setConfirmation(e.target.value)}
            required
          />
          Sí
        </label>
        <label>
          <input
            type="radio"
            name="confirmation"
            value="No"
            checked={confirmation === "No"}
            onChange={(e) => setConfirmation(e.target.value)}
          />
          No
        </label>
      </div>

      <div>
        <label>Número de invitados:</label>
        <input
          type="number"
          min="0"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Mensaje para los novios:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit">Enviar</button>
      <p>{status}</p>
    </form>
  );
}

export default WeddingForm;