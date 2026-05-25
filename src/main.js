import './style.css';
import { Header, initHeader, updateActiveNavLink } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Home, initHome } from './views/Home.js';
import { Company, initCompany } from './views/Company.js';
import { Occupation, initOccupation } from './views/Occupation.js';
import { Projects, initProjects } from './views/Projects.js';
import { ProjectDetail, initProjectDetail } from './views/ProjectDetail.js';
import { Career, initCareer } from './views/Career.js';
import { Contact, initContact } from './views/Contact.js';

// Route matcher configuration
const routes = [
  { path: '/', view: Home, init: initHome },
  { path: '/empresa', view: Company, init: initCompany },
  { path: '/area-de-atuacao', view: Occupation, init: initOccupation },
  { path: '/projetos', view: Projects, init: initProjects },
  { path: '/projeto/:id', view: ProjectDetail, init: initProjectDetail },
  { path: '/trabalhe-conosco', view: Career, init: initCareer },
  { path: '/contatos', view: Contact, init: initContact }
];

// Router function
const router = async () => {
  const currentPath = window.location.pathname;

  // Test for match, including dynamic segments like :id
  let match = routes.find(r => {
    if (r.path === currentPath) return true;
    
    if (r.path.includes('/:id')) {
      const baseRoute = r.path.split('/:id')[0];
      const basePath = currentPath.split('/')[1];
      const detailId = currentPath.split('/')[2];
      
      if ('/' + basePath === baseRoute && detailId) {
        return true;
      }
    }
    return false;
  });

  // Fallback to home if no route matches
  if (!match) {
    match = { path: '/', view: Home, init: initHome };
  }

  // Get dynamic ID parameter if it exists
  let dynamicParam = null;
  if (match.path.includes('/:id')) {
    dynamicParam = currentPath.split('/')[2];
  }

  // Render view
  const appContent = document.getElementById('app-content');
  if (appContent) {
    appContent.innerHTML = dynamicParam ? match.view(dynamicParam) : match.view();
    
    // Execute page-specific init code
    if (match.init) {
      match.init();
    }
  }

  // Update nav links active states
  updateActiveNavLink();

  // Scroll to top
  window.scrollTo(0, 0);
};

// Handle browser navigation (back/forward)
window.addEventListener('popstate', router);

// Navigate programmatically
export const navigateTo = (url) => {
  window.history.pushState(null, null, url);
  router();
};

// Intercept clicks on links with data-link or links inside page that are relative
document.addEventListener('DOMContentLoaded', () => {
  // Mount layout frames once
  document.getElementById('header-mount').innerHTML = Header();
  document.getElementById('footer-mount').innerHTML = Footer();
  initHeader();

  document.body.addEventListener('click', (e) => {
    // Traverse parent nodes to check if click is on a link anchor
    let target = e.target;
    while (target && target.tagName !== 'A') {
      target = target.parentNode;
    }

    if (target && target.hasAttribute('data-link')) {
      e.preventDefault();
      navigateTo(target.pathname);
    } else if (target && target.pathname && target.hostname === window.location.hostname && !target.hasAttribute('download')) {
      // Auto routing for internal links
      e.preventDefault();
      navigateTo(target.pathname);
    }
  });

  router();
});
