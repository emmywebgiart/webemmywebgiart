import React, { useState, useEffect } from "react";

function WeddingForm() {
  const [fullName, setFullName] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [confirmed, setConfirmed] = useState(false)
  const [confirmedName, setConfirmedName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          confirmation,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setConfirmedName(fullName)

        setIsLoading(false)
        setConfirmed(true)

        setFullName("");
        setConfirmation("");
        setMessage("");
      }

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (confirmed) {
      const timer = setTimeout(() => setConfirmed(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [confirmed])

  return (
    <>
    <div className="section_general_title_container">
      <h3 className="section_title_green text-center font_great_vibes">Confirma tu asistencia</h3>
    </div>
    <form onSubmit={handleSubmit} className="card_border border_p3">
      <div className="card_body">     
        <div className="d-flex flex-column gap_3">    
          <div className="d-flex flex-column">
            <label htmlFor="name" className="mb_1 fs_6">Nombre completo</label>
            <input
              id="name"
              className="form_input"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              autoComplete="off"
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          <div className="confirmation_container d-flex flex-column">
            <p className="mb_1 fs_6">Confirmación</p>
            <div className="row">
              <div className="col-6">
                <label className={`confirm_card d-flex justify-content-center align-items-center flex-column gap_2 ${confirmation === "Sí" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="confirmation"
                    value="Sí"
                    checked={confirmation === "Sí"}
                    onChange={(e) => setConfirmation(e.target.value)}
                    required
                  />
                  <span className="radio_circle position-relative"></span>
                  <p className="text-center fw-bold mb-0">Sí asistiré</p>
                </label>
              </div>

              <div className="col-6">
                <label className={`confirm_card d-flex justify-content-center align-items-center flex-column gap_2 ${confirmation === "No" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="confirmation"
                    value="No"
                    checked={confirmation === "No"}
                    onChange={(e) => setConfirmation(e.target.value)}
                  />
                  <span className="radio_circle position-relative"></span>
                  <p className="text-center fw-bold mb-0">No asistiré</p>
                </label>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column">
            <label htmlFor="message" className="mb_1 fs_6">Mensaje para los novios</label>
            <textarea
              id="message"
              className="form_input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ingresa un mensaje para los novios"
            />
          </div>

          <button
            type="submit"
            className={`button_general ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </div>
    </form>
    {confirmed ? (
      <div className="full_screen bg_p3 d-flex align-items-center justify-content-center">
        <div className="card_body">
          <p className="text-center font_great_vibes color_p4" style={{fontSize: "clamp(3rem, 9vw, 6rem)"}}>¡Gracias <strong>{confirmedName}</strong> por confirmar tu asistencia!</p>
          <p className="text-white text-center font_lustria" style={{fontSize: "clamp(1rem, 3vw, 2rem)"}}>Nos alegra mucho que nos acompañes en este día tan especial.</p>
        </div>    
      </div>
    ) : null}
    </>
  );
}

export default WeddingForm;