function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div
  class="text-body text-center d-flex flex-column align-items-center"
  data-aos="fade-up"
>
  <h2 class="title fw-bold">Serviços</h2>
  <p class="">
    Do conceito ao lançamento, desenvolvemos a solução certa para o seu
    negócio.
  </p>
</div>
<div
  class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-4"
>
  <div class="col d-flex flex-column justify-content-center pt-5" data-aos="fade-up" data-aos-delay="0">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-3.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Desenvolvimento de Apps</div>
      <div class="description text-center">
        Aplicações móveis nativas para Android e iOS, desenhadas para o
        utilizador moçambicano.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5" data-aos="fade-up" data-aos-delay="100">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-5.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Websites Corporativos</div>
      <div class="description text-center">
        Sites institucionais rápidos, responsivos e optimizados para
        apresentar a sua empresa.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5" data-aos="fade-up" data-aos-delay="200">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-8.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Sistemas Web</div>
      <div class="description text-center">
        Plataformas e painéis de gestão à medida do seu negócio,
        acessíveis a partir de qualquer lugar.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5" data-aos="fade-up" data-aos-delay="300">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-4.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Sistemas Completos</div>
      <div class="description text-center">
        Soluções integradas de raiz — apps, web e pagamentos móveis num
        único sistema.
      </div>
    </div>
  </div>
</div>
    `;
  Features.appendChild(Container);
}
Features();
