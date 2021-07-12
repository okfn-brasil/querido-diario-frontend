import { of } from 'rxjs';

export const explore = {
  title:
    'Explore os diários oficiais dos municípios e fique de olho nas ações dos governos',
};

interface Sizeable {
  width: number;
  height: number;
}

const square = (value: number): Sizeable => {
  return { width: value, height: value };
};

interface Icon {
  file: string;
  width: number;
  height: number;
  type: string;
}

const icon = (file: string, size: Sizeable): Icon => {
  return { file, ...size, type: 'icon' };
};

export const EVOLUTION_DATA = {
  title: 'Acompanhe a evolução do Querido Diário',
  items: [
    {
      icon: 'check',
      count: 12,
      text: 'Cidades já na plataforma',
    },
    {
      icon: 'search',
      count: 12,
      text: 'Cidades já têm robôs para coletar diários',
    },
    {
      icon: 'pin',
      count: 12,
      text: 'Cidades já foram mapeadas pelo censo',
    },
  ],
};

interface Follow {}
// @todo this is service binding remeber
// forgot my specification, what means, duplicate data on json,
// in service, you calculates de input, calcultates duplication

// first sep: you  have to receive dirence of icons (file attribute), for exemple. and in the default put data
// second step, build html (middle, combinatuon),
// this can be simple

// gao rows, etc, be simple, use directive
// from where came tge bem?

export const HELP = {
  title: 'Precisamos do seu apoio',
  items: [
    {
      icon: {
        file: 'document',
        height: 56,
        width: 40,
      },
      title: 'Nossa próxima meta',
      text: 'Nossa próxima meta',
      actions: [
        {
          text: 'Doe',
          icon: 'arrow',
          to: '/doe',
          style: 'button-primary',
        },
        {
          text: 'Ver todas as metas',
          icon: 'arrow',
          to: '/doe',
          style: 'btn-secondary',
        },
      ],
    },
    {
      icon: {
        file: 'document',
        height: 56,
        width: 40,
      },
      title: 'Contribua como desenvolvedor',
      text: 'Contribua com código - o Querido Diário é um projeto de código aberto, então qualquer pessoa pode colaborar com novas funcionalidades para a plataforma',
      actions: [
        {
          text: 'Comece por aqui',
          icon: 'arrow',
          to: '/doe',
          style: 'btn-secondary',
        },
      ],
    },
    {
      icon: {
        file: 'document',
        height: 56,
        width: 40,
      },
      title: 'Cadastre um município',
      text: 'Cadastre um município - precisamos saber onde as prefeituras publicam seus diários oficiais',
      actions: [
        {
          text: 'Doe',
          icon: 'arrow',
          to: '/doe',
          style: 'btn-secondary',
        },
      ],
    },
  ],
};

export const GOALS = {
  title: 'Nossas Metas',
  text: 'O querido diário está só começando! Temos vários objetivos para o projeto, e você pode nos ajudar a chegar lá:',
  items: [
    {
      icon: {
        file: 'ok-hand',
        height: 120,
        width: 73,
      },
      title: 'Chegamos aqui',
      text: 'Já export construímos toda a infraestrutura e libertamos 12 capitais.',
      money: 'R$ 2000',
    },
    {
      icon: {
        file: 'ok-hand',
        height: 120,
        width: 73,
      },
      title: 'Chegamos aqui',
      text: 'Já export construímos toda a infraestrutura e libertamos 12 capitais.',
      money: 'R$ 2000',
      actions: [
        {
          text: 'Ir para o catarse',
          to: 'Catarse',
        },
      ],
    },
    {
      icon: {
        file: 'ok-hand',
        height: 120,
        width: 73,
      },
      title: 'Chegamos aqui',
      text: 'Já export construímos toda a infraestrutura e libertamos 12 capitais.',
      money: 'R$ 2000',
    },
    {
      icon: {
        file: 'ok-hand',
        height: 120,
        width: 73,
      },
      title: 'Chegamos aqui',
      text: 'Já export construímos toda a infraestrutura e libertamos 12 capitais.',
      money: 'R$ 2000',
    },
    {
      icon: 'ok-hand',
      title: 'Chegamos aqui',
      text: 'Já export construímos toda a infraestrutura e libertamos 12 capitais.',
      money: 'R$ 2000',
    },
  ],
};

export const INFOS = {
  title: 'Entenda',
  items: [
    {
      title: 'Nível de Acesso',
      text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
      actions: [
        {
          text: 'Ler mais',
          icon: 'right-arrow',
        },
      ],
    },
    {
      title: 'Glossário',
      text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
      actions: [
        {
          text: 'Ler mais',
          icon: 'right-arrow',
        },
      ],
    },
    {
      title: 'Como denunciar ou pedir informações',
      text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
      actions: [
        {
          text: 'Ler mais',
          icon: 'right-arrow',
        },
      ],
    },
  ],
};

export const trajectory = {
  title: 'Conheça a trajetória e próximos passos do Querido Diário',
  text: 'Saiba mais sobre o projeto',
};

export const REALIZATION = [
  {
    title: 'Realização',
    icons: [
      {
        file: 'logo-OK',
        height: 30,
        width: 126,
      },
      {
        file: 'logo-serenata',
        height: 40,
        width: 82,
      },
      {
        file: 'logo-embaixadores',
        height: 18,
        width: 116,
      },
    ],
  },
  {
    title: 'Apoio',
    icons: [
      { file: 'logo-Ilda', height: 17, width: 52 },
      { file: 'logo-jurema', height: 18, width: 80 },
      { file: 'logo-digitalocean', height: 18, width: 110 },
    ],
  },
];
