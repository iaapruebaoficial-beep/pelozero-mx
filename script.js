// Antes de publicar, sustituiremos este valor por el WhatsApp real de PeloZero MX.
const WHATSAPP_NUMBER = "";

document.querySelectorAll("[data-pack]").forEach(button => {
  button.addEventListener("click", () => {
    if (!WHATSAPP_NUMBER) {
      alert("El WhatsApp de PeloZero MX todavía no está configurado. No realices ningún pago todavía.");
      return;
    }
    const message = `Hola, quiero pedir PeloZero™. Paquete: ${button.dataset.pack}. ¿Me confirman disponibilidad, costo de envío y forma de pago?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  });
});
