/*
  CONFIGURAÇÃO DOS CONTATOS
  Troque os valores abaixo pelos números completos, com código do país.
  Brasil: 55 + DDD + número. Use apenas números, sem espaços ou símbolos.
  Exemplo fictício: 5596999999999
*/
const WHATSAPP_JEFFERSON = "111";
const WHATSAPP_LIDER = "COLOQUE_AQUI_O_NUMERO_DA_LIDER";

function configureWhatsAppLink(elementId, phone, message) {
  const link = document.getElementById(elementId);
  const valid = /^\d{12,13}$/.test(phone);

  if (!valid) {
    link.href = "#";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Este contato ainda está sendo configurado. Volte em breve!");
    });
    return;
  }

  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
}

configureWhatsAppLink(
  "jefferson-link",
  WHATSAPP_1,
  "Olá! Encontrei o contato pelo cartão e gostaria de conversar."
);
configureWhatsAppLink(
  "leader-link",
  WHATSAPP_LIDER,
  "Olá! Encontrei o contato pelo cartão e gostaria de conversar com alguém da liderança."
);
