export function Footer() {
  const currentYear = new Date().getFullYear();
  return `
    <footer class="app-footer">
      <div class="container footer-container">
        <div class="footer-grid">
          <div class="footer-brand">
            <span class="logo-pmi">PMI</span>
            <span class="logo-sub">Montagens Industriais</span>
            <p class="footer-desc">
              Excelência em implantação, ampliação, modernização, manutenção e montagem industrial em todo o território nacional.
            </p>
          </div>
          <div class="footer-links-section">
            <h4>Navegação</h4>
            <ul class="footer-links">
              <li><a href="/" data-link>Home</a></li>
              <li><a href="/empresa" data-link>Empresa</a></li>
              <li><a href="/area-de-atuacao" data-link>Área de Atuação</a></li>
              <li><a href="/projetos" data-link>Projetos</a></li>
              <li><a href="/trabalhe-conosco" data-link>Trabalhe Conosco</a></li>
              <li><a href="/contatos" data-link>Contatos</a></li>
            </ul>
          </div>
          <div class="footer-contact">
            <h4>Contatos</h4>
            <p><strong>Endereço:</strong> Av. Alfredo Bandeira de Melo, N° 142, Loja E, Igarassu - PE</p>
            <p><strong>Telefone:</strong> +55 (81) 3545-4795</p>
            <p><strong>Email:</strong> comercial@pmi.srv.br</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="copyright">
            &copy; ${currentYear} PMI Montagens Industriais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  `;
}
