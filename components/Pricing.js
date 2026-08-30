function Pricing() {
  const Pricing = document.getElementById("Pricing");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body d-flex flex-column align-items-center" data-aos="fade-up">
          <h2 class="text-center fw-bold">Pacotes de Serviço</h2>
          <p class="text-center">
            Cada projecto é único. Escolha o nível que melhor se adapta à
            sua necessidade e peça um orçamento personalizado.
          </p>
        </div>
        <div class="row mt-5">
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="0">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">Básico</div>
              <div class="price">
                Sob consulta
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>Website institucional ou app simples</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Design responsivo</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Suporte inicial incluído</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Prazo de entrega reduzido</span>
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="tel:851903771" class="button btn-theme-1">Pedir orçamento</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table -->
          <div class="pricing-table position-relative tagged col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100">
            <div class="inner-box overflow-hidden position-relative">
              <span class="tag bg-primary-300">Recomendado</span>
              <div class="title">Standard</div>
              <div class="price">
                Sob consulta
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>Sistema web ou app completo</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Painel de gestão administrativo</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Integração de pagamentos móveis</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Suporte e manutenção contínua</span>
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="tel:851903771" class="button btn-theme-1">Pedir orçamento</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="200">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">Personalizado</div>
              <div class="price">
                Sob consulta
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>Sistemas complexos e integrados</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Múltiplas plataformas (web + mobile)</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Integrações com hardware/terceiros</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Acompanhamento dedicado</span>
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="tel:851903771" class="button btn-theme-1">Pedir orçamento</a>
              </div>
            </div>
          </div>
        </div>
  `;
  Pricing.appendChild(Container);
}
Pricing();
