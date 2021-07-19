interface LevelDescription {
  text: string;
  button?: {
    text: string;
    href: string;
  };
}

interface Action {
  text: string;
  to: string;
  target: string;
}
export interface Level {
  icon: string;
  texts?: string[];
  descriptions?: string[];
  actions?: Action[]
}

const LEVELS: Level[] = [
  {
    icon: 'level-1',
    descriptions: [
      'Esta cidade ainda não está no Querido Diário. A plataforma é colaborativa e precisamos ter a fonte de publicação desse município. Você pode nos ajudar?',
    ],
    actions: [
      {
        text: 'Cadastre esse município no Censo',
        to: 'https://censo.ok.org.br',
        target: '_blank',
      },
    ],
  },
  {
    icon: 'level-1',
    descriptions: [
      'O Querido Diário possui a fonte de publicação do diário oficial desta cidade, mas ainda não consegue coletar os arquivos. <a href=\`https://www.catarse.me/queridodiario-okbr\`>Doe</a> e nos ajude a disponibilizar informações de mais cidades na plataforma.',
    ],
    texts: [
      'Acesse a fonte de publicação para ver os arquivos originais:'
    ]
  },
  {
    icon: 'level-1',
    texts: [
      'O Querido Diário encontrou a cidade, mas ainda não é capaz de realizar uma busca por termo. Doe e nos ajude a disponibilizar informações de mais cidades na plataforma.',
    ],
  },
  {
    icon: 'level-1',
    descriptions: [
      'Conseguimos disponibilizar os diários deste município em formato aberto! Assim você consegue realizar a busca nos documentos de um jeito fácil.',
    ],
  },
];

export function findLevel(level: number): Level {
  return LEVELS[level]
}
