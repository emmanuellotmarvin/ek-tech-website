import type { Locale } from '@/i18n/config'

// SaaS plans shown on the pricing page.
// Prices and ✓/✗ are written once; every text has its Portuguese and English version side by side.
// A plan without monthlyPrice shows "Sob consulta" / "On request".

type Text = Record<Locale, string>

type PricingPlanData = {
  name: Text
  description: Text
  monthlyPrice?: number
  setupFee?: number
  highlights: Text[]
  featured?: boolean
}

type ComparisonRowData = {
  label: Text
  // One value per plan, in the same order as `plans`: true/false shows ✓/✗, text is shown as is
  values: (boolean | Text)[]
}

type SaasSystemData = {
  id: string
  name: Text
  icon: string
  plans: PricingPlanData[]
  comparison: ComparisonRowData[]
  // Yearly billing: months the client does not pay (e.g. 2 = pays 10, gets 12)
  yearlyFreeMonths?: number
  setupNote?: Text
  enterprise?: { description: Text }
}

// Same text in both languages (numbers, product names)
const same = (value: string): Text => ({ pt: value, en: value })

const planNames = {
  basic: { pt: 'Básico', en: 'Basic' },
  essential: { pt: 'Essencial', en: 'Essential' },
  professional: { pt: 'Profissional', en: 'Professional' },
}

