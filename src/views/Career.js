import { CareerForm, initCareerForm } from '../components/CareerForm.js';

export function Career() {
  return `
    <section class="page-header" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/pages/header_career.jpg');">
      <div class="container">
        <h1>Trabalhe Conosco</h1>
        <p class="breadcrumbs"><a href="/" data-link>Home</a> / Trabalhe Conosco</p>
      </div>
    </section>

    <section class="section section-career bg-white">
      <div class="container max-w-md">
        <div class="career-intro text-center" style="margin-bottom: 3rem;">
          <span class="section-badge">Carreira</span>
          <h2>Junte-se à Nossa Equipe</h2>
          <p class="section-lead">Envie o seu currículo agora mesmo para a PMI! O seu currículo ficará registrado em nossa base de dados e será avaliado por nossos recrutadores para futuras vagas operacionais ou técnicas.</p>
        </div>

        <div class="career-form-wrapper bg-light rounded-img shadow-md" style="padding: 2.5rem 2rem;">
          ${CareerForm()}
        </div>
      </div>
    </section>
  `;
}

export function initCareer() {
  initCareerForm();
}
