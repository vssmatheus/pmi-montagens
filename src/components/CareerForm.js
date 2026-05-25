import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, EMAIL_DESTINATIONS } from "../config/email.js";

// ─── HTML Template ───────────────────────────────────────────────────────────

export function CareerForm() {
  return `
    <form id="career-form-comp" class="modern-form career-form" novalidate>

      <div class="form-section">
        <h3>1. Dados Pessoais</h3>
        <div class="form-grid">
          <div class="form-group">
            <label for="career-name">Nome Completo *</label>
            <input type="text" id="career-name" name="name" required placeholder="Seu nome completo">
            <span class="error-msg">Campo obrigatório.</span>
          </div>
          <div class="form-group">
            <label for="career-cpf">CPF *</label>
            <input type="text" id="career-cpf" name="cpf" required placeholder="000.000.000-00" maxlength="14">
            <span class="error-msg">CPF inválido.</span>
          </div>
          <div class="form-group">
            <label for="career-rg">RG *</label>
            <input type="text" id="career-rg" name="rg" required placeholder="0.000.000">
            <span class="error-msg">Campo obrigatório.</span>
          </div>
          <div class="form-group">
            <label for="career-birth">Data de Nascimento *</label>
            <input type="date" id="career-birth" name="dt_nascimento" required>
            <span class="error-msg">Campo obrigatório.</span>
          </div>
        </div>
      </div>

      <div class="form-section">
        <h3>2. Dados de Contato</h3>
        <div class="form-grid">
          <div class="form-group">
            <label for="career-email">E-mail *</label>
            <input type="email" id="career-email" name="email" required placeholder="seuemail@exemplo.com">
            <span class="error-msg">E-mail inválido.</span>
          </div>
          <div class="form-group">
            <label for="career-phone-fix">Telefone Fixo</label>
            <input type="tel" id="career-phone-fix" name="fonefixo" placeholder="(00) 0000-0000">
          </div>
          <div class="form-group">
            <label for="career-phone-mob">Celular / WhatsApp *</label>
            <input type="tel" id="career-phone-mob" name="fonemovel" required placeholder="(00) 00000-0000">
            <span class="error-msg">Campo obrigatório.</span>
          </div>
        </div>
      </div>

      <div class="form-section">
        <h3>3. Endereço Residencial</h3>
        <div class="form-grid-3">
          <div class="form-group col-span-2">
            <label for="career-street">Rua / Logradouro</label>
            <input type="text" id="career-street" name="rua" placeholder="Ex: Av. Principal">
          </div>
          <div class="form-group">
            <label for="career-num">Número</label>
            <input type="text" id="career-num" name="numero" placeholder="Ex: 123">
          </div>
          <div class="form-group">
            <label for="career-bairro">Bairro</label>
            <input type="text" id="career-bairro" name="bairro" placeholder="Seu bairro">
          </div>
          <div class="form-group">
            <label for="career-city">Cidade</label>
            <input type="text" id="career-city" name="cidade" placeholder="Ex: Recife">
          </div>
          <div class="form-group">
            <label for="career-state">Estado</label>
            <input type="text" id="career-state" name="estado" placeholder="Ex: PE">
          </div>
        </div>
      </div>

      <div class="form-section">
        <h3>4. Dados Profissionais</h3>
        <div class="form-grid">
          <div class="form-group">
            <label for="career-prof">Profissão</label>
            <input type="text" id="career-prof" name="profissao" placeholder="Ex: Engenheiro, Montador">
          </div>
          <div class="form-group">
            <label for="career-role">Cargo Pretendido *</label>
            <input type="text" id="career-role" name="cargopretendido" required placeholder="Cargo de interesse">
            <span class="error-msg">Campo obrigatório.</span>
          </div>
          <div class="form-group full-width">
            <label for="career-file" class="custom-file-upload">
              <span class="file-btn">📎 Anexar Currículo (PDF/Word)</span>
              <span class="file-name" id="file-name-label">Nenhum arquivo selecionado</span>
            </label>
            <input type="file" id="career-file" name="attachment" accept=".pdf,.doc,.docx" style="display: none;">
            <span class="file-hint">Opcional · máx. 5MB · PDF, DOC ou DOCX</span>
          </div>
        </div>
      </div>

      <div class="form-group full-width">
        <label for="career-obs">Observações / Resumo Profissional</label>
        <textarea id="career-obs" name="observacao" rows="4" placeholder="Escreva observações adicionais..."></textarea>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary btn-large" id="career-submit-btn">
          <span class="btn-text">Enviar Candidatura</span>
          <span class="btn-loading hidden">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
            Enviando...
          </span>
        </button>
      </div>

      <!-- Modal de Status -->
      <div class="form-status-modal hidden" id="status-modal-career">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="career-modal-title">Candidatura Recebida! ✅</h3>
            <button type="button" class="close-modal-btn">&times;</button>
          </div>
          <div class="modal-body" id="career-modal-body">
            Seu currículo foi enviado com sucesso! Caso seu perfil se adeque a alguma vaga, entraremos em contato.
          </div>
        </div>
      </div>
    </form>
  `;
}

