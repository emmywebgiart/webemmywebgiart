import React, { useState, useEffect } from "react";

function WeddingForm() {
  const [fullName, setFullName] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [confirmed, setConfirmed] = useState(false)
  const [confirmedName, setConfirmedName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = { fullName, confirmation, guests, message };

  //   try {
  //   //   const response = await fetch("http://localhost:5000/rsvp", {
  //       const response = await fetch("https://script.google.com/macros/s/AKfycbyJOFiCqWufkCuk6vvQePJywZxNq8DBlDYnpfvOCCyr6mSe5GBGvs-kvbqvwYBrGyQA/exec", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //       });

  //     const result = await response.json()
  //     if (result.result === "success") {
  //       setStatus("Formulario enviado correctamente")
  //       setFullName("")
  //       setConfirmation("")
  //       setGuests(1)
  //       setMessage("")
  //     } else {
  //       setStatus("Error al enviar el formulario")
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setStatus("Error al enviar el formulario")
  //   }
  // };

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
          // guests,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setConfirmedName(fullName)

        let msg
        if (confirmation.toLowerCase() === "sí") {
          msg = `¡Gracias ${fullName} por confirmar tu asistencia! Nos alegra que nos acompañes. ¡Te esperamos!`
        } else {
          msg = `¡Gracias por avisar, ${fullName}. Aunque no puedas asistir!`
        }

        setIsLoading(false)
        setConfirmed(true)
        setStatus(msg);

        setFullName("");
        setConfirmation("");
        setGuests(1);
        setMessage("");
      } else {
        setStatus("Error: " + data.message);
      }

    } catch (error) {
      console.error(error);
      setStatus("Error al enviar");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (confirmed) {
      const timer = setTimeout(() => setConfirmed(false), 3000);
      return () => clearTimeout(timer)
    }
  }, [confirmed]);

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

          <div className="d-flex flex-column">
            <p className="mb_1 fs_6">Confirmación</p>
            <div className="row">
              <div className="col-6">
                <label className="fs_6">
                  <input
                    type="radio"
                    name="confirmation"
                    value="Sí"
                    checked={confirmation === "Sí"}
                    onChange={(e) => setConfirmation(e.target.value)}
                    required
                  />
                  Sí asistiré
                </label>
              </div>
              <div className="col-6">
                <label className="fs_6">
                  <input                  
                    type="radio"
                    name="confirmation"
                    value="No"
                    checked={confirmation === "No"}
                    onChange={(e) => setConfirmation(e.target.value)}
                  />
                  No asistiré
                </label>
              </div>
            </div>            
          </div>

          {/* <div className="d-flex flex-column">
            <label htmlFor="noInvitados" className="mb_1 fs_6">Número de invitados</label>
            <input
              id="noInvitados"
              className="form_input"
              type="number"
              min="0"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
              placeholder="Ingresa el número de invitados"
            />
          </div> */}

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
          <p className="text-center font_great_vibes color_p4" style={{fontSize: "clamp(3rem, 9vw, 6rem)"}}>¡Gracias {confirmedName} por confirmar tu asistencia!</p>
          <p className="text-white text-center font_lustria" style={{fontSize: "clamp(1rem, 3vw, 2rem)"}}>Nos alegra mucho que nos acompañes en este día tan especial.</p>
        </div>    
      </div>
     ) : null} 
    </>
  );
}

export default WeddingForm;