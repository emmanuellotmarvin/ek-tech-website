function Metrics() {
  const Metrics = document.getElementById("Metric");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-lg-2 gy-5 gx-5">
          <div class="text-body col" data-aos="fade-up">
            <h2 class="fw-bold">Quem somos</h2>
            <p class="Description mt-2">
              A EK TECH é uma empresa moçambicana de desenvolvimento de
              software sediada em Nampula. Especializamo-nos em sistemas de
              gestão para o sector público e privado, com integração nativa
              de pagamentos móveis, adaptados à realidade do mercado
              moçambicano.
            </p>
          </div>
          <div class="content col">
            <div class="row row-cols-1 row-cols-md-3 gy-4 gx-4">
              <div class="content-item d-flex align-items-center col" data-aos="fade-up" data-aos-delay="0">
                <div class="icon">
                  <img src="./Images/Base-feature-icon-1.svg" alt="" />
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">3+</div>
                  <div class="Description">Anos de experiência</div>
                </div>
              </div>
              <div class="content-item d-flex align-items-center col" data-aos="fade-up" data-aos-delay="100">
                <div class="icon">
                  <img src="./Images/Base-feature-icon-7.svg" alt="" />
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">5+</div>
                  <div class="Description">Sistemas entregues</div>
                </div>
              </div>
              <div class="content-item d-flex align-items-center col" data-aos="fade-up" data-aos-delay="200">
                <div class="icon">
                  <img src="./Images/Base-feature-icon-2.svg" alt="" />
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">100%</div>
                  <div class="Description">Foco no mercado local</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
  Metrics.appendChild(Container);
}
Metrics();
