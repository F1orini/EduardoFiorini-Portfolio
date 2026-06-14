window.EF = {
  meta: {
    name: '>/Eduardo Fiorini',
    role: 'Desenvolvedor Front-end · Especialista em T.I',
    org: 'BJ Group',
  },

  hero: {
    greeting: 'Olá! Me chamo Eduardo',
    pitch:
      'Antes de escrever código, aprendi a pensar em fluxo, e isso mudou como enxergo a tecnologia: o problema raramente está só na ferramenta, está no fluxo em volta dela. Esse mesmo instinto me acompanha até hoje !',
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
        'Minha atuação na TaxResearch do Brasil se estabelece como elo tecnológico para a entrega dos melhores resultados nos serviços prestados. No suporte interno, atendo equipamentos, contas de e-mail da equipe, permissões de acesso e ajustes pontuais em sistemas, em geral resolvido por acesso remoto. Paralelamente, atuo no desenvolvimento de novas soluções tecnológicas da TaxResearch Technologies: observo a operação, mantenho contato direto com colaboradores dos diversos setores para entender demanda real e desenvolver ferramentas e sistemas completos, sob medida, que melhoram fluxos internos e agilizam processos antes dependentes de workaround manual.',
      scope: [
        {
          title: 'Suporte interno de T.I',
          text: 'Hardware, diagnóstico e resolução quando a operação trava, sem fila externa.',
          apiId: 'TaxResearchTechnologies',
        },
        {
          title: 'E-mail e acessos',
          text: 'Configuração de e-mail, liberações e adequações de sistema via acesso remoto.',
          apiId: 'TaxResearchTechnologies',
        },
        {
          title: 'Desenvolvimento na TaxResearch Technologies',
          text: 'Atuo na área de desenvolvimento de novas soluções tecnológicas da TaxResearch Technologies, da ideia à ferramenta em produção.',
          apiId: 'TaxResearchTechnologies',
        },
        {
          title: 'Contato direto com os setores',
          text: 'Observação e conversa frequente com colaboradores dos diversos setores para entender fluxo real, gargalo e necessidade antes de codar.',
          apiId: 'TaxResearchTechnologies',
        },
        {
          title: 'Sistemas sob medida',
          text: 'Ferramentas e sistemas completos desenvolvidos para melhorar fluxos e demandas internas, agilizando processos que hoje ainda travam a operação.',
          apiId: 'TaxResearchTechnologies',
        },
      ],
      howItWorks: [
        {
          title: 'Demanda chega, eu diagnostico',
          text: 'Suporte pontual, liberação de acesso ou pedido de nova ferramenta,  entendo o contexto, quem usa e o que não pode quebrar.',
        },
        {
          title: 'Remoto quando dá, presencial quando precisa',
          text: 'E-mail, permissões e adequações de sistema via acesso remoto; hardware e casos críticos entram na fila com prioridade clara.',
        },
        {
          title: 'Levantamento com quem opera',
          text: 'Converso com os setores envolvidos, observo o fluxo atual e fecho o escopo do que precisa existir de fato, não o que parece bonito no papel.',
        },
        {
          title: 'Desenvolvimento e entrega',
          text: 'Construo a solução sob medida, valido com quem pediu e deixo rodando,  CRM comercial, automações e painéis internos entram nessa linha.',
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
          text: 'Desenvolvido em conjunto com o time: sou responsável pelo front-end, com foco na utilização do usuário e na integração fluida com o back-end estruturado construído pela equipe. Interface responsiva e de fácil utilização, pensada para otimizar demandas, melhorar os fluxos do time comercial e eliminar workarounds espalhados por diversas plataformas.',
          mockup: 'taxcomercial',
          url: 'TaxResearch.Technologies',
          scope: [
            {
              title: 'Agenda compartilhada',
              text: 'Calendário unificado entre corretores, reuniões, follow-ups e bloqueios visíveis para quem precisa coordenar.',
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
              text: 'Metas, produtividade e visão de equipe para coordenadores e gerentes, Google Workspace no fluxo.',
            },
            {
              title: 'Metas, produtividade e visão de equipe',
              text: 'Para coordenadores e gerentes, Google Workspace no fluxo.',
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
      headline: 'Soluções inteligentes para o mercado financeiro',
      status: 'Em produção',
      year: 'Em Produção',
      brief: 'Desenvolvimento, plataforma para +4.700 clientes, ferramentas internas, dados em lote, suporte e infraestrutura da holding.',
      overview:
        'Na Previnity, empresa mãe da holding em que trabalho, meu cargo é desenvolvedor júnior, mas a atuação vai muito além do título. O dia a dia atravessa plataforma, integração, dados, suporte e infraestrutura, em stacks bem diferentes, sempre com a mesma premissa: manter mais de 4.700 clientes atendidos sem travar o que já está em produção.<br><br>Desenvolvo melhorias contínuas na plataforma online e ferramentas internas que organizam fluxos e ganham agilidade no time. Faço integrações com novos clientes, adaptando regras e conexões à necessidade de cada operação. Rodo demandas internas de higienização e negativação em grandes volumes de lote. No suporte, acompanho chamados da identificação do erro até a resolução no código, em contato próximo com clientes e time por e-mail e grupos de WhatsApp. Na infraestrutura, configuro e mantenho o hardware das empresas da holding, oriento compras de equipamentos e tecnologias, e cuido de boas práticas para o escritório evoluir.',
      scope: [
        {
          title: 'Plataforma em produção',
          text: 'Evolução contínua do painel online com +4.700 clientes ativos, correções urgentes e melhorias sem derrubar a operação.',
          apiId: 'PainelDeConsultas',
        },
        {
          title: 'Ferramentas internas',
          text: 'Desenvolvimento de soluções que organizam o time e aceleram fluxos internos, do hub de conhecimento ao pipeline de dados.',
          apiId: 'FerramentasInternas',
        },
        {
          title: 'Integrações com clientes',
          text: 'Onboarding de novos clientes e instituições, ajustando stack, regras e APIs ao que cada operação precisa.',
          apiId: 'IntegracoesB2GB2B',
        },
        {
          title: 'Dados em lote',
          text: 'Higienização e negativações em grande volume, demandas internas com consistência e previsibilidade entre execuções.',
          apiId: 'Higienizacao',
        },
        {
          title: 'Suporte em produção',
          text: 'Atendimento à plataforma online, da identificação do problema à correção no código, com prioridade conforme impacto na base.',
          apiId: 'SuporteEmProducao',
        },
        {
          title: 'Infraestrutura da holding',
          text: 'Configuração e manutenção de hardware das empresas do grupo, consultoria para compras de equipamentos e boas práticas no escritório.',
          apiId: 'InfraHolding',
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
          text: 'Na Previnity, documentar procedimentos, regras de negócio e o caminho das pedras virou rotina, mas deixar isso no bloco de notas não escalava. Criei o PrevinityHub para democratizar o conhecimento: um centralizador focado em resolução rápida, para ninguém ficar travado redescobrindo o que o time já resolveu. Tutoriais de onboarding, fluxos operacionais e respostas para problemas específicos ficam acessíveis em segundos. Desenvolvido em PHP e SQLite, priorizando leveza e fluidez no dia a dia.',
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
              text: 'De tutoriais de onboarding para novos colaboradores até a solução exata para problemas específicos, documentação operacional centralizada.',
              apiId: 'CardsDeProcesso',
            },
            {
              title: 'Busca ágil',
              text: 'Cards separados por setor e tags para encontrar procedimentos, checklists e referências em segundos.',
              apiId: 'BuscaPorSetor',
            },
            {
              title: 'Comunicação integrada',
              text: 'Chat interno na própria plataforma, troca de informações e comunicação do time sem sair do hub.',
              apiId: 'ChatInterno',
            },
            {
              title: 'Segurança e governança',
              text: 'Acesso individual com login e senha. Área admin com auditoria completa, autoria, edições e ações rastreáveis para manter a informação confiável e atualizada.',
              apiId: 'AuditoriaDeAcoes',
            },
          ],
        },
        {
          id: 'pipeline',
          label: 'Pipeline de dados',
          title: 'Pipeline de dados',
          headline: 'Automatizando processos de dados em grande escala.',
          text: 'Scripts Python integrados às consultas da Previnity automatizam o ciclo completo de dados em grande escala, ingestão, higienização com regras explícitas, com validação registro a registro e exportação pronto para operação. <br> O ganho está na previsibilidade: entregas repetíveis, consistência entre execuções e arquivos prontos para negativações, relatórios e repasses, com margem de erro controlada.',
          mockup: 'pipeline',
          url: 'pipeline.previnity.internal',
          views: [
            { id: 'csv', label: 'CSV enriquecido', brand: 'PIPELINE · CSV' },
            { id: 'python', label: 'Script Python', brand: 'PIPELINE · PY' },
          ],
          scope: [
            {
              title: 'Ingestão em massa',
              text: 'Mais de um milhão de linhas por execução, da carga ao parse e à normalização, com os dados prontos para seguir no fluxo.',
              apiId: 'IngestaoEmMassa',
            },
            {
              title: 'Higienização',
              text: 'Validação e correção com regras explícitas, registro a registro, mantendo consistência com margem de erro abaixo de 0,1%.',
              apiId: 'Higienizacao',
            },
            {
              title: 'Export operacional',
              text: 'Saída enriquecida em diversos formatos, CSV, planilhas e layouts definidos conforme a necessidade, pronta para negativações, relatórios e repasses.',
              apiId: 'ExportOperacional',
            },
          ],
        },
        {
          id: 'prevdev',
          label: 'Prev .dev',
          title: 'Prev .dev',
          headline: 'Captação de talentos com agilidade, do formulário à prova técnica.',
          text: 'Plataforma completa para captar novos talentos e integrar o time da Previnity. Criei tudo num fluxo só, pensado para ser rápido desde o primeiro contato e seguro na hora de decidir quem avança.<br><br>Do lado de fora, o candidato se inscreve na vaga, conhece a empresa e acompanha a candidatura. Do lado de dentro, o recrutador vê quem se inscreveu, gera provas avaliativas conforme a vaga, distribui códigos de acesso e consulta as avaliações já feitas, sem depender de planilha ou ferramenta paralela.',
          mockup: 'prevdev',
          url: 'prev.dev',
          views: [
            { id: 'candidatura', label: 'Candidatura', brand: 'PREV · CANDIDATURA' },
            { id: 'candidaturas', label: 'Candidaturas', brand: 'PREV · ADMIN' },
            { id: 'avaliacoes', label: 'Avaliações', brand: 'PREV · AVALIAÇÕES' },
            { id: 'codigos', label: 'Códigos & Provas', brand: 'PREV · PROVAS' },
          ],
          scope: [
            {
              title: 'Candidatura pública',
              text: 'Vaga aberta, área sobre a empresa e formulário completo para o candidato enviar dados, links e currículo.',
            },
            {
              title: 'Acompanhamento do candidato',
              text: 'Consulta de status da inscrição, para quem se candidatou saber em que etapa está sem precisar ficar no escuro.',
            },
            {
              title: 'Painel do recrutador',
              text: 'Visão centralizada de candidatos e vagas, com contato, links, status e data de cada inscrição recebida.',
            },
            {
              title: 'Provas avaliativas',
              text: 'Geração de códigos e provas por nível ou vaga, com prévia, edição e gabarito para o time decidir com critério.',
            },
            {
              title: 'Avaliações concluídas',
              text: 'Painel para checar provas já feitas, com nota, tempo, filtros e status de cada candidato avaliado.',
            },
          ],
        },
      ],
      howItWorks: [
        {
          title: 'Demanda de qualquer frente',
          text: 'Pode chegar como suporte, integração, lote de dados, evolução da plataforma ou infraestrutura, o primeiro passo é entender de onde veio e quem sente o impacto.',
        },
        {
          title: 'Contexto antes de executar',
          text: 'Volume, risco em produção e quem depende daquilo definem se é patch, ferramenta nova, ajuste de integração ou intervenção no hardware.',
        },
        {
          title: 'Entrega no canal certo',
          text: 'Código, integração, processamento em lote ou configuração física, cada demanda sai pelo caminho que resolve de fato, não pelo que parece mais rápido no papel.',
        },
        {
          title: 'Comunicação próxima',
          text: 'E-mail e grupos de WhatsApp mantêm cliente e time alinhados, para nada ficar solto entre o diagnóstico e a resolução.',
        },
      ],
      highlights: ['+4.700 clientes', 'Plataforma & suporte', 'Dados em lote', 'Infra da holding'],
      tech: ['PHP', 'SQLite', 'Front-end', 'Python', 'MySQL', 'Integrações'],
      accent: '#06B6D4',
    },
    {
      id: 3,
      title: 'Aplicari Desenvolvimento Web',
      headline: 'Produção web, hospedagem e monitoramento para mais de 100 projetos.',
      status: 'Em produção',
      year: 'Em Produção',
      brief: 'Sites, campanhas, e-commerce, hospedagem e manutenção, com ecossistema próprio de monitoramento do briefing ao ar.',
      overview:
        'Na Aplicari, agência de publicidade e marketing da holding, cuido da produção web de ponta a ponta. Desenvolvo sites institucionais, landings de campanha e lojas virtuais, configuro hospedagem, DNS e e-mail, e mantenho no ar o que já foi entregue. São mais de 100 projetos ativos, em segmentos e stacks bem diferentes, cada um com prazo, público e necessidade próprios. Para acompanhar essa base, criei o Monitor-Web: painel interno com uptime, SSL e alertas antes de algo cair sem eu saber.<br><br>Quando o projeto pede, converso com o cliente para extrair a essência do que ele quer no resultado final, alinhar expectativa e seguir no desenvolvimento com o caminho certo desde o início.',
      scope: [
        {
          title: 'Sites & landings',
          text: 'Institucionais e páginas de campanha do briefing ao deploy, com foco em entrega dentro do prazo comercial.',
          apiId: 'SitesELandings',
        },
        {
          title: 'E-commerce',
          text: 'Lojas virtuais integradas à operação comercial, do layout à configuração em produção.',
          apiId: 'ECommerce',
        },
        {
          title: 'Hospedagem & infra web',
          text: 'DNS, e-mail, painéis de hospedagem e publicação, tudo centralizado para não perder o fio entre projetos.',
          apiId: 'InfraWeb',
        },
        {
          title: 'Monitor-Web',
          text: 'Ecossistema interno de monitoramento: uptime em lote, SSL, cadastro de URLs e alertas antes do cliente perceber a queda.',
          apiId: 'MonitorWeb',
        },
        {
          title: 'Manutenção contínua',
          text: 'Ajustes, correções e evoluções depois do lançamento, para a base ativa continuar estável ao longo do tempo.',
          apiId: 'ManutencaoContinua',
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
              text: 'Status online/offline, validade de SSL e motivo de falha, tudo numa única tela.',
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
          title: 'Briefing e escopo',
          text: 'Entendo o objetivo da peça, o prazo e quem vai usar. Quando precisa, reúno com o cliente para alinhar o resultado final antes de codar.',
        },
        {
          title: 'Desenvolvimento até o ar',
          text: 'Layout, código, hospedagem e DNS no mesmo fluxo. O projeto sobe sem repasse entre várias pontas ou fila esquecida.',
        },
        {
          title: 'Monitoramento desde o dia um',
          text: 'Cada URL entra no Monitor-Web com checagem de uptime e SSL. Se algo falhar, o alerta chega antes do cliente perceber.',
        },
        {
          title: 'Manutenção e evolução',
          text: 'Depois do lançamento, ajustes, conteúdo e correções continuam comigo. A operação não termina no deploy.',
        },
      ],
      highlights: ['100+ projetos ativos', 'Monitor-Web', 'Hospedagem & DNS', 'Manutenção contínua'],
      image: null,
      images: [],
      tech: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
      accent: '#0EA5E9',
    },
    {
      id: 6,
      title: 'Infraestrutura',
      headline: 'Eletrotécnica, rede e hardware: infraestrutura de ponta a ponta.',
      status: 'Entregue',
      year: '2024',
      brief: 'Formação em eletrotécnica, redes estruturadas, segurança e hardware, com foco em diagnóstico e infra estável.',
      overview:
        'Minha formação em eletrotécnica sustenta uma base que vai além do software: entendo elétrica, distribuição de energia, redes estruturadas, cabeamento e sistemas de segurança como partes de um mesmo quebra-cabeça. Hardware não é caixa preta para mim, sei como os componentes se relacionam, do microcomponente ao equipamento montado, e manuseio ferramentas com naturalidade para diagnosticar, instalar ou ajustar.<br><br>Quando aparece uma manutenção nova, absorvo rápido: leio o contexto, entendo o funcionamento e aplico. Na resolução de problemas, parto do sintoma até a causa, seja elétrica, rede ou hardware, sempre buscando corrigir com o mínimo de interrupção. Prefiro antecipar falha a apagar incêndio: infra boa é a que funciona de forma estável e previsível, para o time operar sem ficar refém de queda ou improviso.',
      scope: [
        {
          title: 'Base eletrotécnica',
          text: 'Formação e entendimento de elétrica, distribuição de energia e componentes, do microcomponente ao equipamento montado.',
          apiId: 'BaseEletrotecnica',
        },
        {
          title: 'Redes estruturadas',
          text: 'Cabeamento, switches, load balance e distribuição de rede para operação estável em escala.',
          apiId: 'RedeEstruturada',
        },
        {
          title: 'Segurança & acesso',
          text: 'Biometria, controle de acesso e camadas de segurança física e lógica no ambiente.',
          apiId: 'SegurancaESuporte',
        },
        {
          title: 'Hardware & manutenção',
          text: 'Diagnóstico, uso de ferramentas e facilidade para aprender novas manutenções quando a demanda pede ajuste.',
          apiId: 'HardwareManutencao',
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
          id: 'safestart',
          label: 'SafeStart',
          title: 'SafeStart',
          headline: 'Antifurto inteligente para motocicletas.',
          text: 'Desenvolvido como Trabalho de Conclusão de Curso de eletrotécnica, o SafeStart partiu de uma pergunta direta: como dificultar o uso de uma motocicleta por quem não tem autorização? A resposta foi controlar a partida por autenticação eletrônica, liberando a ignição só depois que o sistema reconhece quem pode ligar a moto.<br><br>A solução usa NFC (Near Field Communication). Antes de qualquer partida, o condutor apresenta uma tag autorizada ou autentica pelo smartphone. Sem credencial válida, a ignição permanece bloqueada. Com ela, o circuito libera e a moto pode funcionar normalmente. É um fluxo objetivo, difícil de burlar por quem não tem acesso à credencial.<br><br>No hardware, o projeto reúne um microcontrolador e um módulo NFC: o microcontrolador processa a lógica em C/C++, o módulo lê a tag ou o dispositivo móvel e decide se a partida pode seguir.<br><br>O SafeStart demonstra na prática como eletrônica embarcada, automação e controle de acesso viram uma solução acessível e de baixo custo, com aplicação real no dia a dia.',
          mockup: 'canva-embed',
          embed: {
            src: 'https://www.canva.com/design/DAGOrDvsfXQ/aWlT80TIFKPEAQN-P7g5kA/view?embed',
            url: 'https://www.canva.com/design/DAGOrDvsfXQ/aWlT80TIFKPEAQN-P7g5kA/view',
            title: 'SafeStart: Sistema Antifurto Inteligente para Motocicletas',
            author: 'Eduardo Fiorini',
          },
          scope: [
            {
              title: 'Autenticação por proximidade',
              text: 'Tag NFC ou smartphone antes de liberar a ignição. Sem credencial válida, a moto simplesmente não parte.',
            },
            {
              title: 'Microcontrolador & módulo NFC',
              text: 'Microcontrolador com lógica em C/C++ e módulo NFC responsável pela leitura e validação das credenciais.',
            },
            {
              title: 'Lógica antifurto',
              text: 'Bloqueio de partidas não autorizadas e camada extra de proteção contra furtos e uso indevido da motocicleta.',
            },
          ],
        },
        {
          id: 'rede',
          label: 'Distribuição de rede',
          title: 'Distribuição de rede',
          headline: 'Dois links, balanceador, core, switches e nobreak num fluxo só.',
          text: 'Dois links de fibra entram no balanceador, que distribui o tráfego e assume o outro link se um cair. Do core, a rede desce para switches de acesso e chega nos postos, impressoras e NAS. Nobreak mantém links, core e switches ligados quando a energia oscila.',
          mockup: 'netdist',
          url: 'topologia.lan',
          brand: 'REDE · TOPOLOGIA',
          scope: [
            {
              title: 'Dois links de internet',
              text: 'Duas operadoras entrando na mesma topologia. Se um link cai, o outro segue.',
            },
            {
              title: 'Load balance',
              text: 'Balanceador no meio dos links, distribuindo tráfego e fazendo failover.',
            },
            {
              title: 'Switches & cabeamento',
              text: 'Core no centro, switches de acesso por piso ou função, cabo estruturado até a ponta.',
            },
            {
              title: 'Nobreak & energia',
              text: 'Nobreak no rack de rede alimentando links, core e switches em queda de luz.',
            },
          ],
        },
      ],
      howItWorks: [
        {
          title: 'Diagnóstico do ambiente',
          text: 'Entendo o espaço, a carga, quem usa e o que não pode parar. Elétrica, rede e segurança entram na mesma leitura inicial.',
        },
        {
          title: 'Planejamento da distribuição',
          text: 'Defino cabeamento, pontos de rede, energia, acesso remoto e segurança antes de executar, para não improvisar no meio da obra.',
        },
        {
          title: 'Implementação e configuração',
          text: 'Switches, VPN, NAS, biometria e nobreaks sobem configurados e testados, prontos para o time operar no dia seguinte.',
        },
        {
          title: 'Suporte e evolução',
          text: 'Depois da entrega, ajustes, manutenções e aprendizados novos entram no fluxo. Se algo quebra, parto do componente até a causa.',
        },
      ],
      highlights: ['Eletrotécnica', 'SafeStart TCC', 'Redes estruturadas', 'Hardware'],
      image: null,
      images: [],
      tech: ['Eletrotécnica', 'Embarcados', 'NFC', 'Redes', 'Hardware'],
      accent: '#F97316',
    },
  ],

  about: {
    headline: 'Antes de ser profissão, era curiosidade.',
    pull: 'Brinquedo novo em casa não durava muito tempo fechado. <br> Abrir, ver como encaixava, tentar montar de uma forma diferente, isso me pegava antes de qualquer brincadeira.',
    paragraphs: [
      'Desde cedo, a vontade de entender como as coisas funcionavam me levou a criar, adaptar e melhorar. A magia estava em desmontar, entender os funcionamentos, testar, tentar de outro jeito. Essa mentalidade me acompanha até hoje, gerando insights e impulsionando soluções ao longo da minha carreira.',
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
      hint: 'Preenche os campos, ao enviar, abre seu cliente de e-mail com tudo pronto.',
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
