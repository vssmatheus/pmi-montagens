import { projects } from '../data/projects.js';
import { ProjectCard } from '../components/ProjectCard.js';

export function Projects() {
  const cardsHtml = projects.map(p => ProjectCard(p)).join('');

  return `
    <section class="page-header" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/pages/header_projects.jpg');">
      <div class="container">
        <h1>Nossos Projetos</h1>
        <p class="breadcrumbs"><a href="/" data-link>Home</a> / Projetos</p>
      </div>
    </section>

    <section class="section section-portfolio bg-white">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-badge">Cases Realizados</span>
          <h2>Galeria de Projetos Executados</h2>
          <p class="section-lead">Explore os detalhes e imagens técnicas das obras civis e montagens mecânicas de alta complexidade.</p>
        </div>

        <div class="projects-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}

export function initProjects() {
  // Event listeners for routing are handled globally in main.js,
  // but we can put page-specific gallery interactions here.
}
