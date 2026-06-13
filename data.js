window.EF = {
  meta: {
    name: 'Eduardo Fiorini',
    role: 'Desenvolvedor Front-end · Infraestrutura & T.I',
    org: 'BJ Group',
  },

  hero: {
    greeting: 'Oi! Eu sou o Eduardo.',
    pitch:
      'Gosto de resolver problemas — do front-end que o corretor abre de manhã ao script Python que roda à noite, passando pelo switch do escritório quando precisa.',
    current: 'Atualmente na BJ Group, cuidando de web, plataformas, dados e infra das seis empresas da holding.',
  },

  projects: [
    {
      id: 1,
      title: 'TaxResearch Technologies',
      headline: 'Suporte interno, infraestrutura de colaboradores e desenvolvimento de soluções sob medida.',
      status: 'Em produção',
      year: 'Em Produção',
      brief: 'Suporte interno, infraestrutura de colaboradores e desenvolvimento de soluções sob medida.',
      showPanelLead: false,
      overview:
        'Minha atuação na TaxResearch do Brasil se estabelece como elo tecnológico para a entrega dos melhores resultados nos serviços prestados. No suporte interno, atendo equipamentos, contas de e-mail da equipe, permissões de acesso e ajustes pontuais em sistemas — em geral resolvido por acesso remoto. Paralelamente, atuo no desenvolvimento de novas soluções tecnológicas da TaxResearch Technologies: observo a operação, mantenho contato direto com colaboradores dos diversos setores para entender demanda real e desenvolver ferramentas e sistemas completos, sob medida, que melhoram fluxos internos e agilizam processos antes dependentes de workaround manual.',
      scope: [
        {
          title: 'Suporte interno de T.I',
          text: 'Hardware, diagnóstico e resolução quando a operação trava — sem fila externa.',
        },
        {
          title: 'E-mail e acessos',
          text: 'Configuração de e-mail, liberações e adequações de sistema via acesso remoto.',
        },
        {
          title: 'Desenvolvimento na TaxResearch Technologies',
          text: 'Atuo na área de desenvolvimento de novas soluções tecnológicas da TaxResearch Technologies — da ideia à ferramenta em produção.',
        },
        {
          title: 'Contato direto com os setores',
          text: 'Observação e conversa frequente com colaboradores dos diversos setores para entender fluxo real, gargalo e necessidade antes de codar.',
        },
        {
          title: 'Sistemas sob medida',
          text: 'Ferramentas e sistemas completos desenvolvidos para melhorar fluxos e demandas internas — agilizando processos que hoje ainda travam a operação.',
        },
      ],
      howItWorks: [
        {
          title: 'Demanda chega, eu diagnostico',
          text: 'Suporte pontual, liberação de acesso ou pedido de nova ferramenta — entendo o contexto, quem usa e o que não pode quebrar.',
        },
        {
          title: 'Remoto quando dá, presencial quando precisa',
          text: 'E-mail, permissões e adequações de sistema via acesso remoto; hardware e casos críticos entram na fila com prioridade clara.',
        },
        {
          title: 'Levantamento com quem opera',
          text: 'Converso com os setores envolvidos, observo o fluxo atual e fecho o escopo do que precisa existir de fato — não o que parece bonito no papel.',
        },
        {
          title: 'Desenvolvimento e entrega',
          text: 'Construo a solução sob medida, valido com quem pediu e deixo rodando — CRM comercial, automações e painéis internos entram nessa linha.',
        },
      ],
      highlights: ['Suporte remoto', 'E-mail & acessos', 'Sistemas sob medida', 'Contato com setores'],
      pages: [
        { id: 'main', label: 'TaxResearch' },
        {
          id: 'crm',
          label: 'CRM Comercial',
          title: 'TaxComercial',
          headline: 'CRM comercial — agenda, leads e metas no dia a dia',
          text: 'Front-end completo do TaxComercial, desenvolvido em par com o back-end (André). Painel responsivo que o corretor abre de manhã: agenda compartilhada, WhatsApp integrado, Google Workspace e painéis de gestão para coordenadores e gerentes.',
        },
      ],
      image: null,
      images: [],
      tech: ['JavaScript', 'HTML / CSS', 'Suporte remoto', 'Google Workspace', 'UX'],
      accent: '#3B82F6',
    },
    {
      id: 4,
      title: 'Previnity Soluções Inteligentes',
      headline: 'Operação e evolução da plataforma Previnity',
      status: 'Em produção',
      year: 'Em Produção',
      brief: 'Painel de consultas, hub interno, integrações e suporte — tudo em produção.',
      overview:
        'Atuo na Previnity de ponta a ponta: o painel que milhares de clientes usam todo dia, integrações que mantêm a operação de pé e suporte em produção — sem parar o que já está no ar.',
      scope: [
        {
          title: 'Painel de consultas',
          text: 'Plataforma em produção com +4.700 clientes ativos e 30+ tipos de consulta. Front-end, correções urgentes e evoluções sem derrubar a operação.',
        },
        {
          title: 'Integrações B2G e B2B',
          text: 'Onboarding de clientes e instituições, conexão com bases e APIs externas.',
        },
        {
          title: 'Suporte em produção',
          text: 'Tickets de interface, ajustes de fluxo e patches com prioridade conforme impacto na base.',
        },
      ],
      pages: [
        { id: 'main', label: 'Previnity' },
        {
          id: 'hub',
          label: 'PrevinityHub',
          title: 'PrevinityHub',
          headline: 'Hub interno para documentação, processos e fluxos do time',
          text: 'Plataforma que centraliza cards de processo, chat interno, painel admin e auditoria de ações — com acesso por setor e publicação de conteúdo operacional.',
          mockup: 'previnityhub',
          screens: [
            { src: 'img/prevhubchat.jpg', label: 'Hub', brand: 'PREVINITY HUB' },
            { src: 'img/prevhubcard.jpg', label: 'Admin', brand: 'PREVINITY ADMIN' },
            { src: 'img/prevhubacess.jpg', label: 'Auditoria', brand: 'CENTRAL DE AUDITORIA' },
          ],
        },
      ],
      howItWorks: [
        {
          title: 'Diagnóstico antes de mexer',
          text: 'Mudança em produção passa por entender quem usa, o que quebra se falhar e qual o caminho de rollback.',
        },
        {
          title: 'Patch cirúrgico',
          text: 'Correção mínima, validação e deploy — a operação não para porque alguém precisou de um ajuste no painel.',
        },
        {
          title: 'Evolução contínua',
          text: 'Novas consultas, telas e integrações entram no fluxo normal de manutenção, não como projeto paralelo esquecido.',
        },
      ],
      highlights: ['+4.700 clientes', 'PrevinityHub', '30+ consultas', 'Integrações institucionais'],
      tech: ['Front-end', 'MySQL', 'Integrações', 'Documentação'],
      accent: '#06B6D4',
    },
    {
      id: 3,
      title: 'Desenvolvimento Web Aplicari',
      headline: 'Produção web e infra digital da agência',
      status: 'Em produção',
      year: 'Em Produção',
      brief: 'Sites, campanhas, lojas virtuais, hospedagem e manutenção — do briefing ao ar.',
      overview:
        'Sou o web da Aplicari — sozinho, de ponta a ponta. Marketing pede landing na sexta, cliente quer loja no ar, e-mail parou de funcionar: entra na fila, sai resolvido.',
      scope: [
        { title: 'Sites & landings', text: 'Corporativos e campanhas do briefing ao ar.' },
        { title: 'E-commerce', text: 'Lojas virtuais integradas à operação comercial.' },
        { title: 'Infra web', text: 'Hospedagem, DNS, e-mail e manutenção contínua.' },
      ],
      pages: [
        { id: 'main', label: 'Aplicari' },
        {
          id: 'sites',
          label: 'Sites & Lojas',
          title: 'Sites & Lojas',
          headline: 'Produção web do briefing ao ar',
          text: 'Landings de campanha, sites corporativos e e-commerce — prazo apertado, fluxo solo do layout ao deploy.',
        },
      ],
      howItWorks: [
        {
          title: 'Demanda entra, eu fecho',
          text: 'Briefing, layout, código, deploy e monitoramento — um fluxo solo, sem camadas de handoff.',
        },
        {
          title: 'Campanha com prazo',
          text: 'Landing de campanha segue o calendário do time comercial. Prazo apertado é regra, não exceção.',
        },
        {
          title: 'Pós-entrega incluído',
          text: 'Manutenção, ajustes e infra web continuam comigo depois que o site vai pro ar.',
        },
      ],
      highlights: ['40+ sites ativos', 'WordPress & custom', 'Hospedagem & DNS', 'Manutenção contínua'],
      image: null,
      images: [],
      tech: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
      accent: '#0EA5E9',
    },
    {
      id: 5,
      title: 'Pipeline de dados',
      headline: 'Automatizando higienização de mais de 1M linhas por execução',
      status: 'Entregue',
      year: '2024',
      brief: 'Scripts Python integrados às consultas Previnity — CSV, validação e lote.',
      overview:
        'Scripts Python que rodam integrados às consultas da Previnity: higienizam bases enormes, validam registros e exportam CSV pronto para operação — eliminando horas de trabalho manual repetitivo.',
      scope: [
        { title: 'Ingestão em massa', text: 'Mais de 1 milhão de linhas por execução — carga, parse e normalização.' },
        { title: 'Higienização', text: 'Validação e correção com regras explícitas; erro abaixo de 0,1%.' },
        { title: 'Export operacional', text: 'CSV pronto para negativações, relatórios e repasses.' },
      ],
      howItWorks: [
        {
          title: 'Ingestão em massa',
          text: 'Cada execução processa mais de 1 milhão de linhas — carga, parse e normalização antes de qualquer regra de negócio.',
        },
        {
          title: 'Higienização e validação',
          text: 'Registros inválidos são filtrados ou corrigidos com regras explícitas; taxa de erro fica abaixo de 0,1%.',
        },
        {
          title: 'Export operacional',
          text: 'CSV formatado sai pronto para o time usar — negativações em lote, relatórios e repasses sem retrabalho.',
        },
      ],
      highlights: ['1M+ linhas/run', 'Python + MySQL', 'Validação automática', '−70% tempo manual'],
      pages: [
        { id: 'main', label: 'Pipeline de dados' },
        {
          id: 'etl',
          label: 'ETL Previnity',
          title: 'ETL Previnity',
          headline: 'Scripts Python integrados às consultas',
          text: 'Higienização de mais de 1M linhas por execução, validação automática e export CSV pronto para operação — negativações, relatórios e repasses.',
        },
      ],
      image: null,
      images: [],
      tech: ['Python', 'MySQL', 'CSV'],
      accent: '#22C55E',
    },
    {
      id: 6,
      title: 'Infraestrutura SP',
      headline: 'Montando do zero a infra do escritório TaxResearch',
      status: 'Entregue',
      year: '2024',
      brief: 'Rede estruturada, VPN, NAS, biometria e suporte remoto em Vila Olímpia.',
      overview:
        'Escritório da TaxResearch em Vila Olímpia montado do zero: cabeamento, switches, VPN para NAS TerraMaster, biometria, nobreaks e suporte remoto para todas as máquinas e e-mails dos colaboradores.',
      scope: [
        { title: 'Rede estruturada', text: 'Cabeamento, switches e load balance para 32 postos ativos.' },
        { title: 'Acesso remoto', text: 'VPN para NAS e recursos internos com segurança.' },
        { title: 'Segurança & suporte', text: 'Biometria, permissões e suporte de hardware quando algo quebra.' },
      ],
      howItWorks: [
        {
          title: 'Rede estruturada',
          text: 'Cabeamento, switches gerenciáveis e load balance para 32 postos ativos com uptime de rede acima de 99,8%.',
        },
        {
          title: 'Acesso remoto seguro',
          text: 'VPN conecta colaboradores ao NAS e recursos internos — trabalho remoto sem expor serviços desnecessariamente.',
        },
        {
          title: 'Segurança física e lógica',
          text: 'Biometria no acesso ao escritório, controle de permissões e suporte de hardware quando algo quebra.',
        },
      ],
      highlights: ['32 postos', 'VPN + NAS', 'Biometria', 'Suporte remoto'],
      pages: [
        { id: 'main', label: 'Infraestrutura SP' },
        {
          id: 'rede',
          label: 'Rede & VPN',
          title: 'Rede & VPN',
          headline: 'Infraestrutura de rede do escritório Vila Olímpia',
          text: 'Cabeamento, switches gerenciáveis, VPN para NAS TerraMaster e suporte remoto — 32 postos com uptime acima de 99,8%.',
        },
      ],
      image: null,
      images: [],
      tech: ['Redes', 'VPN', 'NAS', 'Windows Server'],
      accent: '#F97316',
    },
  ],

  about: {
    text: 'Profissional híbrido de tecnologia e infraestrutura: front-end com foco em UX, plataformas em produção, automação de dados e redes. Atendo sozinho a demanda de T.I das empresas da BJ Group — OK Carro, Aplicari, TaxResearch, Previnity, PrevinityFiscal e Aplicari Studio.',
    stacks: ['Front-end & UX', 'Plataformas & CRMs', 'Dados & Python', 'Infra & Redes'],
  },

  skills: [
    { name: 'Front-end', items: ['HTML / CSS / JS', 'React', 'WordPress', 'UX'] },
    { name: 'Plataformas', items: ['CRMs & painéis', 'Integrações', 'Google Workspace'] },
    { name: 'Dados', items: ['Python', 'MySQL', 'ETL & CSV'] },
    { name: 'Infra', items: ['Redes & VPN', 'Hospedagem & DNS', 'Hardware'] },
  ],

  contact: {
    email: 'eduardo@fiorini.dev',
    linkedin: 'linkedin.com/in/eduardofiorini',
    github: 'github.com/eduardofiorini',
  },
};
