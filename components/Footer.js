function Footer() {
  const Footer = document.getElementById("Footer");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row gx-4 gy-5">
          <div class="col-12 col-md-6 left-section">
            <div class="brand-logo">
              <a class="navbar-brand fw-bold text-white fs-4" href="#Herosection">EK TECH</a>
            </div>
            <div class="copyrights mt-4">
              © 2026 EK TECH, SU, LDA. Todos os direitos reservados.
            </div>
          </div>
          <div class="col-6 col-md-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#Herosection">Início</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Metric">Sobre</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Features">Serviços</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#CTA">Portfólio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Careers">Contacto</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-3">
            <ul class="nav flex-column">
              <li class="nav-item d-flex align-items-center">
                <i class="bi bi-geo-alt-fill me-2"></i> Nampula, Moçambique
              </li>
              <li class="nav-item d-flex align-items-center mt-2">
                <i class="bi bi-telephone-fill me-2"></i>
                <a class="nav-link p-0" href="tel:851903771">851903771</a>
              </li>
              <li class="nav-item d-flex align-items-center mt-2">
                <i class="bi bi-globe2 me-2"></i>
                <a
                  class="nav-link p-0"
                  href="https://emmanuelmarvin.com"
                  target="_blank"
                  rel="noopener"
                  >emmanuelmarvin.com</a
                >
              </li>
            </ul>
          </div>
        </div>
  `;
  Footer.appendChild(Container);
}
Footer();
