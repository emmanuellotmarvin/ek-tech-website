function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container");
  BG.classList.add("hero-bg");
  Container.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              <h1 class=" fw-bold" data-aos="fade-up">
                Menos papel. Mais controlo.
              </h1>
              <p class="mt-3" data-aos="fade-up" data-aos-delay="100">
                Desenvolvemos sistemas digitais adaptados ao contexto moçambicano — pagamentos móveis, gestão pública e soluções mobile-first para Android e iOS.
              </p>
            </div>
            <div class="btns-group mt-3" data-aos="fade-up" data-aos-delay="200">
              <a class="button btn-theme-default" href="#">Ver os nossos serviços</a>
              <a class="button btn-theme-2" href="#"
                ><i class="bi bi-play-circle me-2"></i> Falar connosco</a
              >
            </div>
          </div>
          <div
            class="mockup-img col-12 col-lg-5 overflow-hidden d-flex justify-content-center"
          >
            <div id="heroLottie" class="hero-lottie"></div>
          </div>
        </div>
        
  `;
  BG.innerHTML = `
        <img class="band left-bands" src="./Images/left-bands.svg"></img>
        <img class="band right-bands" src="./Images/right-bands.svg"></img>
       <div class="bg"></div>
        <img class="purple-circle" src="./Images/Purple Circle.svg"></img>
  `;
  Herosection.appendChild(Container);
  Herosection.appendChild(BG);

  lottie.loadAnimation({
    container: document.getElementById("heroLottie"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: heroAnimationData,
  });
}
Herosection();
