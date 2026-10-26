// Portuguese texts (default language). en.ts must have exactly the same keys.

const pt = {
  meta: {
    title: 'EK Tech',
    description: 'A EK Tech desenvolve aplicações móveis, plataformas SaaS e websites à medida para empresas em Moçambique.',
    keywords: ['desenvolvimento de software', 'aplicações móveis', 'plataformas SaaS', 'websites', 'Moçambique', 'Nampula', 'EK Tech'],
    pages: {
      home: 'Início',
      about: 'Sobre nós',
      contact: 'Contacto',
      pricing: 'Preços',
    },
  },

  navbar: {
    items: [
      { label: 'Serviços', href: '/home#servicos' },
      { label: 'Projectos', href: '/home#projectos' },
      { label: 'Testemunhos', href: '/home#testemunhos' },
      { label: 'Comece aqui', href: '/home#comece-aqui' },
    ],
    languages: { pt: 'Português', en: 'English' },
    languageButton: 'Mudar de língua',
    theme: { light: 'Mudar para tema claro', dark: 'Mudar para tema escuro' },
    openMenu: 'Abrir menu',
  },

  footer: {
    newsletterTitle: 'Fique a par das novidades',
    newsletterText: 'Sem spam. Apenas novidades e dicas simples para o seu negócio.',
    emailPlaceholder: 'Introduza o seu email',
    subscribe: 'Subscrever',
    quickLinksTitle: 'Navegação rápida',
    quickLinks: [
      { label: 'Serviços', link: '/home#servicos' },
      { label: 'Projectos', link: '/home#projectos' },
      { label: 'Testemunhos', link: '/home#testemunhos' },
      { label: 'Comece aqui', link: '/home#comece-aqui' },
    ],
    otherLinksTitle: 'Outros links',
    otherLinks: [
      { label: 'Sobre nós', link: '/about' },
      { label: 'Preços', link: '/pricing' },
      { label: 'Contacto', link: '/contact' },
    ],
  },

  cta: {
    title: 'Tem um projecto em mente?',
    text: 'Fale connosco. Marcamos uma consultoria e ajudamos a transformar a sua ideia num plano claro.',
    quoteButton: 'Pedir orçamento',
    whatsappButton: 'Falar no WhatsApp',
    devicesTitle: 'Funciona no aparelho que já usa',
    devicesText: 'Telemóvel Android, iPhone ou computador: os seus clientes e a sua equipa usam a solução onde for mais prático.',
    devices: { android: 'Android', iphone: 'iPhone', computer: 'Computador' },
  },

  faq: {
    badge: 'Dúvidas comuns',
    title: 'Perguntas frequentes',
    notFoundTitle: 'Não encontrou a sua resposta?',
    contactButton: 'Fale connosco',
    items: [
      {
        question: 'Quanto tempo demora um projecto?',
        answer: 'O prazo varia consoante a complexidade do projecto. Um website institucional ou app simples pode ficar pronto em poucas semanas, enquanto sistemas completos com múltiplas integrações podem levar alguns meses. Definimos sempre um cronograma claro antes de começar.',
      },
      {
        question: 'Como funciona o pagamento/orçamento?',
        answer: 'Cada projecto tem um orçamento personalizado, calculado com base na complexidade, nas funcionalidades e no prazo pretendido. Entre em contacto connosco e enviamos uma proposta detalhada sem compromisso.',
      },
      {
        question: 'Trabalham só com o sector público ou também privado?',
        answer: 'Trabalhamos com ambos. Já desenvolvemos soluções para agricultura, comércio e imobiliárias, e adaptamos cada projecto à realidade do cliente, seja uma empresa privada ou uma instituição pública.',
      },
      {
        question: 'Fazem manutenção e suporte depois de entregar o sistema?',
        answer: 'Sim. Todos os nossos pacotes incluem suporte após o lançamento, e oferecemos planos de manutenção contínua para actualizações, correcções e melhorias futuras.',
      },
      {
        question: 'É possível integrar pagamentos móveis nos sistemas?',
        answer: 'Sim, temos experiência em integrar pagamentos móveis directamente em apps, sistemas web e plataformas de gestão, tornando o processo mais rápido e conveniente para os utilizadores finais.',
      },
    ],
  },

  pageHero: {
    you: 'Você?',
    trustText: 'Parceiros em Moçambique',
    partnersTitle: 'Empresas que confiam na EK Tech',
  },

  about: {
    hero: {
      badge: 'Sobre a EK Tech',
      title: 'Software simples para negócios reais',
      button: 'Fale connosco',
    },
    mission: {
      title: 'A EK Tech nasceu em Nampula, em 2026, com uma ideia simples: ajudar empresas moçambicanas a usar tecnologia sem complicações.',
      text: 'Desenvolvemos apps, plataformas SaaS e websites à medida, com comunicação directa, prazos claros e suporte depois do lançamento.',
      values: [
        { title: 'Simplicidade', description: 'Soluções fáceis de usar e de manter.' },
        { title: 'Proximidade', description: 'Fala directamente com quem desenvolve o seu projecto.' },
        { title: 'Transparência', description: 'Prazos e orçamento claros, por escrito.' },
        { title: 'Compromisso', description: 'Continuamos presentes depois do lançamento.' },
      ],
    },
    purpose: {
      badge: 'Porque existimos',
      title: 'Muitas empresas ainda gerem tudo em papel e Excel',
      text: 'Processos manuais fazem perder tempo, informação e clientes. A EK Tech existe para trocar isso por sistemas simples, feitos à medida de cada negócio.',
      points: ['Informação espalhada em papéis e folhas de cálculo', 'Sistemas genéricos que não se adaptam ao negócio', 'Falta de apoio depois da entrega'],
      button: 'Ver serviços',
    },
    stats: {
      badge: 'EK Tech em números',
      titleLine1: 'Um começo',
      titleLine2: 'sólido',
      items: [
        { title: 'Ano de fundação', description: 'A EK Tech nasceu em Nampula.' },
        { title: 'Projectos entregues', description: 'Agricultura, comércio e imobiliário.' },
        { title: 'Parceiros', description: 'Empresas que já confiaram em nós.' },
      ],
      highlight: 'Nampula',
      highlightLabel: 'Onde tudo começou',
    },
  },

  contact: {
    form: {
      badge: 'Contacto',
      title: 'Vamos conversar',
      text: 'Conte-nos sobre o seu projecto ou tire as suas dúvidas. Respondemos o mais rápido possível.',
      labels: { name: 'Nome*', phone: 'Telefone / WhatsApp', email: 'Email*', message: 'Mensagem' },
      placeholders: { name: 'O seu nome', phone: '84 000 0000', email: 'nome@empresa.co.mz', message: 'Descreva a sua ideia ou o que precisa' },
      submit: 'Enviar mensagem',
      sending: 'A enviar...',
      sentTitle: 'Mensagem enviada',
      sentText: 'Obrigado pelo contacto{name}. Vamos responder para o email ou telefone que indicou.',
      sentWhatsappHint: 'Se preferir, pode continuar a conversa pelo WhatsApp.',
      continueOnWhatsapp: 'Continuar no WhatsApp',
      sendAnother: 'Enviar outra mensagem',
      whatsappAfterSent: 'Olá, sou {name} e acabei de enviar uma mensagem pelo site da EK Tech.',
      whatsappFallbackName: 'um cliente',
      errorText: 'Não foi possível enviar a mensagem.',
      errorWhatsapp: 'Fale connosco pelo WhatsApp',
      errorOr: 'ou escreva para',
      whatsappDefault: 'Olá, quero falar com a EK Tech sobre um projecto.',
    },
    reachUs: {
      title: 'Fale connosco directamente',
      email: 'Email',
      phone: 'Telefone / WhatsApp',
      location: 'Localização',
      locationValue: 'Nampula, Moçambique',
    },
  },

  pricing: {
    hero: {
      badge: 'Preços',
      title: 'Sistemas prontos a usar',
      text: 'Já temos sistemas em funcionamento para escolas, clínicas e empresas. Escolha o plano certo para a sua instituição e comece a usar sem esperar meses por um sistema novo.',
      button: 'Ver planos',
    },
    plans: {
      badge: 'Planos',
      title: 'Escolha o sistema e o plano',
      systemsLabel: 'Sistemas',
      monthly: 'Mensal',
      yearly: 'Anual',
      yearlyToggleLabel: 'Mostrar preços anuais',
      yearlyNote: 'No plano anual paga {paid} meses e tem 12',
      perMonth: 'mês',
      perYear: 'ano',
      equivalent: 'Equivale a {price}/mês',
      setupFee: '+ {price} de implementação (pagamento único)',
      onRequest: 'Sob consulta',
      featured: 'Mais escolhido',
      choosePlan: 'Escolher plano',
      enterprise: 'Empresarial',
      talkToUs: 'Falar connosco',
      compareTitle: 'Comparar planos: {system}',
      featuresColumn: 'Funcionalidades',
      included: 'Incluído',
      notIncluded: 'Não incluído',
    },
    faq: {
      badge: 'Dúvidas comuns',
      title: 'Perguntas frequentes',
      items: [
        {
          question: 'Os sistemas já estão prontos a usar?',
          answer: 'Sim. Os sistemas de gestão escolar, clínicas e gestão empresarial já estão em funcionamento. Configuramos o sistema para a sua instituição e ajudamos a equipa a dar os primeiros passos.',
        },
        {
          question: 'Posso adaptar o sistema às necessidades da minha empresa?',
          answer: 'Sim. Além dos planos, podemos desenvolver funcionalidades à medida. Fale connosco e preparamos uma proposta.',
        },
        {
          question: 'Posso mudar de plano mais tarde?',
          answer: 'Sim. Pode começar com um plano e passar para outro à medida que a sua instituição cresce.',
        },
        {
          question: 'Qual é a diferença entre o pagamento mensal e anual?',
          answer: 'As funcionalidades são as mesmas. Muda apenas a forma de pagamento, e as condições são definidas na proposta.',
        },
        {
          question: 'Os meus dados ficam seguros?',
          answer: 'Sim. O acesso é protegido por utilizador e palavra-passe, e cada instituição só tem acesso aos seus próprios dados.',
        },
      ],
    },
  },

  home: {
    hero: {
      badge: 'Apps, SaaS e Websites',
      titleLine1: 'Transformamos ideias',
      titleLine2: 'em produtos digitais',
      text: 'Tem uma ideia ou um processo para digitalizar? Nós desenhamos, desenvolvemos e mantemos a solução.',
      quoteButton: 'Pedir orçamento',
      projectsButton: 'Ver projectos',
    },

    about: {
      titleStart: 'Desenvolvemos',
      titleMiddle: 'soluções digitais simples de usar,',
      titleBeforeIcon: 'fáceis de manter',
      titleEnd: 'e preparadas para crescer com o seu negócio.',
      subtitle: 'Feito para diferentes sectores.',
      hashtags: ['#Comércio', '#Saúde', '#Educação', '#Logística'],
      marqueeLabels: ['Loja online', 'App de entregas', 'Sistema de gestão', 'Website institucional', 'Agendamentos', 'Facturação', 'Pagamentos móveis', 'Painel de relatórios'],
      badge: 'Orçamento sem compromisso',
      text: 'Começamos por entender o seu negócio. Depois desenhamos, desenvolvemos e acompanhamos a solução, com prazos claros e suporte próximo.',
      quoteButton: 'Pedir orçamento',
      whatsappButton: 'Falar no WhatsApp',
    },

    services: {
      badge: 'Os nossos serviços',
      title: 'Soluções digitais do início ao fim.',
      text: 'Desenvolvemos aplicações móveis, plataformas SaaS e websites, e continuamos a acompanhar cada projecto depois do lançamento.',
      mobile: {
        title: 'Aplicações móveis',
        text: 'Apps para Android e iOS, simples de usar, para os seus clientes ou para a sua equipa.',
        features: ['Android', 'iOS', 'Pagamentos móveis', 'Notificações', 'Mapas e localização', 'Login seguro', 'Funciona offline'],
      },
      websites: {
        title: 'Websites',
        text: 'Websites rápidos, fáceis de gerir e preparados para aparecer no Google. Sabe sempre em que fase está o seu projecto.',
        planTitle: 'Website institucional',
        planSubtitle: 'Plano do projecto',
        progressLabel: 'Concluído',
        weekLabel: 'Sem.',
        steps: [
          { label: 'Requisitos', status: 'Concluído' },
          { label: 'Design', status: 'Concluído' },
          { label: 'Desenvolvimento', status: 'Em curso' },
          { label: 'Lançamento', status: 'Previsto' },
        ],
      },
      saas: {
        title: 'Plataformas SaaS e sistemas à medida',
        text: 'Sistemas web para gerir vendas, stock, clientes ou agendamentos, acessíveis a partir de qualquer lugar.',
        button: 'Pedir orçamento',
        note: '*Cada sistema é feito à medida do processo da sua empresa.',
      },
      support: {
        title: 'Manutenção e suporte',
        text: 'Depois do lançamento, continuamos ao seu lado com actualizações, correcções e melhorias.',
        reportTitle: 'Exemplo de relatório mensal',
        metrics: ['Velocidade', 'Segurança', 'SEO'],
        updatesTitleLine1: 'Actualizações',
        updatesTitleLine2: 'aplicadas',
        updatesFooter: '3 melhorias de segurança',
        ticketsTitle: 'Pedidos de suporte resolvidos',
        ticketsFooter: 'Todos dentro do prazo',
      },
      followUp: {
        title: 'Acompanhamento próximo',
        text: 'Recebe actualizações regulares e fala directamente com quem desenvolve o seu projecto.',
      },
    },

    projects: {
      badge: 'Projectos',
      titleLine1: 'Alguns dos projectos',
      titleLine2: 'que já desenvolvemos',
      items: [
        {
          name: 'AgroVet Institutional',
          description: 'Plataforma para instituições agrícolas gerirem projectos, beneficiários e técnicos, com diagnóstico de pragas por IA e mapa fitossanitário.',
          type: 'SaaS',
          typeLabel: 'Plataforma SaaS',
        },
        {
          name: 'Namutequeliua Comercial',
          description: 'Sistema de gestão de armazém que controla entradas e saídas de stock, vales, assiduidade dos funcionários e tarefas da equipa, tudo num só lugar.',
          type: 'SaaS',
          typeLabel: 'Plataforma SaaS',
        },
        {
          name: 'CRM Imobiliário',
          description: 'Plataforma CRM para uma imobiliária gerir imóveis, clientes e contactos, acompanhar visitas e negociações, e organizar o trabalho da equipa comercial.',
          type: 'Web',
          typeLabel: 'Plataforma web',
        },
      ],
      alsoTitle: 'Também desenvolvemos',
      hashtags: ['#lojas online', '#sistemas de gestão', '#apps de entregas', '#websites institucionais', '#agendamentos', '#facturação'],
    },

    partners: {
      badge: 'Testemunhos',
      title: 'Conheça os parceiros que já confiaram na EK Tech',
      you: 'Você?',
      trustText: 'Parceiros em Moçambique',
      projectLabel: 'Projecto',
      items: [
        { sector: 'Agricultura', city: 'Malema', name: 'Agrovet e Serviços', project: 'AgroVet Institutional' },
        { sector: 'Armazém', city: 'Nampula', name: 'Namutequeliua Comercial', project: 'Namutequeliua Comercial' },
        { sector: 'Imobiliária', city: 'Nampula', name: 'Aura Imobiliária', project: 'CRM Imobiliário' },
      ],
    },

    testimonials: [
      {
        quote: 'A EK TECH desenvolveu um aplicativo de deteção de pragas por imagem que já está a mudar a forma como acompanhamos as nossas plantações. A precisão do modelo de IA e o cuidado da equipa em perceber a realidade do campo fizeram toda a diferença.',
        name: 'Noémia Celestino',
        role: 'Fundadora, Agrovet e Serviços',
      },
      {
        quote: 'Precisávamos de um sistema completo para controlar o stock, os movimentos de armazém e a gestão de vales dos colaboradores. A EK TECH entregou uma solução robusta e fácil de usar, que hoje é essencial no nosso dia-a-dia.',
        name: 'Virgílio Mukhtar',
        role: 'Fundador, Namutequeliua Comercial',
      },
      {
        quote: 'O CRM desenvolvido pela EK TECH organizou por completo a gestão dos nossos clientes e imóveis. O suporte durante e depois da implementação foi excelente.',
        name: 'Abdul Cadre Pedro',
        role: 'Técnico, Aura Imobiliária',
      },
    ],

    process: {
      badge: 'Do zero ao lançamento',
      titleLine1: 'Antes do código,',
      titleLine2: 'entendemos o seu negócio',
      text: 'Todo o projecto, seja uma app, um website ou uma plataforma SaaS, começa com uma consultoria. Ouvimos a sua ideia e analisamos o seu processo. A consultoria tem um custo acessível e, no fim, fica com um plano claro do que deve ser construído, com funcionalidades, prazos e orçamento.',
      button: 'Marcar uma consultoria',
      steps: [
        { title: '1. Consultoria', text: 'Uma sessão a um valor acessível para ouvir a sua ideia e entender o seu negócio.' },
        { title: '2. Planeamento', text: 'Definimos funcionalidades, prazos e orçamento, por escrito.' },
        { title: '3. Desenvolvimento', text: 'Desenhamos e construímos a solução, com entregas por fases.' },
        { title: '4. Lançamento', text: 'Publicamos a solução e continuamos a dar suporte.' },
      ],
    },
  },
}

export type Dictionary = typeof pt

export default pt
