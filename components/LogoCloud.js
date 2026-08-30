function LogoCloud() {
  const LogoCloud1 = document.getElementById("LogoCloud1");
  const LogoCloud2 = document.getElementById("LogoCloud2");
  const Container1 = document.createElement("div");
  const Container2 = document.createElement("div");
  Container1.classList.add("container", "border-top", "border-bottom", "py-4");
  Container2.classList.add("container");
  Container1.innerHTML = `
  <div
          class="row row-cols-2 row-cols-md-4 row-cols-lg-6 gy-5 justify-content-center"
        >
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Client-logo-01.svg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Client-logo-02.svg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Client-logo-03.svg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Client-logo-04.svg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Client-logo-05.svg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Client-logo-06.svg" alt="ClientLogo" srcset="" />
          </div>
        </div>
  `;
  Container2.innerHTML = `
  <div class="row row-cols-1 row-cols-md-2 gy-5 gx-5">
          <div class="text-body col" data-aos="fade-up">
            <h2 class="title fw-bold">A tecnologia por trás das nossas soluções</h2>
            <p class="Description mt-2">
              Escolhemos ferramentas modernas e robustas para garantir
              sistemas rápidos, seguros e sempre disponíveis.
            </p>
          </div>
          <div class="content col">
            <div class="row row-cols-1 row-cols-md-2 gy-4 gx-4">
              <div class="content-item d-flex align-items-center col" data-aos="fade-up" data-aos-delay="0">
                <div class="icon">
                  <img src="./Images/Base-feature-icon-1.svg" alt="" />
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">Apps nativas</div>
                  <div class="Description">Para Android e iOS, com óptimo desempenho.</div>
                </div>
              </div>
              <div class="content-item d-flex align-items-center col" data-aos="fade-up" data-aos-delay="100">
                <div class="icon">
                  <img src="./Images/Base-feature-icon-3.svg" alt="" />
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">Dados protegidos</div>
                  <div class="Description">Informação segura e sempre disponível.</div>
                </div>
              </div>
              <div class="content-item d-flex align-items-center col" data-aos="fade-up" data-aos-delay="200">
                <div class="icon">
                  <img src="./Images/Base-feature-icon-8.svg" alt="" />
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">Suporte contínuo</div>
                  <div class="Description">Actualizações e manutenção constante.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
  LogoCloud1.appendChild(Container1);
  LogoCloud2.appendChild(Container2);
}
LogoCloud();
