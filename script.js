const WHATSAPP_NUMBER = "525536096103";

document.querySelectorAll("[data-pack]").forEach(button => {
  button.addEventListener("click", () => {
    const message = `Hola, quiero pedir PeloZero™. Paquete: ${button.dataset.pack}. ¿Me confirman disponibilidad, costo de envío y forma de pago?`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  });
});
