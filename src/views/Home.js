import { projects } from '../data/projects.js';
import { ProjectCard } from '../components/ProjectCard.js';
import { ContactForm, initContactForm } from '../components/ContactForm.js';

export function Home() {
  const featuredProjects = projects.slice(0, 3).map(p => ProjectCard(p)).join('');

  return `
    <!-- Hero Section with Slides -->
    <section class="hero-slider-section">
      <div class="slider-wrapper">
        <div class="slide active" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/slider/slide_assembly.jpg');">
          <div class="container slide-content">
            <h1>Montagem Eletromecânica</h1>
            <p>Mobilização, planejamento rigoroso e acompanhamento técnico para comissionamento e partida.</p>
            <a href="/area-de-atuacao" class="btn btn-primary btn-large" data-link>Nossos Serviços</a>
          </div>
        </div>
        <div class="slide" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/slider/slide_maintenance.jpg');">
          <div class="container slide-content">
            <h1>Manutenção e Modernização</h1>
            <p>Ações preventivas, corretivas e preditivas para eliminar paradas e maximizar produção.</p>
            <a href="/area-de-atuacao" class="btn btn-primary btn-large" data-link>Nossos Serviços</a>
          </div>
        </div>
        <div class="slide" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/slider/slide_fabrication.jpg');">
          <div class="container slide-content">
            <h1>Fabricação sob Medida</h1>
            <p>Tecnologia avançada para cálculos e detalhamento de estruturas metálicas de médio e grande porte.</p>
            <a href="/area-de-atuacao" class="btn btn-primary btn-large" data-link>Nossos Serviços</a>
          </div>
        </div>
        <div class="slide" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/slider/slide_civil.jpg');">
          <div class="container slide-content">
            <h1>Construção Civil</h1>
            <p>Segurança e qualidade em fundações, pisos industriais, terraplenagem e concreto armado.</p>
            <a href="/area-de-atuacao" class="btn btn-primary btn-large" data-link>Nossos Serviços</a>
          </div>
        </div>
        <div class="slide" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/slider/slide_boiler.jpg');">
          <div class="container slide-content">
            <h1>Caldeiraria Industrial</h1>
            <p>Desde pequenas peças componentes até equipamentos industriais de grande porte.</p>
            <a href="/area-de-atuacao" class="btn btn-primary btn-large" data-link>Nossos Serviços</a>
          </div>
        </div>
      </div>
      <div class="slider-nav">
        <button class="slider-nav-btn prev-btn">&lt;</button>
        <div class="slider-dots">
          <span class="dot active" data-index="0"></span>
          <span class="dot" data-index="1"></span>
          <span class="dot" data-index="2"></span>
          <span class="dot" data-index="3"></span>
          <span class="dot" data-index="4"></span>
        </div>
        <button class="slider-nav-btn next-btn">&gt;</button>
      </div>
    </section>

    <!-- Quem Somos Section -->
    <section class="section section-who-we-are bg-white">
      <div class="container grid-2">
        <div class="section-image">
          <img src="/images/pages/homepage_who_we_are.jpg" alt="Instalações PMI" class="rounded-img shadow-lg" onerror="this.src='https://placehold.co/600x400/2b2d42/ffffff?text=PMI+Montagens'">
        </div>
        <div class="section-text">
          <span class="section-badge">Quem Somos</span>
          <h2>Dedicados à excelência em montagem e engenharia industrial</h2>
          <p>
            Somos uma empresa dedicada à implantação, ampliação, modernização, manutenção e montagem industrial em todo o território nacional. Em nosso portfólio oferecemos serviços integrados priorizando a segurança, qualidade e cumprimento rigoroso de prazos.
          </p>
          <p>
            Possuímos ampla experiência e um corpo técnico de engenharia altamente qualificado, oriundo de grandes multinacionais do setor, com histórico de execução de grandes projetos de infraestrutura no Brasil e no exterior.
          </p>
          <div style="margin-top: 1.5rem;">
            <a href="/empresa" class="btn btn-secondary" data-link>Saiba mais sobre nós &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Área de Atuação Summary -->
    <section class="section section-services bg-light">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-badge">Nossa Atuação</span>
          <h2>Áreas de Atuação e Serviços</h2>
          <p class="section-lead">Atendemos setores exigentes como cimenteiras, mineração, infraestrutura e indústrias em geral.</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 12H3M12 3v18"/></svg>
            </div>
            <h3>Fabricação de Estruturas Metálicas</h3>
            <p>Utilização de programas de última geração para cálculos e detalhamento de projetos sob encomenda de médio e grande porte.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <h3>Caldeiraria Industrial</h3>
            <p>Fabricação e reparo de peças componentes a grandes equipamentos sob demandas e especificações industriais específicas.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M5 17h14M8 14h8M11 11h2M12 2v6"/></svg>
            </div>
            <h3>Construção Civil</h3>
            <p>Escavação, reaterro, pavimentação, terraplenagem, pisos industriais de concreto e execução de fundações seguras.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10"/></svg>
            </div>
            <h3>Montagem Eletromecânica</h3>
            <p>Montagem completa de maquinários, tubulações, redes elétricas de potência, cabeamento de controle, automação e partida técnica assistida.</p>
          </div>
        </div>
        
        <div class="text-center" style="margin-top: 3rem;">
          <a href="/area-de-atuacao" class="btn btn-primary" data-link>Ver Detalhes dos Serviços</a>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="section section-featured-projects bg-white">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-badge">Cases de Sucesso</span>
          <h2>Projetos em Destaque</h2>
          <p class="section-lead">Algumas das grandes obras de infraestrutura que carregam a nossa assinatura.</p>
        </div>
        
        <div class="projects-grid">
          ${featuredProjects}
        </div>
        
        <div class="text-center" style="margin-top: 3rem;">
          <a href="/projetos" class="btn btn-secondary" data-link>Galeria de Projetos Completa</a>
        </div>
      </div>
    </section>

    <!-- Quick Contact / Footer CTA -->
    <section class="section section-cta-contact bg-dark text-white">
      <div class="container grid-2">
        <div>
          <h2>Vamos construir seu próximo projeto juntos?</h2>
          <p class="cta-desc text-muted">
            Fale com a nossa equipe comercial para orçamentos, detalhamento de soluções técnicas ou parcerias comerciais em qualquer localidade do país.
          </p>
          <div class="cta-contact-info">
            <div class="cta-info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+55 (81) 3545-4795</span>
            </div>
            <div class="cta-info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>comercial@pmi.srv.br</span>
            </div>
            <div class="cta-info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span>Seg-Sex: 8:00 - 18:00</span>
            </div>
          </div>
        </div>
        <div class="cta-form-container">
          <h3 class="text-white" style="margin-bottom: 1.5rem;">Fale Conosco</h3>
          ${ContactForm('home-contact-form')}
        </div>
      </div>
    </section>
  `;
}

