// ============================================================
//  CONFIGURAÇÃO DO EMAILJS
//  Preencha com suas credenciais do https://www.emailjs.com/
// ============================================================

export const EMAILJS_CONFIG = {
  // Encontre em: EmailJS Dashboard → Account → Public Key
  publicKey: "5XztajhiWVaOAcneS",

  // Encontre em: EmailJS Dashboard → Email Services → Service ID
  serviceId: "service_up8uk6j",

  // Template para o formulário de CONTATO (página Contato)
  contactTemplateId: "template_contact",

  // Template para o formulário de CARREIRAS (página Trabalhe Conosco)
  careerTemplateId: "template_rh",
};

// Destinos dos e-mails (configurados nos templates do EmailJS)
export const EMAIL_DESTINATIONS = {
  // Usado no template_contact → variável {{to_email}}
  comercial: "taniagabrielly7@gmail.com", // altere para seu e-mail de teste se precisar

  // Usado no template_career → variável {{to_email}}
  rh: "vssmatheus@gmail.com", // altere para seu e-mail de teste se precisar
};
