window.EF = {
  meta: {
    name: '>/Eduardo Fiorini',
    role: 'Desenvolvedor Front-end · Especialista em T.I',
    org: 'BJ Group',
  },

  hero: {
    greeting: 'Olá! Me chamo Eduardo',
    pitch:
      'Antes de escrever código, aprendi a pensar em fluxo, e isso mudou como enxergo tecnologia: o problema raramente está só na ferramenta, está no fluxo em volta dela. Esse mesmo instinto me acompanha até hoje !',
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
          apiId: 'TaxResearchTechnologies',
        },
        {
          title: 'E-mail e acessos',
          text: 'Configuração de e-mail, liberações e adequações de sistema via acesso remoto.',
          apiId: 'TaxResearchTechnologies',
        },
        {
          title: 'Desenvolvimento na TaxResearch Technologies',
          text: 'Atuo na área de desenvolvimento de novas soluções tecnológicas da TaxResearch Technologies — da ideia à ferramenta em produção.',
          apiId: 'TaxResearchTechnologies',
        },
        {
          title: 'Contato direto com os setores',
          text: 'Observação e conversa frequente com colaboradores dos diversos setores para entender fluxo real, gargalo e necessidade antes de codar.',
          apiId: 'TaxResearchTechnologies',
        },
        {
          title: 'Sistemas sob medida',
          text: 'Ferramentas e sistemas completos desenvolvidos para melhorar fluxos e demandas internas — agilizando processos que hoje ainda travam a operação.',
          apiId: 'TaxResearchTechnologies',
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
      api: {
        host: 'api.taxresearch.',
        prompt: 'taxresearch',
        org: 'TaxResearch Technologies',
        role: 'elo_tecnologico',
      },
      pages: [
        { id: 'main', label: 'TaxResearch', mockup: 'projectapi' },
        {
          id: 'crm',
          label: 'CRM Comercial',
          title: 'CRM Comercial',
          headline: 'Uma aplicação, várias ferramentas, todas informações em um só local.',
          text: 'Desenvolvido em conjunto com o time: sou responsável pelo front-end, com foco na utilização do usuário e na integração fluida com o back-end estruturado construído pela equipe. Interface responsiva e de fácil utilização — pensada para otimizar demandas, melhorar os fluxos do time comercial e eliminar workarounds espalhados por diversas plataformas.',
          mockup: 'taxcomercial',
          url: 'TaxResearch.Technologies',
          scope: [
            {
              title: 'Agenda compartilhada',
              text: 'Calendário unificado entre corretores — reuniões, follow-ups e bloqueios visíveis para quem precisa coordenar.',
            },
            {
              title: 'WhatsApp integrado',
              text: 'Disparos em lote e conversas ligadas ao lead, sem sair do painel nem perder histórico.',
            },
            {
              title: 'Leads & pipeline',
              text: 'Entrada, triagem e status do funil com clareza para quem opera e para quem gerencia.',
            },
            {
              title: 'Painéis de gestão',
              text: 'Metas, produtividade e visão de equipe para coordenadores e gerentes — Google Workspace no fluxo.',
            },
            {
              title: 'Metas, produtividade e visão de equipe',
              text: 'Para coordenadores e gerentes — Google Workspace no fluxo.',
            },
            {
              title: 'Enriquecimento de dados inteligente',
              text: 'Leads com dados enriquecidos diretamente das melhores fontes de pesquisa, tornando o contato ainda mais certeiro.',
            },
          ],
          views: [
            { id: 'painel', label: 'Painel', brand: 'CRM COMERCIAL' },
            { id: 'agenda', label: 'Agenda', brand: 'AGENDA' },
            { id: 'leads', label: 'Leads', brand: 'LEADS' },
          ],
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
          apiId: 'PainelDeConsultas',
        },
        {
          title: 'Integrações B2G e B2B',
          text: 'Onboarding de clientes e instituições, conexão com bases e APIs externas.',
          apiId: 'IntegracoesB2GB2B',
        },
        {
          title: 'Suporte em produção',
          text: 'Tickets de interface, ajustes de fluxo e patches com prioridade conforme impacto na base.',
          apiId: 'SuporteEmProducao',
        },
      ],
      api: {
        host: 'api.previnity.internal',
        prompt: 'previnity',
        org: 'Previnity Soluções Inteligentes',
        role: 'platform_ops',
      },
      pages: [
        { id: 'main', label: 'Previnity', mockup: 'projectapi' },
        {
          id: 'hub',
          label: 'PrevinityHub',
          title: 'PrevinityHub',
          headline: 'Google interno para processos, documentação e comunicação do time',
          text: 'Na Previnity, documentar procedimentos, regras de negócio e o caminho das pedras virou rotina — mas deixar isso no bloco de notas não escalava. Criei o PrevinityHub para democratizar o conhecimento: um centralizador focado em resolução rápida, para ninguém ficar travado redescobrindo o que o time já resolveu. Tutoriais de onboarding, fluxos operacionais e respostas para problemas específicos ficam acessíveis em segundos. Desenvolvido em PHP e SQLite, priorizando leveza e fluidez no dia a dia.',
          mockup: 'previnityhub',
          url: 'hub.previnity.internal',
          views: [
            { id: 'hub', label: 'Hub & Chat', brand: 'PREVINITY · HUB' },
            { id: 'admin', label: 'Painel Admin', brand: 'PREVINITY · ADMIN' },
            { id: 'audit', label: 'Auditoria', brand: 'PREVINITY · AUDIT' },
          ],
          scope: [
            {
              title: 'Tudo num só lugar',
              text: 'De tutoriais de onboarding para novos colaboradores até a solução exata para problemas específicos — documentação operacional centralizada.',
              apiId: 'CardsDeProcesso',
            },
            {
              title: 'Busca ágil',
              text: 'Cards separados por setor e tags para encontrar procedimentos, checklists e referências em segundos.',
              apiId: 'BuscaPorSetor',
            },
            {
              title: 'Comunicação integrada',
              text: 'Chat interno na própria plataforma — troca de informações e comunicação do time sem sair do hub.',
              apiId: 'ChatInterno',
            },
            {
              title: 'Segurança e governança',
              text: 'Acesso individual com login e senha. Área admin com auditoria completa — autoria, edições e ações rastreáveis para manter a informação confiável e atualizada.',
              apiId: 'AuditoriaDeAcoes',
            },
          ],
        },
        {
          id: 'pipeline',
          label: 'Pipeline de dados',
          title: 'Pipeline de dados',
          headline: 'Automatizando higienização de mais de 1M linhas por execução',
          text: 'Scripts Python que rodam integrados às consultas da Previnity: higienizam bases enormes, validam registros e exportam CSV pronto para operação — eliminando horas de trabalho manual repetitivo.',
          mockup: 'pipeline',
          url: 'pipeline.previnity.internal',
          views: [
            { id: 'csv', label: 'CSV enriquecido', brand: 'PIPELINE · CSV' },
            { id: 'python', label: 'Script Python', brand: 'PIPELINE · PY' },
          ],
          scope: [
            {
              title: 'Ingestão em massa',
              text: 'Mais de 1 milhão de linhas por execução — carga, parse e normalização.',
              apiId: 'IngestaoEmMassa',
            },
            {
              title: 'Higienização',
              text: 'Validação e correção com regras explícitas; erro abaixo de 0,1%.',
              apiId: 'Higienizacao',
            },
            {
              title: 'Export operacional',
              text: 'CSV pronto para negativações, relatórios e repasses.',
              apiId: 'ExportOperacional',
            },
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
      highlights: ['+4.700 clientes', 'PrevinityHub', 'Pipeline de dados', '30+ consultas'],
      tech: ['PHP', 'SQLite', 'Front-end', 'Python', 'MySQL', 'Integrações'],
      accent: '#06B6D4',
    },
    {
      id: 3,
      title: 'Aplicari Desenvolvimento Web',
      headline: 'Agência publicitária e marketing',
      status: 'Em produção',
      year: 'Em Produção',
      brief: 'Sites, campanhas, lojas virtuais, hospedagem e manutenção — do briefing ao ar.',
      overview:
        'Na Aplicari, minha atuação vai além de criar sites — hoje cuido de mais de 100 projetos ativos, em segmentos e stacks bem diferentes. Garanto a estabilidade dos projetos, faço as manutenções quando solicitadas e centralizo tudo nos painéis de hospedagem. Para escalar essa gestão, montei um ecossistema de monitoramento: é raro algum site sair do ar sem eu ser avisado na hora.',
      scope: [
        {
          title: 'Sites & landings',
          text: 'Corporativos e campanhas do briefing ao ar.',
          apiId: 'SitesELandings',
        },
        {
          title: 'E-commerce',
          text: 'Lojas virtuais integradas à operação comercial.',
          apiId: 'ECommerce',
        },
        {
          title: 'Infra web',
          text: 'Hospedagem, DNS, e-mail e manutenção contínua.',
          apiId: 'InfraWeb',
        },
      ],
      api: {
        host: 'api.aplicari.',
        prompt: 'aplicari',
        org: 'Aplicari',
        role: 'web_production',
      },
      pages: [
        { id: 'main', label: 'Aplicari', mockup: 'projectapi' },
        {
          id: 'projetos',
          label: 'Projetos',
          title: 'Projetos',
          headline: 'Sites em produção na Aplicari',
          text: 'Sites que tive o prazer de desenvolver na Aplicari.<br> Passe o mouse ou clique em um projeto para pré-visualizá-lo no navegador ao lado.',
          mockup: 'aplicari-projects',
          projects: [
            {
              name: 'TaxResearch',
              tag: 'Site',
              url: 'https://taxresearch.com.br/',
            },
            {
              name: 'Fantastic Candy Tubes',
              tag: 'Site',
              url: 'https://aplicomunica.com/acesso/candytubes.com.br/',
            },
            {
              name: 'Lindoia Gourmet',
              tag: 'Site',
              url: 'https://aplicomunica.com/acesso/lindoia.gourmet.com.br/',
            },
            {
              name: 'Marco Bueno',
              tag: 'Site',
              url: 'https://marcobueno.com.br/',
            },
            {
              name: 'Previnity',
              tag: 'Site',
              url: 'https://aplicomunica.com/acesso/newprevinity/',
            },
            {
              name: 'Inter Plaza',
              tag: 'Site',
              url: 'https://interplaza.com.br/',
            },
            {
              name: 'Inter Plaza Simulador',
              tag: 'Site',
              url: 'https://planodesaudeinter.com.br/',
            },
            {
              name: 'Estrutural Aço',
              tag: 'Site',
              url: 'https://www.estruturalaco.com.br/',
            },
            {
              name: 'Conexão Log',
              tag: 'Site',
              url: 'https://conexaolog.com.br/',
            },
          ],
        },
        {
          id: 'monitor',
          label: 'Monitor-Web',
          title: 'Monitor-Web',
          headline: 'Ecossistema interno de monitoramento e hospedagem.',
          text: 'Para escalar a gestão de inúmeros sites ativos, desenvolvi um painel de controle geral próprio: verificação de uptime em lote, alertas de SSL, cadastro de novas URLs e visão centralizada dos painéis de hospedagem. Tudo com sistema de notificações para que, se algo saia do esperado, a correção venha de forma rápida e assertiva.',
          mockup: 'monitor-web',
          url: 'monitor.web',
          scope: [
            {
              title: 'Dashboard em tempo real',
              text: 'Status online/offline, validade de SSL e motivo de falha — tudo numa única tela.',
            },
            {
              title: 'Verificação em lote',
              text: 'Checagem automatizada de dezenas de sites com barra de progresso e filtros.',
            },
            {
              title: 'Gestão de sites',
              text: 'Cadastro e remoção de URLs monitoradas com validação de endereço completo.',
            },
            {
              title: 'Painéis de hospedagem',
              text: 'Clientes, servidores tudo com um rápido acesso aos painéis, suporte e login com acesso ágil num clique.',
            },
          ],
          views: [
            { id: 'dashboard', label: 'Dashboard', brand: 'MONITOR · DASHBOARD' },
            { id: 'sites', label: 'Sites', brand: 'MONITOR · SITES' },
            { id: 'hosting', label: 'Hospedagem', brand: 'MONITOR · HOSTING' },
          ],
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
      id: 6,
      title: 'Infraestrutura',
      headline: 'Montando do zero a infra do escritório TaxResearch',
      status: 'Entregue',
      year: '2024',
      brief: 'Rede estruturada, VPN, NAS, biometria e suporte remoto em Vila Olímpia.',
      overview:
        'Escritório da TaxResearch em Vila Olímpia montado do zero: cabeamento, switches, VPN para NAS TerraMaster, biometria, nobreaks e suporte remoto para todas as máquinas e e-mails dos colaboradores.',
      scope: [
        {
          title: 'Rede estruturada',
          text: 'Cabeamento, switches e load balance para 32 postos ativos.',
          apiId: 'RedeEstruturada',
        },
        {
          title: 'Acesso remoto',
          text: 'VPN para NAS e recursos internos com segurança.',
          apiId: 'AcessoRemoto',
        },
        {
          title: 'Segurança & suporte',
          text: 'Biometria, permissões e suporte de hardware quando algo quebra.',
          apiId: 'SegurancaESuporte',
        },
      ],
      api: {
        host: 'api.taxresearch.',
        prompt: 'infra',
        org: 'Infraestrutura',
        role: 'infrastructure',
      },
      pages: [
        { id: 'main', label: 'Infraestrutura', mockup: 'projectapi' },
        {
          id: 'rede',
          label: 'Rede & VPN',
          title: 'Rede & VPN',
          headline: 'Infraestrutura de rede do escritório Vila Olímpia',
          text: 'Cabeamento, switches gerenciáveis, VPN para NAS TerraMaster e suporte remoto — 32 postos com uptime acima de 99,8%.',
          mockup: 'projectapi',
          scope: [
            {
              title: 'Cabeamento & switches',
              text: 'Rede estruturada com switches gerenciáveis e load balance para 32 postos.',
              apiId: 'CabeamentoESwitches',
            },
            {
              title: 'VPN & NAS',
              text: 'Acesso remoto seguro ao NAS TerraMaster e recursos internos do escritório.',
              apiId: 'VpnENas',
            },
            {
              title: 'Uptime & monitoramento',
              text: 'Operação contínua com uptime de rede acima de 99,8% e suporte quando algo quebra.',
              apiId: 'UptimeEMonitoramento',
            },
          ],
        },
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
      image: null,
      images: [],
      tech: ['Redes', 'VPN', 'NAS', 'Windows Server'],
      accent: '#F97316',
    },
  ],

  about: {
    headline: 'Antes de ser profissão, era curiosidade.',
    pull: 'Brinquedo novo em casa não durava muito fechado. Abrir, ver como encaixava, tentar montar diferente — isso me pegava antes de qualquer brincadeira.',
    paragraphs: [
      'Desde cedo, a vontade de entender como as coisas funcionam me levou a criar, adaptar e melhorar. A magia estava em desmontar, entender os funcionamentos, testar, tentar de outro jeito. Essa mentalidade me acompanha até hoje, gerando insights e impulsionando soluções ao longo da minha carreira.',
      'No dia a dia, sou reconhecido pela agilidade na resolução de problemas e pela facilidade em transitar entre diferentes áreas da tecnologia. Meu objetivo é sempre facilitar processos, modernizar estruturas e entregar valor real em todas as empresas por onde minha atuação passa.',
    ],
    signoff: 'O contato está logo abaixo, se quiser conversar.',
  },

  contact: {
    headline: 'Vamos conversar, aberto para conversas e projetos',
    text: 'Estou aberto a oportunidades, projetos e novas conexões. Se você tem uma ideia, uma vaga ou um desafio em mente, envie uma mensagem e retornarei o mais breve possível.',
    email: 'edu.fiorini.sn@gmail.com',
    linkedin: 'linkedin.com/in/eduardo-fiorini',
    github: 'github.com/F1orini',
    form: {
      title: 'Enviar mensagem',
      hint: 'Preenche os campos — ao enviar, abre seu cliente de e-mail com tudo pronto.',
    },
    channels: [
      {
        id: 'email',
        label: 'E-mail',
        value: 'edu.fiorini.sn@gmail.com',
        note: 'Canal preferido',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        value: 'linkedin.com/in/eduardo-fiorini',
        note: 'Perfil profissional',
      },
      {
        id: 'github',
        label: 'GitHub',
        value: 'github.com/F1orini',
        note: 'Código & projetos',
      },
    ],
  },
};
