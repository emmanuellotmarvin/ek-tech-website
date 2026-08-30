function Career() {
  const Career = document.getElementById("Careers");
  const Container = document.createElement("div");
  Container.classList.add("container", "py-5");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 gy-5 align-items-center">
    <div class="col text-body" data-aos="fade-up">
      <h2 class="title fw-bold">Tem um projecto em mente? Fale connosco</h2>
      <p class="mt-2">
        Da ideia ao sistema pronto a usar — a nossa equipa está disponível
        para perceber a sua necessidade e propor a melhor solução para o
        seu negócio.
      </p>
      <a class="button btn-theme-default mt-3" href="tel:851903771"> Falar connosco </a>
    </div>
    <div class="col container-body">
      <img
        class="img-fluid"
        src="./Images/career-illustration.png"
        alt=""
      />
    </div>
  </div>
    `;
  Career.appendChild(Container);
}
Career();
