import { ContactForm, initContactForm } from '../components/ContactForm.js';

export function Contact() {
  return `
    <section class="page-header" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/pages/header_contact.jpg');">
      <div class="container">
        <h1>Contatos</h1>
        <p class="breadcrumbs"><a href="/" data-link>Home</a> / Contatos</p>
      </div>
    </section>

    <section class="section section-contact bg-white">
      <div class="container">
        <div class="contact-grid grid-2">
          
          <!-- Contact Details and Map -->
          <div class="contact-details-column">
            <span class="section-badge">Atendimento</span>
            <h2>Informações de Contato</h2>
            <p style="margin-bottom: 2rem;">Fale diretamente com nosso escritório administrativo ou envie sua mensagem pelo formulário.</p>
            
            <div class="contact-info-cards">
              <div class="info-card">
                <div class="info-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div class="info-card-text">
                  <h3>Telefone</h3>
                  <a href="tel:+558135454795">+55 (81) 3545-4795</a>
                </div>
              </div>

              <div class="info-card">
                <div class="info-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div class="info-card-text">
                  <h3>E-mail</h3>
                  <a href="mailto:vssmatheus@gmail.com">vssmatheus@gmail.com</a>
                </div>
              </div>

              <div class="info-card">
                <div class="info-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div class="info-card-text">
                  <h3>Endereço</h3>
                  <address>Avenida Alfredo Bandeira de Melo, N° 142, ROD. BR 101, Loja E, Igarassu - PE</address>
                </div>
              </div>

              <div class="info-card">
                <div class="info-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div class="info-card-text">
                  <h3>Horário de Funcionamento</h3>
                  <p>Segunda a Sexta-feira: 08:00 às 18:00</p>
                </div>
              </div>
            </div>

            <!-- Map Wrapper -->
            <div class="map-wrapper rounded-img shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.513361118182!2d-34.917561284814986!3d-7.826243194360699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab17056d6a26cf%3A0xe5be9de58a8b4e!2sAv.%20Alfredo%20Bandeira%20de%20Melo%2C%20142%20-%20Igarassu%2C%20PE%2C%2053620-444!5e0!3m2!1spt-BR!2sbr!4v1684992985390!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="300" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Localização PMI Montagens">
              </iframe>
            </div>
          </div>
          
          <!-- Comments Form -->
          <div class="contact-form-column bg-light rounded-img shadow-md" style="padding: 2.5rem 2rem;">
            <h3>Enviar Mensagem</h3>
            <p style="margin-bottom: 2rem;">Preencha os campos abaixo para nos enviar comentários, sugestões ou dúvidas gerais.</p>
            ${ContactForm('general-contact-form')}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initContact() {
  initContactForm('general-contact-form');
}
