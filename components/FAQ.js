function FAQ() {
  const FAQ = document.getElementById("FAQ");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body" data-aos="fade-up">
        <h2 class='title fw-bold'>Perguntas Frequentes</h2>
        <p>Estas são as perguntas que mais ouvimos dos nossos clientes.</p>
      </div>
  <div class="accordion mt-5" id="accordionExample" data-aos="fade-up" data-aos-delay="100">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Quanto tempo demora um projecto?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                O prazo varia consoante a complexidade do projecto. Um
                website institucional ou app simples pode ficar pronto em
                poucas semanas, enquanto sistemas completos com múltiplas
                integrações podem levar alguns meses. Definimos sempre um
                cronograma claro antes de começar.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Como funciona o pagamento/orçamento?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Cada projecto tem um orçamento personalizado, calculado com
                base na complexidade, nas funcionalidades e no prazo
                pretendido. Entre em contacto connosco e enviamos uma
                proposta detalhada sem compromisso.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Trabalham só com o sector público ou também privado?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Trabalhamos com ambos. Já desenvolvemos sistemas para
                empresas municipais de transporte, clínicas privadas,
                imobiliárias e comércio — adaptando cada solução à realidade
                do cliente.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Fazem manutenção e suporte depois de entregar o sistema?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Sim. Todos os nossos pacotes incluem suporte após o
                lançamento, e oferecemos planos de manutenção contínua para
                actualizações, correcções e melhorias futuras.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                É possível integrar pagamentos móveis nos sistemas?
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Sim, temos experiência em integrar pagamentos móveis
                directamente em apps, sistemas web e plataformas de gestão,
                tornando o processo mais rápido e conveniente para os
                utilizadores finais.
              </div>
            </div>
          </div>
        </div>
  `;
  FAQ.appendChild(Container);
}
FAQ();
