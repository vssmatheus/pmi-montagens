import { teamMembers } from '../data/team.js';

export function Company() {
  const teamHtml = teamMembers.map((member, index) => {
    const expHtml = member.experience.map(exp => `<li>${exp}</li>`).join('');
    return `
      <div class="team-card" data-index="${index}">
        <div class="team-card-header">
          <div class="team-avatar">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-orange"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div class="team-title-wrap">
            <h3>${member.name}</h3>
            <span class="team-role">${member.role}</span>
            <span class="team-edu">${member.education}</span>
          </div>
        </div>
        <div class="team-card-body">
          <button class="btn-toggle-exp">Ver Projetos Realizados <span class="arrow">&darr;</span></button>
          <div class="team-experience-list hidden">
            <ul>
              ${expHtml}
            </ul>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="page-header" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/pages/header_company.jpg');">
      <div class="container">
        <h1>Sobre a Empresa</h1>
        <p class="breadcrumbs"><a href="/" data-link>Home</a> / Empresa</p>
      </div>
    </section>

    <section class="section section-about-detail bg-white">
      <div class="container grid-2">
        <div class="about-text">
          <span class="section-badge">PMI Montagens</span>
          <h2>Ampla experiência e corpo técnico altamente especializado</h2>
          <p>
            Somos uma empresa dedicada a implantação, ampliação, modernização, manutenção e montagem industrial em todo o território nacional. Em nosso portfólio oferecemos serviços como: fabricação de estruturas metálicas/caldeiraria, montagem eletromecânica, manutenção/modernização de equipamentos e construção civil. Buscamos a excelência no atendimento, trabalhando para atender as necessidades de nossos clientes, priorizando a segurança, qualidade e prazo.
          </p>
          <p>
            A PMI Montagens Industriais possui uma ampla experiência em assessorar, formular e implementar projetos. Seu corpo técnico, oriundo de grandes corporações, foi responsável pela execução de grandes empreendimentos no Brasil e no exterior, aprimorando suas habilidades e responsabilidades com foco total em engenharia segura, inovação logística e desenvolvimento profissional de seus colaboradores.
          </p>
        </div>
        <div class="about-values">
          <div class="value-box">
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            </div>
            <div class="value-content">
              <h3>Missão</h3>
              <p>Oferecer as melhores soluções de implantação, ampliação, manutenção e montagem industrial. Garantir a contínua busca da META ZERO ACIDENTES COM AFASTAMENTO, controle constante de qualidade de soldagem e eficiência logística.</p>
            </div>
          </div>
          <div class="value-box">
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <div class="value-content">
              <h3>Visão</h3>
              <p>Ser reconhecida nacionalmente como parceira inovadora com atendimento personalizado e altamente qualificado na busca conjunta das melhores soluções de engenharia para superar os desafios do cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Team Section -->
    <section class="section section-team bg-light">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Corpo Técnico</span>
          <h2>Nosso Time de Especialistas</h2>
          <p class="section-lead">A força da PMI reside na ampla bagagem técnica acumulada por nossos líderes e engenheiros em grandes empreendimentos.</p>
        </div>
        <div class="team-grid">
          ${teamHtml}
        </div>
      </div>
    </section>

    <!-- Clients Section -->
    <section class="section section-clients bg-white">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-badge">Credibilidade</span>
          <h2>Nossos Clientes</h2>
          <p class="section-lead">Grandes marcas industriais que confiam na competência técnica e conformidade da PMI.</p>
        </div>
        <div class="clients-slider-wrapper">
          <div class="clients-logo-grid">
            <div class="client-logo-card">
              <span class="client-name">Votorantim Cimentos</span>
            </div>
            <div class="client-logo-card">
              <span class="client-name">Brennand Cimentos</span>
            </div>
            <div class="client-logo-card">
              <span class="client-name">LafargeHolcim</span>
            </div>
            <div class="client-logo-card">
              <span class="client-name">Largo Resources</span>
            </div>
            <div class="client-logo-card">
              <span class="client-name">Vivix Vidros Planos</span>
            </div>
            <div class="client-logo-card">
              <span class="client-name">InterCement</span>
            </div>
            <div class="client-logo-card">
              <span class="client-name">Beumer Group</span>
            </div>
            <div class="client-logo-card">
              <span class="client-name">Galvanisa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initCompany() {
  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach(card => {
    const toggleBtn = card.querySelector('.btn-toggle-exp');
    const expList = card.querySelector('.team-experience-list');
    const arrow = card.querySelector('.arrow');
    
    if (toggleBtn && expList) {
      toggleBtn.addEventListener('click', () => {
        const isHidden = expList.classList.contains('hidden');
        if (isHidden) {
          expList.classList.remove('hidden');
          toggleBtn.classList.add('active');
          if (arrow) arrow.innerHTML = '&uarr;';
        } else {
          expList.classList.add('hidden');
          toggleBtn.classList.remove('active');
          if (arrow) arrow.innerHTML = '&darr;';
        }
      });
    }
  });
}
