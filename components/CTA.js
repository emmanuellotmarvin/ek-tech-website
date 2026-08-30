function CTA() {
  const CTA = document.getElementById("CTA");
  const Container = document.createElement("div");
  Container.innerHTML = `
  <div
    id="PortfolioCarousel"
    class="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="5000"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#PortfolioCarousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#PortfolioCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#PortfolioCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container">
          <div class="row row-cols-1 row-cols-lg-2 gx-5 align-items-center py-5">
            <div class="text-body col py-5">
              <h2 class="title fw-bold">Agrovet</h2>
              <p>
                O Agrovet transforma o telemóvel de qualquer agricultor num
                agrónomo de bolso: uma foto basta para diagnosticar a praga,
                saber como tratá-la e comprar o produto certo, com pagamento
                por carteiras móveis. Menos perdas na colheita, mais vendas
                para os agro-dealers parceiros.
              </p>
            </div>
            <div class="col container-body overflow-hidden">
              <img class="img-fluid" src="./Images/mockup-avs.png" alt="Agrovet" />
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row row-cols-1 row-cols-lg-2 gx-5 align-items-center py-5">
            <div class="text-body col py-5">
              <h2 class="title fw-bold">SAE</h2>
              <p>
                O SAE — Sistema de Aprendizagem e Ensino — é uma plataforma
                educativa que dá aos estudantes acesso a livros digitais, um
                dos principais desafios do ensino em Moçambique, além de
                quizzes, exames e um fórum de discussão para mais inclusão no
                processo de aprendizagem. Pensado para escalar através de
                parcerias estratégicas no sector da educação.
              </p>
            </div>
            <div class="col container-body overflow-hidden">
              <img class="img-fluid" src="./Images/mockup-sae.png" alt="SAE" />
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row row-cols-1 row-cols-lg-2 gx-5 align-items-center py-5">
            <div class="text-body col py-5">
              <h2 class="title fw-bold">Namutequelua Comercial</h2>
              <p>
                Sistema completo de gestão de armazém para a Namutequelua
                Comercial, disponível em web, iOS e Android. Controlo de
                stock e movimentos em tempo real, gestão de tarefas da equipa
                e módulo de RH, tudo numa só plataforma acessível de
                qualquer lugar.
              </p>
            </div>
            <div class="col container-body overflow-hidden">
              <img class="img-fluid" src="./Images/mockup-NC.png" alt="Namutequelua Comercial" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  CTA.appendChild(Container);
}
CTA();
