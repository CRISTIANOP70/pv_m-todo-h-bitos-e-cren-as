import { Module, Bonus, FaqItem, Testimonial } from "./types";

export const METADO_COPY = {
  price: {
    original: 445.0,
    current: 29.90,
    installments: "3x de R$ 10,47",
    saving: 415.10,
  },
  guaranteeText: "Garantia incondicional de 7 dias. Se não gostar, devolvemos todo o seu dinheiro com apenas um e-mail.",
};

export const MODULES_DATA: Module[] = [
  {
    id: 1,
    number: "MÓDULO 1",
    title: "Introdução — O Despertar",
    lessons: [
      {
        title: "Aula 1: O Problema Nunca Foi Você, Foi o Método",
        format: "PDF inteligente + áudio imersivo",
        benefit: "Entenda por que 40% das suas ações diárias rodam em piloto automático neurológico e como virar essa chave sem depender de força de vontade."
      }
    ]
  },
  {
    id: 2,
    number: "MÓDULO 2",
    title: "Dominando o Mecanismo Neural",
    lessons: [
      {
        title: "Aula 2: O Loop Invisível e os Hábitos Angulares",
        format: "PDF prático + áudio imersivo",
        benefit: "Como desarmar o ciclo de Deixa, Rotina e Recompensa que mantém comportamentos nocivos rodando em modo silencioso."
      },
      {
        title: "Aula 3: Crenças e Identidade — Técnica 'Estou me tornando'",
        format: "PDF de aplicação + áudio imersivo",
        benefit: "Aprenda a reescrever o que você acredita sobre si mesmo antes de tentar mudar o que faz, reconfigurando os gânglios da base."
      }
    ]
  },
  {
    id: 3,
    number: "MÓDULO 3",
    title: "Construindo o seu Sistema de 30 Dias",
    lessons: [
      {
        title: "Aula 4: O Sistema é Mais Forte que a Motivação",
        format: "Guia PDF + áudio imersivo",
        benefit: "Aplique a Regra dos 3 Hábitos para projetar um ecossistema e rotina tão simplificados que falhar se tornará biologicamente difícil."
      },
      {
        title: "Aula 5: O Plano Prático de 30 Dias (Semana 1 à 4)",
        format: "Checklist de ação + áudio imersivo",
        benefit: "O mapa rodoviário preciso dividido em 4 fases consecutivas de estabilização sináptica e neuroplasticidade guiada."
      }
    ]
  },
  {
    id: 4,
    number: "MÓDULO 4",
    title: "Blindagem e Conclusão",
    lessons: [
      {
        title: "Aula 6: Blindagem Mental — A Regra do 'Nunca Falhar 2x Seguidas'",
        format: "PDF de suporte + áudio assistido",
        benefit: "A estratégia psicológica usada por atletas de elite para neutralizar deslizes inevitáveis e evitar o efeito 'chutar o balde'."
      },
      {
        title: "Aula 7: Encerramento — Você é o Capitão do Navio",
        format: "PDF de autogestão + áudio de ancoragem",
        benefit: "Como solidificar e estender seu novo autoconceito de identidade para sustentar hábitos de alta performance para os próximos anos."
      }
    ]
  }
];

