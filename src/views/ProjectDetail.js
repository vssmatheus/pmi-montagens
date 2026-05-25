import { projects } from '../data/projects.js';
import { ProjectCard } from '../components/ProjectCard.js';

export function ProjectDetail(id) {
  const project = projects.find(p => p.id === id);
  if (!project) {
    return `
      <section class="section text-center bg-white">
        <div class="container">
          <h2>Projeto Não Encontrado</h2>
          <p>O projeto com o ID solicitado não existe ou foi removido.</p>
          <a href="/projetos" class="btn btn-primary" data-link>Voltar para Projetos</a>
        </div>
      </section>
    `;
  }

  // Related projects (excluding the current one)
  const relatedProjectsHtml = projects
    .filter(p => p.id !== id)
    .map(p => ProjectCard(p))
    .join('');

  // Carousel images indicator dots & items
  const dotsHtml = project.images.map((img, idx) => `
    <span class="carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
  `).join('');

  const itemsHtml = project.images.map((img, idx) => `
    <div class="carousel-item ${idx === 0 ? 'active' : ''}">
      <img src="${img}" alt="Slide do projeto ${project.title} - ${idx + 1}" onerror="this.src='https://placehold.co/600x400/2b2d42/ff6b00?text=${encodeURIComponent(project.client)}'">
    </div>
  `).join('');

  return `
    <section class="page-header" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/pages/header_projects.jpg');">
      <div class="container">
        <h1>Detalhes do Projeto</h1>
        <p class="breadcrumbs"><a href="/" data-link>Home</a> / <a href="/projetos" data-link>Projetos</a> / ${project.client}</p>
      </div>
    </section>

    <section class="section section-project-detail bg-white">
      <div class="container">
        <div class="project-detail-grid grid-2">
          
          <!-- Image Carousel -->
          <div class="project-carousel-container">
            <div class="project-carousel">
              <div class="carousel-inner">
                ${itemsHtml}
              </div>
              
              ${project.images.length > 1 ? `
                <button class="carousel-nav-btn prev-btn">&lt;</button>
                <button class="carousel-nav-btn next-btn">&gt;</button>
                <div class="carousel-dots">
                  ${dotsHtml}
                </div>
              ` : ''}
            </div>
          </div>
          
          <!-- Project Info -->
          <div class="project-info-container">
            <span class="project-badge-client">${project.client}</span>
            <h2 class="project-title-detail">${project.title}</h2>
            
            <div class="project-meta-list">
              <div class="meta-item">
                <strong>Localização:</strong>
                <span>${project.location}</span>
              </div>
              <div class="meta-item">
                <strong>Início:</strong>
                <span>${project.startDate}</span>
              </div>
              <div class="meta-item">
                <strong>Conclusão:</strong>
                <span>${project.endDate}</span>
              </div>
            </div>
            
            <div class="project-description-text">
              <h3>Escopo da Obra</h3>
              <p>${project.description}</p>
            </div>
            
            <div class="detail-actions">
              <a href="/projetos" class="btn btn-secondary" data-link>&larr; Voltar para Projetos</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Projects -->
    <section class="section section-related-projects bg-light">
      <div class="container">
        <div class="section-header">
          <h2>Outros Projetos Realizados</h2>
        </div>
        <div class="projects-grid">
          ${relatedProjectsHtml}
        </div>
      </div>
    </section>
  `;
}

export function initProjectDetail() {
  const carousel = document.querySelector('.project-carousel');
  if (!carousel) return;

  const items = carousel.querySelectorAll('.carousel-item');
  const dots = carousel.querySelectorAll('.carousel-dot');
  const prevBtn = carousel.querySelector('.prev-btn');
  const nextBtn = carousel.querySelector('.next-btn');

  if (items.length <= 1) return;

  let currentIdx = 0;

  const showSlide = (idx) => {
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentIdx = (idx + items.length) % items.length;
    items[currentIdx].classList.add('active');
    if (dots[currentIdx]) {
      dots[currentIdx].classList.add('active');
    }
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', () => showSlide(currentIdx - 1));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => showSlide(currentIdx + 1));
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.target.getAttribute('data-index'), 10);
      showSlide(idx);
    });
  });
}
