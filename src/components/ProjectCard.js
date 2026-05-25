export function ProjectCard(project) {
  return `
    <div class="project-card">
      <div class="project-card-image-wrapper">
        <img src="${project.thumbnail || project.images[0]}" alt="${project.title}" class="project-card-img" onerror="this.src='https://placehold.co/600x400/2b2d42/ff6b00?text=${encodeURIComponent(project.client)}'">
        <div class="project-card-overlay">
          <span class="project-card-view-btn">Ver Detalhes</span>
        </div>
      </div>
      <div class="project-card-content">
        <span class="project-card-client">${project.client}</span>
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          ${project.location}
        </p>
        <a href="/projeto/${project.id}" class="project-card-link-anchor" data-link>Detalhes do Projeto &rarr;</a>
      </div>
    </div>
  `;
}