export const BONUSES_DATA: Bonus[] = [
  {
    id: 1,
    title: "Kit Emergência Recaída (Protocolo 60s Anti-Recaída)",
    badge: "BÔNUS 1",
    value: 47,
    icon: "Zap",
    targetAudience: "Quem quer blindar o foco mesmo sob forte estresse, ansiedade ou cansaço exaustivo.",
    resolvedObjection: "E se eu fraquejar, ter preguiça ou chutar o balde no meio do caminho?",
    benefit: "Guia prático e áudio acelerador de 60 segundos com indução binaural rápida baseado em técnicas de reprocessamento para interromper impulsos sabotadores na hora."
  },
  {
    id: 2,
    title: "Treinamento Secreto: O Erro #1 do Dia 21",
    badge: "BÔNUS 2",
    value: 67,
    icon: "ShieldAlert",
    targetAudience: "Quem costuma desistir exatamente quando o entusiasmo inicial e a novidade do processo acabam.",
    resolvedObjection: "Será que 30 dias é o suficiente ou é apenas o mito comercial dos 21 dias?",
    benefit: "Diagnóstico profundo revelando o reajuste hormonal pelo qual o cérebro passa no dia 21 de um hábito e o passo exato para ignorar a fadiga mental."
  },
  {
    id: 3,
    title: "Diário Impresso da Nova Identidade (PDF Rastreador)",
    badge: "BÔNUS 3",
    value: 37,
    icon: "BookOpen",
    targetAudience: "Pessoas que reagem melhor ao estímulo visual físico do papel e querem reduzir distração com telas.",
    resolvedObjection: "Eu acabo esquecendo de preencher ou perco a disciplina de monitorar pelo celular.",
    benefit: "Rastreador de neuro-hábitos para impressão, estruturado sob a ótica científica da autoeficácia de Bandura, com gatilhos semanais de autoconceito."
  },
  {
    id: 4,
    title: "Acesso permanente ao App Check30",
    badge: "BÔNUS 4",
    value: 97,
    icon: "Smartphone",
    targetAudience: "Pessoas que rendem muito mais através de jogos, recompensas de progresso e visualização clara de vitórias.",
    resolvedObjection: "Não tenho foco diário para manter consistência sem algum incentivo externo constante.",
    benefit: "Acesso total e vitalício ao web app gamificado com acompanhamento dinâmico, pontuação de experiência (XP), medalhas de consistência e marcador de streaks. Sem mensalidades extras."
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    question: "Funciona para quem já tentou de tudo e sempre acabou desistindo?",
    answer: "Sim! E o motivo é simples: o Método Hábitos e Crenças não conta com sua força de vontade (que é um recurso cerebral limitado e drena ao longo do dia) nem com empolgação barata. Ele age diretamente nos gânglios da base, desprogramando o piloto automático antigo no nível de hardware e instalando novas conexões no nível de identidade. Se você falhou antes, é porque operava no método do esforço biológico errado."
  },
  {
    id: 2,
    question: "Preciso dedicar muito tempo do meu dia a isso?",
    answer: "De forma alguma. O treinamento foi cirurgicamente desenhado para a vida moderna e corrida. As aulas em áudio duram entre 5 e 12 minutos — perfeitas para ouvir enquanto lava a louça, dirige para o trabalho ou se exercita. Os PDFs são infográficos de resumo prático que você lê em menos de 3 minutos."
  },
  {
    id: 3,
    question: "E se eu simplesmente não me adaptar ao formato de áudio/PDF?",
    answer: "Seu risco é absolutamente zero. Você tem 7 dias inteiros para experimentar o material. Se por qualquer razão decidir que não é para você — ou se simplesmente não gostar do timbre da voz ou layout —, basta nos enviar um e-mail. Devolvemos 100% do seu valor imediatamente e sem burocracia ou perguntas chatas."
  },
  {
    id: 4,
    question: "Por quanto tempo poderei acessar o curso?",
    answer: "O seu acesso é vitalício e definitivo. Ao adquirir hoje por apenas R$ 29,90, o portal de membros continuará liberado para você para sempre, incluindo quaisquer atualizações que fizermos no material no futuro."
  },
  {
    id: 5,
    question: "O App Check30 é grátis mesmo ou cobra alguma assinatura depois?",
    answer: "É totalmente gratuito para quem entra nesta oferta. Não há nenhuma taxa mensal, anuidade escondida ou cobrança adicional futura. O acesso premium vitalício ao App Check30 está integralmente coberto pelo seu pagamento único de R$ 29,90 neste lote promocional."
  },
  {
    id: 6,
    question: "É só mais um desses cursos sobre rotina de milagre da manhã?",
    answer: "Absolutamente não. Nós abominamos rituais inalcançáveis de acordar às 5h, banhos polares de gelo e cobranças extremas que geram ansiedade. Este método ensina reprogramação de autoconceito e engenharia de ambientes. Você escolhe OS HÁBITOS que deseja e encaixa o sistema de forma leve no seu estilo de vida atual, usando as leis naturais da biologia."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Ricardo Mendes",
    age: 34,
    role: "Analista de Sistemas",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    before: "Sempre começava projetos de hábitos na segunda e desistia na quinta. Me achava fraco e sem foco.",
    after: "Entendi que meu ambiente me sabotava. Consegui fixar a leitura diária e atividade física constante há 4 meses usando a regra de nunca falhar 2 dias seguidos.",
    story: "Tentei ler livros de hábitos mas todos pareciam exigir um esforço monstruoso. No Método Hábitos e Crenças entendi o papel do hardware cerebral. Mudou minha autopercepção. Valeu cada centavo!",
    date: "Aprovado há 2 dias"
  },
  {
    name: "Camila Rocha",
    age: 29,
    role: "Designer Gráfica & Autônoma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    before: "Procrastinação crônica que destruía meu faturamento. Planejava o dia perfeito, fazia 10% e me sentia culpada por burrice.",
    after: "Reduzi a fricção dos meus hábitos profissionais. Hoje meu foco começa sem atritos e o App Check30 gamificou minha consistência de maneira viciante.",
    story: "O Kit Emergência de 60 segundos salvou meus prazos várias vezes nas últimas semanas quando a procrastinação vinha com força. O app Check30 é sensacional e super prático de usar.",
    date: "Aprovada há 1 semana"
  },
  {
    name: "Leonardo Castilho",
    age: 41,
    role: "Gestor Comercial",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    before: "Dispersão excessiva no trabalho e negligência com alimentação. Sentia que a correria consumia toda minha força de vontade.",
    after: "Instalei 3 hábitos âncoras na minha rotina sem esforço absurdo. Meu foco triplicou e emagreci 4kg porque parei de comer compulsivamente por impulso automático.",
    story: "A mudança de foco em 'Crença e identidade' na Aula 3 desatou nós psicológicos de anos. Eu comprava cursos caríssimos de R$ 500 e nenhum me deu a clareza prática e científica que este me deu por R$ 29,90.",
    date: "Aprovado há 3 dias"
  }
];