// ─── Logic / Init ─────────────────────────────────────────────────────────────

// Converte arquivo em base64 para incluir no corpo do e-mail
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function initCareerForm() {
  const form = document.getElementById("career-form-comp");
  if (!form) return;

  // Inicializa o EmailJS
  emailjs.init(EMAILJS_CONFIG.publicKey);

  const fileInput     = document.getElementById("career-file");
  const fileNameLabel = document.getElementById("file-name-label");
  const modal         = document.getElementById("status-modal-career");
  const modalTitle    = document.getElementById("career-modal-title");
  const modalBody     = document.getElementById("career-modal-body");
  const submitBtn     = document.getElementById("career-submit-btn");
  const btnText       = submitBtn?.querySelector(".btn-text");
  const btnLoading    = submitBtn?.querySelector(".btn-loading");
  const closeBtn      = modal?.querySelector(".close-modal-btn");

  // Preview do nome do arquivo
  fileInput?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("O arquivo deve ter no máximo 5MB.");
        fileInput.value = "";
        fileNameLabel.textContent = "Nenhum arquivo selecionado";
        fileNameLabel.classList.remove("selected");
        return;
      }
      fileNameLabel.textContent = file.name;
      fileNameLabel.classList.add("selected");
    } else {
      fileNameLabel.textContent = "Nenhum arquivo selecionado";
      fileNameLabel.classList.remove("selected");
    }
  });

  // Fechar modal
  closeBtn?.addEventListener("click", () => modal.classList.add("hidden"));
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  // Formatação automática do CPF
  const cpfInput = document.getElementById("career-cpf");
  cpfInput?.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "").substring(0, 11);
    if (v.length > 9)      v = `${v.slice(0,3)}.${v.slice(3,6)}.${v.slice(6,9)}-${v.slice(9)}`;
    else if (v.length > 6) v = `${v.slice(0,3)}.${v.slice(3,6)}.${v.slice(6)}`;
    else if (v.length > 3) v = `${v.slice(0,3)}.${v.slice(3)}`;
    e.target.value = v;
  });

  // Helpers de UI
  function setLoading(loading) {
    if (!submitBtn) return;
    submitBtn.disabled = loading;
    btnText?.classList.toggle("hidden", loading);
    btnLoading?.classList.toggle("hidden", !loading);
  }

  function showModal(success, message) {
    if (!modal) return;
    if (modalTitle) modalTitle.textContent = success ? "Candidatura Enviada! ✅" : "Erro ao Enviar ❌";
    if (modalBody)  modalBody.textContent  = message;
    modal.classList.remove("hidden");
  }

  // Validação
  function validate() {
    let ok = true;
    const required = form.querySelectorAll("[required]");
    required.forEach((field) => {
      if (!field.value.trim()) {
        field.parentElement.classList.add("has-error");
        ok = false;
      } else {
        field.parentElement.classList.remove("has-error");
      }
    });

    const emailField = form.querySelector('[name="email"]');
    if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
      emailField.parentElement.classList.add("has-error");
      ok = false;
    }

    return ok;
  }

  // Limpa erros ao digitar
  form.querySelectorAll("input, textarea, select").forEach((el) => {
    el.addEventListener("input", () => el.parentElement.classList.remove("has-error"));
  });

  // Submit
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validate()) {
      form.querySelector(".has-error")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setLoading(true);

    // Coleta todos os campos em um objeto
    const data = new FormData(form);
    const fields = Object.fromEntries(data.entries());

    // Monta o corpo do e-mail com todos os dados do candidato
    const resumoTexto = `
CANDIDATURA RECEBIDA — PMI Montagens Industriais
================================================

DADOS PESSOAIS
Nome:              ${fields.name || "-"}
CPF:               ${fields.cpf || "-"}
RG:                ${fields.rg || "-"}
Nascimento:        ${fields.dt_nascimento || "-"}

CONTATO
E-mail:            ${fields.email || "-"}
Telefone Fixo:     ${fields.fonefixo || "-"}
Celular/WhatsApp:  ${fields.fonemovel || "-"}

ENDEREÇO
Rua/Logradouro:    ${fields.rua || "-"}, Nº ${fields.numero || "-"}
Bairro:            ${fields.bairro || "-"}
Cidade/Estado:     ${fields.cidade || "-"} / ${fields.estado || "-"}

DADOS PROFISSIONAIS
Profissão:         ${fields.profissao || "-"}
Cargo Pretendido:  ${fields.cargopretendido || "-"}

OBSERVAÇÕES
${fields.observacao || "Nenhuma"}
    `.trim();

    // Prepara parâmetros para o EmailJS
    const templateParams = {
      to_email:   EMAIL_DESTINATIONS.rh,
      reply_to:   fields.email || "",
      from_name:  fields.name  || "Candidato",
      cargo:      fields.cargopretendido || "-",
      candidate_summary: resumoTexto,
      has_attachment: "Não",
      attachment_info: "Nenhum arquivo anexado.",
    };

    // Tenta converter o arquivo para Base64 (opcional)
    const file = fileInput?.files?.[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        // Nota: EmailJS gratuito não suporta anexos binários via API.
        // Incluímos o nome e uma instrução no corpo do e-mail.
        templateParams.has_attachment  = "Sim";
        templateParams.attachment_info = `Arquivo: ${file.name} (${(file.size / 1024).toFixed(0)} KB) — O candidato informou anexar um currículo. Solicite o reenvio diretamente se necessário.`;
        // Se seu plano EmailJS suportar, descomente abaixo para tentar enviar em base64:
        // templateParams.attachment_base64 = base64;
      } catch {
        templateParams.attachment_info = "Erro ao processar o arquivo.";
      }
    }

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.careerTemplateId,
        templateParams
      );

      showModal(
        true,
        "Sua candidatura foi enviada com sucesso para o RH da PMI Montagens! Caso seu perfil se adeque a alguma vaga, entraremos em contato."
      );
      form.reset();
      if (fileNameLabel) {
        fileNameLabel.textContent = "Nenhum arquivo selecionado";
        fileNameLabel.classList.remove("selected");
      }
    } catch (error) {
      console.error("EmailJS career error:", error);
      showModal(
        false,
        `Não foi possível enviar sua candidatura. Por favor, tente novamente ou envie seu currículo diretamente para rh@pmi.srv.br. (Erro: ${error?.text || error?.message || "desconhecido"})`
      );
    } finally {
      setLoading(false);
    }
  });
}
