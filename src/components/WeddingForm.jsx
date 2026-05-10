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
        // const response = await fetch("https://script.google.com/macros/s/AKfycbyJOFiCqWufkCuk6vvQePJywZxNq8DBlDYnpfvOCCyr6mSe5GBGvs-kvbqvwYBrGyQA/exec", {
        // method: "POST",
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(data),
        // });
      //   const response = await fetch("https://script.google.com/macros/s/AKfycbyJOFiCqWufkCuk6vvQePJywZxNq8DBlDYnpfvOCCyr6mSe5GBGvs-kvbqvwYBrGyQA/exec", {
      //     method: "POST",
      //     body: JSON.stringify(data),
      //   });

      // const result = await response.json()
      
      // if (result.result === "success") {
      //   setStatus("Formulario enviado correctamente")
      //   setFullName("")
      //   setConfirmation("")
      //   setGuests(1)
      //   setMessage("")
      // } else {
      //   setStatus("Error al enviar el formulario")
      // }
      await fetch("https://script.google.com/macros/s/AKfycbyJOFiCqWufkCuk6vvQePJywZxNq8DBlDYnpfvOCCyr6mSe5GBGvs-kvbqvwYBrGyQA/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      // Con no-cors NO puedes leer respuesta
      setStatus("Formulario enviado correctamente");

      setFullName("");
      setConfirmation("");
      setGuests(1);
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("Error al enviar el formulario")
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{border: "2px solid #778873", borderRadius: 16}}>
      <div style={{padding: "clamp(1rem, 3vw, 2rem)"}}>     
        <div className="d-flex flex-column" style={{gap: "clamp(1rem, 3vw, 2rem)"}}>
          <label htmlFor="name">Nombre completo:</label>
          <input
            id="name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="d-flex flex-column" style={{gap: "clamp(1rem, 3vw, 2rem)"}}>
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

        <div className="d-flex flex-column" style={{gap: "clamp(1rem, 3vw, 2rem)"}}>
          <label htmlFor="noInvitados">Número de invitados:</label>
          <input
            id="noInvitados"
            type="number"
            min="0"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </div>

        <div className="d-flex flex-column" style={{gap: "clamp(1rem, 3vw, 2rem)"}}>
          <label htmlFor="message">Mensaje para los novios:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit">Enviar</button>
        <p>{status}</p>
      </div>
    </form>
  );
}

export default WeddingForm;