import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, EMAIL_DESTINATIONS } from "../config/email.js";

// ─── HTML Template ───────────────────────────────────────────────────────────

export function ContactForm(formId = "contact-form-comp") {
  return `
    <form id="${formId}" class="modern-form" novalidate>
      <div class="form-grid">
        <div class="form-group">
          <label for="name-${formId}">Nome *</label>
          <input type="text" id="name-${formId}" name="name" required placeholder="Seu nome completo">
          <span class="error-msg">Por favor, insira seu nome.</span>
        </div>
        <div class="form-group">
          <label for="phone-${formId}">Telefone</label>
          <input type="tel" id="phone-${formId}" name="phone" placeholder="(00) 00000-0000">
          <span class="error-msg">Por favor, insira um telefone válido.</span>
        </div>
        <div class="form-group">
          <label for="email-${formId}">E-mail *</label>
          <input type="email" id="email-${formId}" name="email" required placeholder="seuemail@exemplo.com">
          <span class="error-msg">Por favor, insira um e-mail válido.</span>
        </div>
      </div>
      <div class="form-group full-width">
        <label for="message-${formId}">Mensagem *</label>
        <textarea id="message-${formId}" name="message" required rows="5" placeholder="Escreva sua mensagem aqui..."></textarea>
        <span class="error-msg">Por favor, escreva uma mensagem com pelo menos 10 caracteres.</span>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary btn-large" id="submit-btn-${formId}">
          <span class="btn-text">Enviar Mensagem</span>
          <span class="btn-loading hidden">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
            Enviando...
          </span>
        </button>
      </div>

      <!-- Modal de Status -->
      <div class="form-status-modal hidden" id="status-modal-${formId}">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="modal-title-${formId}">Mensagem Enviada!</h3>
            <button type="button" class="close-modal-btn">&times;</button>
          </div>
          <div class="modal-body" id="modal-body-${formId}">
            Sua mensagem foi enviada com sucesso! Entraremos em contato o mais breve possível.
          </div>
        </div>
      </div>
    </form>
  `;
}

// ─── Logic / Init ─────────────────────────────────────────────────────────────

export function initContactForm(formId = "contact-form-comp") {
  const form = document.getElementById(formId);
  if (!form) return;

  // Inicializa o EmailJS com a chave pública
  emailjs.init(EMAILJS_CONFIG.publicKey);

  const modal        = document.getElementById(`status-modal-${formId}`);
  const modalTitle   = document.getElementById(`modal-title-${formId}`);
  const modalBody    = document.getElementById(`modal-body-${formId}`);
  const submitBtn    = document.getElementById(`submit-btn-${formId}`);
  const btnText      = submitBtn?.querySelector(".btn-text");
  const btnLoading   = submitBtn?.querySelector(".btn-loading");
  const closeBtn     = modal?.querySelector(".close-modal-btn");

  // Fecha o modal ao clicar no X
  closeBtn?.addEventListener("click", () => modal.classList.add("hidden"));

  // Fecha o modal ao clicar fora dele
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  // Helper: mostrar / esconder estado de carregamento
  function setLoading(loading) {
    if (!submitBtn) return;
    submitBtn.disabled = loading;
    btnText?.classList.toggle("hidden", loading);
    btnLoading?.classList.toggle("hidden", !loading);
  }

  // Helper: mostrar modal de resultado
  function showModal(success, message) {
    if (!modal) return;
    if (modalTitle) modalTitle.textContent = success ? "Mensagem Enviada! ✅" : "Erro ao Enviar ❌";
    if (modalBody)  modalBody.textContent  = message;
    modal.classList.remove("hidden");
  }

  // Validação dos campos
  function validate() {
    let isValid = true;
    const nameInput    = form.querySelector('[name="name"]');
    const emailInput   = form.querySelector('[name="email"]');
    const messageInput = form.querySelector('[name="message"]');

    if (!nameInput.value.trim()) {
      nameInput.parentElement.classList.add("has-error");
      isValid = false;
    } else {
      nameInput.parentElement.classList.remove("has-error");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.parentElement.classList.add("has-error");
      isValid = false;
    } else {
      emailInput.parentElement.classList.remove("has-error");
    }

    if (messageInput.value.trim().length < 10) {
      messageInput.parentElement.classList.add("has-error");
      isValid = false;
    } else {
      messageInput.parentElement.classList.remove("has-error");
    }

    return isValid;
  }

  // Limpa erros ao digitar
  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", () => {
      input.parentElement.classList.remove("has-error");
    });
  });

  // Submit
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const nameInput    = form.querySelector('[name="name"]');
    const emailInput   = form.querySelector('[name="email"]');
    const phoneInput   = form.querySelector('[name="phone"]');
    const messageInput = form.querySelector('[name="message"]');

    const templateParams = {
      to_email:     EMAIL_DESTINATIONS.comercial,
      from_name:    nameInput.value.trim(),
      from_email:   emailInput.value.trim(),
      phone:        phoneInput?.value.trim() || "Não informado",
      message:      messageInput.value.trim(),
      reply_to:     emailInput.value.trim(),
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.contactTemplateId,
        templateParams
      );

      showModal(
        true,
        "Sua mensagem foi enviada com sucesso! Entraremos em contato o mais breve possível."
      );
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      showModal(
        false,
        `Não foi possível enviar sua mensagem. Por favor, tente novamente ou entre em contato pelo telefone. (Erro: ${error?.text || error?.message || "desconhecido"})`
      );
    } finally {
      setLoading(false);
    }
  });
}
