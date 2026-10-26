import type { Dictionary } from './pt'

// English texts. Must have exactly the same keys as pt.ts.
// Links stay without the /en prefix; it is added automatically.

const en: Dictionary = {
  meta: {
    title: 'EK Tech',
    description: 'EK Tech builds custom mobile apps, SaaS platforms and websites for businesses in Mozambique.',
    keywords: ['software development', 'mobile apps', 'SaaS platforms', 'websites', 'Mozambique', 'Nampula', 'EK Tech'],
    pages: {
      home: 'Home',
      about: 'About us',
      contact: 'Contact',
      pricing: 'Pricing',
    },
  },

  navbar: {
    items: [
      { label: 'Services', href: '/home#servicos' },
      { label: 'Projects', href: '/home#projectos' },
      { label: 'Testimonials', href: '/home#testemunhos' },
      { label: 'Get started', href: '/home#comece-aqui' },
    ],
    languages: { pt: 'Português', en: 'English' },
    languageButton: 'Change language',
    theme: { light: 'Switch to light theme', dark: 'Switch to dark theme' },
    openMenu: 'Open menu',
  },

  footer: {
    newsletterTitle: 'Stay up to date',
    newsletterText: 'No spam. Just news and simple tips for your business.',
    emailPlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
    quickLinksTitle: 'Quick links',
    quickLinks: [
      { label: 'Services', link: '/home#servicos' },
      { label: 'Projects', link: '/home#projectos' },
      { label: 'Testimonials', link: '/home#testemunhos' },
      { label: 'Get started', link: '/home#comece-aqui' },
    ],
    otherLinksTitle: 'Other links',
    otherLinks: [
      { label: 'About us', link: '/about' },
      { label: 'Pricing', link: '/pricing' },
      { label: 'Contact', link: '/contact' },
    ],
  },

  cta: {
    title: 'Have a project in mind?',
    text: 'Get in touch. We will book a consultation and help turn your idea into a clear plan.',
    quoteButton: 'Request a quote',
    whatsappButton: 'Chat on WhatsApp',
    devicesTitle: 'Works on the devices you already use',
    devicesText: 'Android phone, iPhone or computer: your customers and your team use the solution wherever it is most convenient.',
    devices: { android: 'Android', iphone: 'iPhone', computer: 'Computer' },
  },

  faq: {
    badge: 'Common questions',
    title: 'Frequently asked questions',
    notFoundTitle: "Can't find your answer?",
    contactButton: 'Contact us',
    items: [
      {
        question: 'How long does a project take?',
        answer: 'It depends on how complex the project is. A company website or a simple app can be ready in a few weeks, while complete systems with several integrations can take a few months. We always agree on a clear timeline before we start.',
      },
      {
        question: 'How do payment and quotes work?',
        answer: 'Each project gets its own quote, based on its complexity, features and deadline. Get in touch and we will send you a detailed proposal, with no obligation.',
      },
      {
        question: 'Do you only work with the public sector, or also with private companies?',
        answer: 'We work with both. We have already built solutions for agriculture, retail and real estate, and we adapt each project to the client, whether it is a private company or a public institution.',
      },
      {
        question: 'Do you provide maintenance and support after delivery?',
        answer: 'Yes. All our packages include support after launch, and we offer ongoing maintenance plans for updates, fixes and future improvements.',
      },
      {
        question: 'Can mobile payments be added to the systems?',
        answer: 'Yes. We have experience adding mobile payments directly to apps, web systems and management platforms, which makes paying faster and easier for end users.',
      },
    ],
  },

  pageHero: {
    you: 'You?',
    trustText: 'Partners in Mozambique',
    partnersTitle: 'Companies that trust EK Tech',
  },

  about: {
    hero: {
      badge: 'About EK Tech',
      title: 'Simple software for real businesses',
      button: 'Contact us',
    },
    mission: {
      title: 'EK Tech was founded in Nampula in 2026 with a simple idea: help Mozambican businesses use technology without the hassle.',
      text: 'We build custom apps, SaaS platforms and websites, with direct communication, clear deadlines and support after launch.',
      values: [
        { title: 'Simplicity', description: 'Solutions that are easy to use and maintain.' },
        { title: 'Closeness', description: 'You talk directly to the people building your project.' },
        { title: 'Transparency', description: 'Clear deadlines and budget, in writing.' },
        { title: 'Commitment', description: 'We stay with you after launch.' },
      ],
    },
    purpose: {
      badge: 'Why we exist',
      title: 'Many businesses still run everything on paper and Excel',
      text: 'Manual processes cost time, information and customers. EK Tech exists to replace them with simple systems, built around each business.',
      points: ['Information scattered across paper and spreadsheets', 'Generic systems that do not fit the business', 'No help after delivery'],
      button: 'See services',
    },
    stats: {
      badge: 'EK Tech in numbers',
      titleLine1: 'A solid',
      titleLine2: 'start',
      items: [
        { title: 'Year founded', description: 'EK Tech was born in Nampula.' },
        { title: 'Projects delivered', description: 'Agriculture, retail and real estate.' },
        { title: 'Partners', description: 'Companies that have already trusted us.' },
      ],
      highlight: 'Nampula',
      highlightLabel: 'Where it all began',
    },
  },

  contact: {
    form: {
      badge: 'Contact',
      title: "Let's talk",
      text: 'Tell us about your project or ask us anything. We reply as soon as we can.',
      labels: { name: 'Name*', phone: 'Phone / WhatsApp', email: 'Email*', message: 'Message' },
      placeholders: { name: 'Your name', phone: '84 000 0000', email: 'name@company.co.mz', message: 'Describe your idea or what you need' },
      submit: 'Send message',
      sending: 'Sending...',
      sentTitle: 'Message sent',
      sentText: 'Thank you for getting in touch{name}. We will reply to the email or phone number you gave us.',
      sentWhatsappHint: 'If you prefer, you can continue the conversation on WhatsApp.',
      continueOnWhatsapp: 'Continue on WhatsApp',
      sendAnother: 'Send another message',
      whatsappAfterSent: 'Hello, I am {name} and I have just sent a message through the EK Tech website.',
      whatsappFallbackName: 'a customer',
      errorText: 'We could not send your message.',
      errorWhatsapp: 'Talk to us on WhatsApp',
      errorOr: 'or write to',
      whatsappDefault: 'Hello, I would like to talk to EK Tech about a project.',
    },
    reachUs: {
      title: 'Talk to us directly',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      location: 'Location',
      locationValue: 'Nampula, Mozambique',
    },
  },

  pricing: {
    hero: {
      badge: 'Pricing',
      title: 'Ready-to-use systems',
      text: 'We already have systems running for schools, clinics and businesses. Choose the right plan for your organisation and start using it without waiting months for a new system.',
      button: 'See plans',
    },
    plans: {
      badge: 'Plans',
      title: 'Choose your system and plan',
      systemsLabel: 'Systems',
      monthly: 'Monthly',
      yearly: 'Yearly',
      yearlyToggleLabel: 'Show yearly prices',
      yearlyNote: 'On the yearly plan you pay {paid} months and get 12',
      perMonth: 'month',
      perYear: 'year',
      equivalent: 'Equal to {price}/month',
      setupFee: '+ {price} setup fee (one-time payment)',
      onRequest: 'On request',
      featured: 'Most popular',
      choosePlan: 'Choose plan',
      enterprise: 'Enterprise',
      talkToUs: 'Talk to us',
      compareTitle: 'Compare plans: {system}',
      featuresColumn: 'Features',
      included: 'Included',
      notIncluded: 'Not included',
    },
    faq: {
      badge: 'Common questions',
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Are the systems ready to use?',
          answer: 'Yes. The school, clinic and business management systems are already up and running. We set the system up for your organisation and help your team get started.',
        },
        {
          question: 'Can the system be adapted to my business?',
          answer: 'Yes. Beyond the plans, we can build custom features. Get in touch and we will prepare a proposal.',
        },
        {
          question: 'Can I change plans later?',
          answer: 'Yes. You can start with one plan and move to another as your organisation grows.',
        },
        {
          question: 'What is the difference between monthly and yearly payment?',
          answer: 'The features are the same. Only the way you pay changes, and the terms are set out in the proposal.',
        },
        {
          question: 'Is my data safe?',
          answer: 'Yes. Access is protected by username and password, and each organisation can only see its own data.',
        },
      ],
    },
  },

  home: {
    hero: {
      badge: 'Apps, SaaS and Websites',
      titleLine1: 'We turn ideas',
      titleLine2: 'into digital products',
      text: 'Have an idea or a process you want to go digital? We design, build and maintain the solution.',
      quoteButton: 'Request a quote',
      projectsButton: 'See projects',
    },

    about: {
      titleStart: 'We build',
      titleMiddle: 'digital solutions that are easy to use,',
      titleBeforeIcon: 'easy to maintain',
      titleEnd: 'and ready to grow with your business.',
      subtitle: 'Made for different sectors.',
      hashtags: ['#Retail', '#Health', '#Education', '#Logistics'],
      marqueeLabels: ['Online store', 'Delivery app', 'Management system', 'Company website', 'Bookings', 'Invoicing', 'Mobile payments', 'Reports dashboard'],
      badge: 'No-obligation quote',
      text: 'We start by understanding your business. Then we design, build and support the solution, with clear deadlines and close support.',
      quoteButton: 'Request a quote',
      whatsappButton: 'Chat on WhatsApp',
    },

    services: {
      badge: 'Our services',
      title: 'Digital solutions from start to finish.',
      text: 'We build mobile apps, SaaS platforms and websites, and we keep supporting every project after launch.',
      mobile: {
        title: 'Mobile apps',
        text: 'Android and iOS apps that are easy to use, for your customers or for your team.',
        features: ['Android', 'iOS', 'Mobile payments', 'Notifications', 'Maps and location', 'Secure login', 'Works offline'],
      },
      websites: {
        title: 'Websites',
        text: 'Fast websites that are easy to manage and ready to show up on Google. You always know what stage your project is at.',
        planTitle: 'Company website',
        planSubtitle: 'Project plan',
        progressLabel: 'Complete',
        weekLabel: 'Wk',
        steps: [
          { label: 'Requirements', status: 'Done' },
          { label: 'Design', status: 'Done' },
          { label: 'Development', status: 'In progress' },
          { label: 'Launch', status: 'Planned' },
        ],
      },
      saas: {
        title: 'SaaS platforms and custom systems',
        text: 'Web systems to manage sales, stock, customers or bookings, available from anywhere.',
        button: 'Request a quote',
        note: '*Every system is built around the way your company works.',
      },
      support: {
        title: 'Maintenance and support',
        text: 'After launch, we stay by your side with updates, fixes and improvements.',
        reportTitle: 'Sample monthly report',
        metrics: ['Speed', 'Security', 'SEO'],
        updatesTitleLine1: 'Updates',
        updatesTitleLine2: 'applied',
        updatesFooter: '3 security improvements',
        ticketsTitle: 'Support requests resolved',
        ticketsFooter: 'All on time',
      },
      followUp: {
        title: 'Close follow-up',
        text: 'You get regular updates and talk directly to the people building your project.',
      },
    },

    projects: {
      badge: 'Projects',
      titleLine1: 'Some of the projects',
      titleLine2: 'we have built',
      items: [
        {
          name: 'AgroVet Institutional',
          description: 'A platform for agricultural institutions to manage projects, beneficiaries and field technicians, with AI pest diagnosis and a plant health map.',
          type: 'SaaS',
          typeLabel: 'SaaS platform',
        },
        {
          name: 'Namutequeliua Comercial',
          description: 'A warehouse management system that tracks stock in and out, staff advances, attendance and team tasks, all in one place.',
          type: 'SaaS',
          typeLabel: 'SaaS platform',
        },
        {
          name: 'Real Estate CRM',
          description: 'A CRM platform for a real estate agency to manage properties, clients and contacts, follow up on viewings and deals, and organise the sales team.',
          type: 'Web',
          typeLabel: 'Web platform',
        },
      ],
      alsoTitle: 'We also build',
      hashtags: ['#online stores', '#management systems', '#delivery apps', '#company websites', '#bookings', '#invoicing'],
    },

    partners: {
      badge: 'Testimonials',
      title: 'Meet the partners who have trusted EK Tech',
      you: 'You?',
      trustText: 'Partners in Mozambique',
      projectLabel: 'Project',
      items: [
        { sector: 'Agriculture', city: 'Malema', name: 'Agrovet e Serviços', project: 'AgroVet Institutional' },
        { sector: 'Warehouse', city: 'Nampula', name: 'Namutequeliua Comercial', project: 'Namutequeliua Comercial' },
        { sector: 'Real estate', city: 'Nampula', name: 'Aura Imobiliária', project: 'Real Estate CRM' },
      ],
    },

    testimonials: [
      {
        quote: 'EK TECH built an app that detects pests from photos, and it is already changing the way we monitor our crops. The accuracy of the AI model and the team’s care in understanding the reality in the field made all the difference.',
        name: 'Noémia Celestino',
        role: 'Founder, Agrovet e Serviços',
      },
      {
        quote: 'We needed a complete system to control stock, warehouse movements and staff advances. EK TECH delivered a solid, easy-to-use solution that is now essential to our day-to-day work.',
        name: 'Virgílio Mukhtar',
        role: 'Founder, Namutequeliua Comercial',
      },
      {
        quote: 'The CRM built by EK TECH completely organised how we manage our clients and properties. The support during and after the rollout was excellent.',
        name: 'Abdul Cadre Pedro',
        role: 'Technician, Aura Imobiliária',
      },
    ],

    process: {
      badge: 'From idea to launch',
      titleLine1: 'Before the code,',
      titleLine2: 'we understand your business',
      text: 'Every project, whether it is an app, a website or a SaaS platform, starts with a consultation. We listen to your idea and look at how you work today. The consultation has an affordable fee, and at the end you get a clear plan of what should be built, with features, timeline and budget.',
      button: 'Book a consultation',
      steps: [
        { title: '1. Consultation', text: 'A session at an affordable fee to hear your idea and understand your business.' },
        { title: '2. Planning', text: 'We agree on features, timeline and budget, in writing.' },
        { title: '3. Development', text: 'We design and build the solution, delivering in stages.' },
        { title: '4. Launch', text: 'We publish the solution and keep supporting it.' },
      ],
    },
  },
}

export default en