export function initHome() {
  // Slider functionality
  const slides = document.querySelectorAll('.hero-slider-section .slide');
  const dots = document.querySelectorAll('.hero-slider-section .dot');
  const prevBtn = document.querySelector('.hero-slider-section .prev-btn');
  const nextBtn = document.querySelector('.hero-slider-section .next-btn');
  
  if (slides.length > 0) {
    let currentSlide = 0;
    let slideInterval;

    const showSlide = (index) => {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
      }
    };

    const nextSlide = () => {
      showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
      showSlide(currentSlide - 1);
    };

    const startSlideShow = () => {
      slideInterval = setInterval(nextSlide, 5000);
    };

    const stopSlideShow = () => {
      clearInterval(slideInterval);
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
      });
    }

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'), 10);
        stopSlideShow();
        showSlide(index);
        startSlideShow();
      });
    });

    startSlideShow();

    // Cleanup interval on DOM removal
    window.addEventListener('popstate', stopSlideShow);
    // Also clear if DOM element gets destroyed
    const checkExist = setInterval(() => {
      if (!document.contains(document.querySelector('.hero-slider-section'))) {
        clearInterval(checkExist);
        stopSlideShow();
      }
    }, 1000);
  }

  // Init contact form validation
  initContactForm('home-contact-form');
}
