function Testimonial() {
  const Testimonial = document.getElementById("Testimonial");
  const Container = document.createElement("div");
  Container.classList.add("container", "position-relative");
  Container.innerHTML = `
  <div
          class="testimonial-items row row-cols-1 row-cols-lg-2 gx-5 align-items-center position-relative"
        >
          <div class="text-body position-absolute" data-aos="fade-up">
            <div class="quote-mark position-absolute">
              <img src="./Images/Quote mark.png" alt="" srcset="" />
            </div>
            <h2 class="title fw-bold">A nossa melhor referência: os nossos clientes</h1>
            <p>Testemunhos de quem confiou na EK TECH.</p>
          </div>
          <div class="col" data-aos="fade-up" data-aos-delay="100">
            <div class="testimonial-item bg-white rounded item-1">
              <div class="client-logo client-logo-lg">
                <img class="logo-lg" src="./Images/Agrovet-logo.png" alt="Agrovet e Serviços" srcset="" />
              </div>
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                    A EK TECH desenvolveu um aplicativo de deteção de pragas
                    por imagem que já está a mudar a forma como acompanhamos
                    as nossas plantações. A precisão do modelo de IA e o
                    cuidado da equipa em perceber a realidade do campo fizeram
                    toda a diferença.
                  </p>
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold"> Noémia Celestino </span>
                    <span class="per-role"> Fundadora, Agrovet e Serviços </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-4" data-aos="fade-up" data-aos-delay="200">
            <div class="testimonial-item bg-white rounded">
              <div class="client-logo">
                <img src="./Images/Namutequelua-logo.png" alt="Namutequelua Comercial" srcset="" />
              </div>
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                    Precisávamos de um sistema completo para controlar o
                    stock, os movimentos de armazém e a gestão de vales dos
                    colaboradores. A EK TECH entregou uma solução robusta e
                    fácil de usar, que hoje é essencial no nosso dia-a-dia.
                  </p>
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold">Virgílio Mukhtar</span>
                    <span class="per-role">Fundador, Namutequelua Comercial</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="testimonial-item bg-white rounded mt-4">
              <div class="client-logo client-logo-lg">
                <img class="logo-lg" src="./Images/Aura-Imobiliaria-logo.png" alt="Aura Imobiliária" srcset="" />
              </div>
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                    O CRM desenvolvido pela EK TECH organizou por completo a
                    gestão dos nossos clientes e imóveis. O suporte durante e
                    depois da implementação foi excelente.
                  </p>
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold">Abdul Cadre Pedro</span>
                    <span class="per-role">Técnico, Aura Imobiliária</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
  Testimonial.appendChild(Container);
}
Testimonial();
