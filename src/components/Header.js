export function Header() {
  return `
    <div class="top-bar">
      <div class="container top-bar-container">
        <div class="top-bar-social">
          <a href="https://www.facebook.com/pmimontagens/" target="_blank" aria-label="Facebook" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/company/pmimontagens/" target="_blank" aria-label="LinkedIn" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
        <div class="top-bar-contact">
          <a href="mailto:comercial@pmi.srv.br" class="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            comercial@pmi.srv.br
          </a>
          <a href="tel:+558135454795" class="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +55 (81) 3545-4795
          </a>
        </div>
      </div>
    </div>
    
    <header class="app-header">
      <div class="container header-container">
        <a href="/" class="logo-link" data-link>
          <div class="logo-container">
            <span class="logo-pmi">PMI</span>
            <span class="logo-sub">Montagens Industriais</span>
          </div>
        </a>
        
        <button class="mobile-nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span class="hamburger"></span>
        </button>
        
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="/" class="nav-link" data-link>Home</a></li>
            <li><a href="/empresa" class="nav-link" data-link>Empresa</a></li>
            <li><a href="/area-de-atuacao" class="nav-link" data-link>Área de Atuação</a></li>
            <li><a href="/projetos" class="nav-link" data-link>Projetos</a></li>
            <li><a href="/trabalhe-conosco" class="nav-link" data-link>Trabalhe Conosco</a></li>
            <li><a href="/contatos" class="nav-link" data-link>Contatos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

export function initHeader() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.main-nav');
  
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('active');
      toggle.classList.toggle('active');
    });
  }

  // Update active state in nav links
  updateActiveNavLink();
}

export function updateActiveNavLink() {
  const path = window.location.pathname;
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path.startsWith('/projeto') && href === '/projetos')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Close mobile nav on click/navigate
  const toggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (nav && nav.classList.contains('active')) {
    nav.classList.remove('active');
    if (toggle) {
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }
}