const saasSystemsData: SaasSystemData[] = [
  {
    id: 'gestao-escolar',
    name: { pt: 'Gestão escolar', en: 'School management' },
    icon: 'lucide:graduation-cap',
    yearlyFreeMonths: 2,
    setupNote: {
      pt: 'A taxa de implementação é paga uma vez e inclui importar os alunos, configurar a escola e a formação inicial.',
      en: 'The setup fee is paid once and covers importing your students, configuring the school and the initial training.',
    },
    enterprise: {
      description: {
        pt: 'Mais de 1 500 alunos ou vários polos, com condições negociadas.',
        en: 'More than 1,500 students or several campuses, with negotiated terms.',
      },
    },
    plans: [
      {
        name: planNames.basic,
        description: {
          pt: 'Para escolas pequenas que querem organizar a parte académica e as propinas.',
          en: 'For small schools that want to organise academics and tuition fees.',
        },
        monthlyPrice: 2500,
        setupFee: 7500,
        highlights: [
          { pt: 'Até 300 alunos', en: 'Up to 300 students' },
          { pt: 'Gestão académica: alunos, testes, médias, presenças e pautas', en: 'Academic management: students, tests, averages, attendance and grade sheets' },
          { pt: 'Propinas e facturação, com pagamento na secretaria', en: 'Tuition fees and invoicing, paid at the school office' },
          { pt: 'Portal do estudante e do encarregado', en: 'Student and parent portal' },
          { pt: 'Suporte por WhatsApp e email em horário laboral, com resposta em até 48h', en: 'Support by WhatsApp and email during business hours, with replies within 48h' },
          { pt: '1 sessão de formação online', en: '1 online training session' },
        ],
      },
      {
        name: planNames.essential,
        description: {
          pt: 'Cobre as propinas mais depressa com carteiras móveis.',
          en: 'Collect tuition fees faster with mobile wallets.',
        },
        monthlyPrice: 5000,
        setupFee: 12500,
        featured: true,
        highlights: [
          { pt: 'Até 700 alunos', en: 'Up to 700 students' },
          { pt: 'Tudo o que está no Básico', en: 'Everything in Basic' },
          { pt: 'Pagamento online por carteira móvel', en: 'Online payments with mobile wallets' },
          { pt: 'Admissão online', en: 'Online admissions' },
          { pt: 'Despesas e relatórios financeiros', en: 'Expenses and financial reports' },
          { pt: 'Suporte por WhatsApp, com resposta em até 24h', en: 'Support by WhatsApp, with replies within 24h' },
          { pt: '2 sessões de formação', en: '2 training sessions' },
        ],
      },
      {
        name: planNames.professional,
        description: {
          pt: 'A plataforma completa, com atendimento prioritário.',
          en: 'The complete platform, with priority support.',
        },
        monthlyPrice: 9500,
        setupFee: 20000,
        highlights: [
          { pt: 'Até 1 500 alunos', en: 'Up to 1,500 students' },
          { pt: 'Tudo o que está no Essencial', en: 'Everything in Essential' },
          { pt: 'Biblioteca e transporte, incluindo o painel do motorista', en: 'Library and transport, including the driver dashboard' },
          { pt: 'Suporte prioritário por WhatsApp e telefone, com resposta em até 4h úteis', en: 'Priority support by WhatsApp and phone, with replies within 4 business hours' },
          { pt: 'Formação ilimitada para novos funcionários', en: 'Unlimited training for new staff' },
          { pt: '1 visita presencial por ano (Nampula)', en: '1 on-site visit per year (Nampula)' },
        ],
      },
    ],
    comparison: [
      { label: { pt: 'Limite de alunos', en: 'Student limit' }, values: [same('300'), same('700'), { pt: '1 500', en: '1,500' }] },
      { label: { pt: 'Gestão académica e portais', en: 'Academic management and portals' }, values: [true, true, true] },
      { label: { pt: 'Propinas e facturação', en: 'Tuition fees and invoicing' }, values: [true, true, true] },
      { label: { pt: 'Pagamento online por carteira móvel', en: 'Online payments with mobile wallets' }, values: [false, true, true] },
      { label: { pt: 'Admissão online', en: 'Online admissions' }, values: [false, true, true] },
      { label: { pt: 'Despesas e relatórios financeiros', en: 'Expenses and financial reports' }, values: [false, true, true] },
      { label: { pt: 'Biblioteca', en: 'Library' }, values: [false, false, true] },
      { label: { pt: 'Transporte', en: 'Transport' }, values: [false, false, true] },
      { label: { pt: 'Tempo de resposta do suporte', en: 'Support response time' }, values: [same('48h'), same('24h'), { pt: '4h úteis', en: '4 business hours' }] },
      { label: { pt: 'Suporte por telefone', en: 'Phone support' }, values: [false, false, true] },
    ],
  },
  {
    id: 'gestao-clinica',
    name: { pt: 'Gestão clínica', en: 'Clinic management' },
    icon: 'lucide:stethoscope',
    yearlyFreeMonths: 2,
    plans: [
      {
        name: planNames.basic,
        description: {
          pt: 'Para consultórios e clínicas pequenas que querem deixar o papel e organizar marcações, pacientes e facturação.',
          en: 'For practices and small clinics that want to move off paper and organise appointments, patients and invoicing.',
        },
        monthlyPrice: 3500,
        setupFee: 7500,
        highlights: [
          { pt: 'Até 3 médicos', en: 'Up to 3 doctors' },
          { pt: 'Até 5 utilizadores de equipa', en: 'Up to 5 staff users' },
          { pt: '1 clínica', en: '1 clinic' },
          { pt: 'Pacientes e marcações ilimitados', en: 'Unlimited patients and appointments' },
          { pt: 'Consultas, prescrições e histórico clínico', en: 'Consultations, prescriptions and medical history' },
          { pt: 'Facturação e recibos em PDF', en: 'Invoicing and PDF receipts' },
          { pt: 'App Android e iOS para médicos e pacientes', en: 'Android and iOS app for doctors and patients' },
        ],
      },
      {
        name: planNames.essential,
        description: {
          pt: 'Gere várias filiais, faça teleconsultas e lembre os pacientes por WhatsApp.',
          en: 'Manage several branches, offer video consultations and remind patients by WhatsApp.',
        },
        monthlyPrice: 7500,
        setupFee: 15000,
        featured: true,
        highlights: [
          { pt: 'Até 10 médicos', en: 'Up to 10 doctors' },
          { pt: 'Até 15 utilizadores de equipa', en: 'Up to 15 staff users' },
          { pt: 'Tudo o que está no Básico', en: 'Everything in Basic' },
          { pt: 'Até 3 clínicas ou filiais', en: 'Up to 3 clinics or branches' },
          { pt: 'Telemedicina (Zoom e Google Meet)', en: 'Telemedicine (Zoom and Google Meet)' },
          { pt: '300 notificações WhatsApp/SMS por mês', en: '300 WhatsApp/SMS notifications per month' },
          { pt: 'Comissões e ganhos dos médicos', en: 'Doctor commissions and earnings' },
          { pt: 'Pagamentos online, cupões e carteira do paciente', en: 'Online payments, coupons and patient wallet' },
        ],
      },
      {
        name: planNames.professional,
        description: {
          pt: 'A plataforma completa, com internamento, farmácia online e app com a sua marca.',
          en: 'The complete platform, with inpatient care, an online pharmacy and an app with your brand.',
        },
        monthlyPrice: 13500,
        setupFee: 30000,
        highlights: [
          { pt: 'Até 30 médicos', en: 'Up to 30 doctors' },
          { pt: 'Até 50 utilizadores de equipa', en: 'Up to 50 staff users' },
          { pt: 'Tudo o que está no Essencial', en: 'Everything in Essential' },
          { pt: 'Clínicas ou filiais ilimitadas', en: 'Unlimited clinics or branches' },
          { pt: 'Gestão de camas e internamento', en: 'Bed and inpatient management' },
          { pt: 'Loja e farmácia online com entregas', en: 'Online shop and pharmacy with delivery' },
          { pt: 'App Android e iOS com o nome e logótipo da clínica', en: 'Android and iOS app with the clinic’s name and logo' },
          { pt: 'Suporte prioritário', en: 'Priority support' },
        ],
      },
    ],
    comparison: [
      { label: { pt: 'Médicos', en: 'Doctors' }, values: [same('3'), same('10'), same('30')] },
      { label: { pt: 'Utilizadores de equipa', en: 'Staff users' }, values: [same('5'), same('15'), same('50')] },
      { label: { pt: 'Clínicas / filiais', en: 'Clinics / branches' }, values: [same('1'), same('3'), { pt: 'Ilimitadas', en: 'Unlimited' }] },
      { label: { pt: 'Pacientes e marcações', en: 'Patients and appointments' }, values: [{ pt: 'Ilimitados', en: 'Unlimited' }, { pt: 'Ilimitados', en: 'Unlimited' }, { pt: 'Ilimitados', en: 'Unlimited' }] },
      { label: { pt: 'Marcações online e marcação rápida', en: 'Online and quick booking' }, values: [true, true, true] },
      { label: { pt: 'Horários, sessões e feriados dos médicos', en: 'Doctor schedules, sessions and holidays' }, values: [true, true, true] },
      { label: { pt: 'Consultas, prescrições e histórico clínico', en: 'Consultations, prescriptions and medical history' }, values: [true, true, true] },
      { label: { pt: 'Facturação, impostos e recibos em PDF', en: 'Invoicing, taxes and PDF receipts' }, values: [true, true, true] },
      { label: { pt: 'App Android e iOS (médico e paciente)', en: 'Android and iOS app (doctor and patient)' }, values: [true, true, true] },
      { label: { pt: 'Relatórios e exportação Excel/PDF', en: 'Reports and Excel/PDF export' }, values: [true, true, true] },
      { label: { pt: 'Notificações por email e push', en: 'Email and push notifications' }, values: [true, true, true] },
      { label: { pt: 'Sinais vitais, body chart e observações', en: 'Vital signs, body chart and notes' }, values: [false, true, true] },
      { label: { pt: 'Modelos de consulta (templates)', en: 'Consultation templates' }, values: [false, true, true] },
      { label: { pt: 'Telemedicina (Zoom / Google Meet)', en: 'Telemedicine (Zoom / Google Meet)' }, values: [false, true, true] },
      { label: { pt: 'Notificações WhatsApp/SMS por mês', en: 'WhatsApp/SMS notifications per month' }, values: [false, same('300'), { pt: '1 000', en: '1,000' }] },
      { label: { pt: 'Comissões e ganhos dos médicos', en: 'Doctor commissions and earnings' }, values: [false, true, true] },
      { label: { pt: 'Pagamentos online (Stripe, PayPal, Flutterwave…)', en: 'Online payments (Stripe, PayPal, Flutterwave…)' }, values: [false, true, true] },
      { label: { pt: 'Cupões, promoções e carteira do paciente', en: 'Coupons, promotions and patient wallet' }, values: [false, true, true] },
      { label: { pt: 'Formulários e campos personalizados', en: 'Custom forms and fields' }, values: [false, true, true] },
      { label: { pt: 'Página pública da clínica', en: 'Public clinic page' }, values: [false, true, true] },
      { label: { pt: 'Gestão de camas e internamento', en: 'Bed and inpatient management' }, values: [false, false, true] },
      { label: { pt: 'Loja / farmácia online com zonas de entrega', en: 'Online shop / pharmacy with delivery zones' }, values: [false, false, true] },
      { label: { pt: 'App com a marca da clínica na Play Store e App Store', en: 'App with the clinic’s brand on the Play Store and App Store' }, values: [false, false, true] },
      { label: { pt: 'Suporte', en: 'Support' }, values: [same('Email'), same('Email + WhatsApp'), { pt: 'Prioritário (resposta em até 4h)', en: 'Priority (reply within 4h)' }] },
    ],
  },
  {
    id: 'gestao-empresarial',
    name: { pt: 'Gestão empresarial', en: 'Business management' },
    icon: 'lucide:briefcase-business',
    yearlyFreeMonths: 2,
    plans: [
      {
        name: planNames.basic,
        description: {
          pt: 'Para equipas pequenas que querem organizar projectos, tarefas e presenças num só lugar.',
          en: 'For small teams that want to organise projects, tasks and attendance in one place.',
        },
        monthlyPrice: 3500,
        setupFee: 10000,
        highlights: [
          { pt: 'Até 10 utilizadores', en: 'Up to 10 users' },
          same('1 workspace'),
          { pt: 'Projectos e tarefas com estados, prioridades, tags e prazos', en: 'Projects and tasks with statuses, priorities, tags and deadlines' },
          { pt: 'Notas, to-dos e reuniões', en: 'Notes, to-dos and meetings' },
          { pt: 'Chat interno com notificações em tempo real', en: 'Internal chat with real-time notifications' },
          { pt: 'Clientes e contratos', en: 'Clients and contracts' },
          { pt: 'Registos de presença e pedidos de férias', en: 'Attendance records and leave requests' },
          { pt: 'App Android e iOS', en: 'Android and iOS app' },
          { pt: 'Backups semanais', en: 'Weekly backups' },
          { pt: 'Suporte por email', en: 'Email support' },
        ],
      },
      {
        name: planNames.essential,
        description: {
          pt: 'Gira pessoas, salários e facturação sem folhas de Excel.',
          en: 'Manage people, payroll and invoicing without spreadsheets.',
        },
        monthlyPrice: 7500,
        setupFee: 17500,
        featured: true,
        highlights: [
          { pt: 'Até 30 utilizadores', en: 'Up to 30 users' },
          { pt: 'Tudo o que está no Básico', en: 'Everything in Basic' },
          { pt: 'Até 3 workspaces', en: 'Up to 3 workspaces' },
          { pt: 'Recibos de salário, subsídios, descontos e vales', en: 'Payslips, allowances, deductions and salary advances' },
          { pt: 'Saldos de férias automáticos e importação de presenças em massa', en: 'Automatic leave balances and bulk attendance import' },
          { pt: 'Orçamentos, facturas, pagamentos, despesas e impostos', en: 'Quotes, invoices, payments, expenses and taxes' },
          { pt: 'CRM de leads com etapas, follow-ups e formulários públicos', en: 'Lead CRM with stages, follow-ups and public forms' },
          { pt: 'Registo de horas (time tracker)', en: 'Time tracking' },
          { pt: 'Relatórios e exportações', en: 'Reports and exports' },
          { pt: 'Backups diários', en: 'Daily backups' },
          { pt: 'Suporte por WhatsApp em horário laboral', en: 'WhatsApp support during business hours' },
        ],
      },
      {
        name: planNames.professional,
        description: {
          pt: 'A plataforma completa, com armazém, IA e atendimento prioritário.',
          en: 'The complete platform, with warehouse, AI and priority support.',
        },
        monthlyPrice: 13500,
        setupFee: 30000,
        highlights: [
          { pt: 'Até 75 utilizadores', en: 'Up to 75 users' },
          { pt: 'Tudo o que está no Essencial', en: 'Everything in Essential' },
          { pt: 'Workspaces ilimitados', en: 'Unlimited workspaces' },
          { pt: 'Armazém: inventário, movimentos, fornecedores e unidades', en: 'Warehouse: inventory, movements, suppliers and units' },
          { pt: 'Recrutamento: candidatos, entrevistas e estados', en: 'Recruitment: candidates, interviews and statuses' },
          { pt: 'Assistente de IA (Gemini)', en: 'AI assistant (Gemini)' },
          { pt: 'Notificações por WhatsApp e Slack', en: 'WhatsApp and Slack notifications' },
          { pt: 'Sincronização com o Google Calendar', en: 'Google Calendar sync' },
          { pt: 'Campos personalizados e templates de email', en: 'Custom fields and email templates' },
          { pt: 'Tarefas recorrentes e registo de actividade', en: 'Recurring tasks and activity log' },
          { pt: 'Atendimento prioritário, com resposta em menos de 4h', en: 'Priority support, with replies in under 4h' },
        ],
      },
    ],
    comparison: [
      { label: { pt: 'Limite de utilizadores', en: 'User limit' }, values: [same('10'), same('30'), same('75')] },
      { label: same('Workspaces'), values: [same('1'), same('3'), { pt: 'Ilimitados', en: 'Unlimited' }] },
      { label: { pt: 'Projectos, tarefas, notas e to-dos', en: 'Projects, tasks, notes and to-dos' }, values: [true, true, true] },
      { label: { pt: 'Chat e reuniões', en: 'Chat and meetings' }, values: [true, true, true] },
      { label: { pt: 'Clientes e contratos', en: 'Clients and contracts' }, values: [true, true, true] },
      { label: { pt: 'Presenças e pedidos de férias', en: 'Attendance and leave requests' }, values: [true, true, true] },
      { label: { pt: 'App Android e iOS', en: 'Android and iOS app' }, values: [true, true, true] },
      { label: { pt: 'Salários, subsídios, descontos e vales', en: 'Payroll, allowances, deductions and salary advances' }, values: [false, true, true] },
      { label: { pt: 'Saldos de férias e importação em massa', en: 'Leave balances and bulk import' }, values: [false, true, true] },
      { label: { pt: 'Facturação, pagamentos e despesas', en: 'Invoicing, payments and expenses' }, values: [false, true, true] },
      { label: { pt: 'CRM de leads e formulários públicos', en: 'Lead CRM and public forms' }, values: [false, true, true] },
      { label: { pt: 'Registo de horas', en: 'Time tracking' }, values: [false, true, true] },
      { label: { pt: 'Relatórios e exportações', en: 'Reports and exports' }, values: [false, true, true] },
      { label: { pt: 'Armazém e fornecedores', en: 'Warehouse and suppliers' }, values: [false, false, true] },
      { label: { pt: 'Recrutamento', en: 'Recruitment' }, values: [false, false, true] },
      { label: { pt: 'Assistente de IA (Gemini)', en: 'AI assistant (Gemini)' }, values: [false, false, true] },
      { label: { pt: 'Notificações WhatsApp e Slack', en: 'WhatsApp and Slack notifications' }, values: [false, false, true] },
      { label: { pt: 'Google Calendar e campos personalizados', en: 'Google Calendar and custom fields' }, values: [false, false, true] },
      { label: same('Backups'), values: [{ pt: 'Semanais', en: 'Weekly' }, { pt: 'Diários', en: 'Daily' }, { pt: 'Diários', en: 'Daily' }] },
      { label: { pt: 'Suporte', en: 'Support' }, values: [same('Email'), same('WhatsApp'), { pt: 'Prioritário', en: 'Priority' }] },
    ],
  },
]

// ---- Plans in one language, as used by the page ----

export type PricingPlan = Omit<PricingPlanData, 'name' | 'description' | 'highlights'> & {
  name: string
  description: string
  highlights: string[]
}

export type ComparisonRow = {
  label: string
  values: (boolean | string)[]
}

export type SaasSystem = Omit<SaasSystemData, 'name' | 'plans' | 'comparison' | 'setupNote' | 'enterprise'> & {
  name: string
  plans: PricingPlan[]
  comparison: ComparisonRow[]
  setupNote?: string
  enterprise?: { description: string }
}

export const getSaasSystems = (locale: Locale): SaasSystem[] =>
  saasSystemsData.map((system) => ({
    ...system,
    name: system.name[locale],
    setupNote: system.setupNote?.[locale],
    enterprise: system.enterprise && { description: system.enterprise.description[locale] },
    plans: system.plans.map((plan) => ({
      ...plan,
      name: plan.name[locale],
      description: plan.description[locale],
      highlights: plan.highlights.map((highlight) => highlight[locale]),
    })),
    comparison: system.comparison.map((row) => ({
      label: row.label[locale],
      values: row.values.map((value) => (typeof value === 'boolean' ? value : value[locale])),
    })),
  }))
