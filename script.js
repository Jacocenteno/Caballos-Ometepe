function submitReservation() {
  // ...

  // Send message to WhatsApp using API
  fetch(`https://api.whatsapp.com/send?phone=+50578104741&text=${message}`, {
    method: "POST",
  })
    .then(() => {
      // Show success message
      document.querySelector(".mensaje").innerHTML = "Hemos recibido su reserva, nos pondremos en contacto con usted para la confirmación y proporcionar mayor información.   Gracias, atte: Caballos Ometepe.";
    })
    .catch((error) => {
      // Show error message
      alert("Error al enviar la reserva. Por favor, intenta de nuevo más tarde.");
      console.error(error);
    });
}