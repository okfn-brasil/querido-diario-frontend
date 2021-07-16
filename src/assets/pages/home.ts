import { of } from 'rxjs';

export const EVOLUTION_LIST = [
  {
    layout: 'row',
    gap: 24,
    type: 'list',
    content: of([
      {
        type: 'icon',
        file: 'check',
        height: 76,
        width: 76,
      },
      {
        type: 'list',
        layout: 'column',
        content: of([
          {
            type: 'text',
            content: '12',
          },
          {
            type: 'text',
            content: 'Cidade já na plataforma',
          },
        ]),
      },
    ]),
  },
  {
    layout: 'row',
    gap: 24,
    type: 'list',
    content: of([
      {
        type: 'icon',
        file: 'search',
        height: 76,
        width: 76,
      },
      {
        type: 'list',
        layout: 'column',
        content: of([
          {
            type: 'text',
            content: '12',
          },
          {
            type: 'text',
            content: 'Cidades já têm robôs para coletar diários',
          },
        ]),
      },
    ]),
  },
  {
    layout: 'row',
    gap: 24,
    type: 'list',
    content: of([
      {
        type: 'icon',
        file: 'pin',
        height: 76,
        width: 76,
      },
      {
        type: 'list',
        layout: 'column',
        content: of([
          {
            type: 'text',
            content: '12',
          },
          {
            type: 'text',
            content: 'Cidades já foram mapeadas pelo censo',
          },
        ]),
      },
    ]),
  },
];

export const HELP_LIST = [
  {
    icon: { file: 'gift' },
    title: 'Nossa próxima meta',
    text: 'Hoje poderíamos ter 2226 cidades na plataforma, e você pode nos ajudar a chegar lá:',
    actions: [
      {
        text: 'Doe',
        link: '/doe',
        classes: ['orange-bg'],
      },
      {
        text: 'Ver todas as metas',
        link: '/doe',
        classes: ['yellow-bg'],
      },
    ],
  },
  {
    icon: { file: 'document' },
    title: 'Contribua como desenvolvedor',
    text: 'Contribua com código - o Querido Diário é um projeto de código aberto, então qualquer pessoa pode colaborar com novas funcionalidades para a plataforma',
    actions: [
      {
        text: 'Comece por aqui',
        link: '/doe',
        classes: ['yellow-bg'],
      },
    ],
  },
  {
    icon: { file: 'document' },
    title: 'Cadastre um município',
    text: 'Cadastre um município - precisamos saber onde as prefeituras publicam seus diários oficiais',
    actions: [
      {
        text: 'Comece por aqui',
        link: '/doe',
        classes: ['yellow-bg'],
      },
    ],
  },
];

export const GOAL_LIST = [
  {
    icon: { file: 'ok-hand', height: 120, width: 74 },
    title: 'Chegamos aqui',
    text: 'Já construímos toda a infraestrutura e libertamos 12 capitais.',
    subTitle: 'R$ 2.000',
  },
  {
    icon: { file: 'computer', height: 120, width: 116 },
    title: 'Plataforma turbinada!',
    text: '+ 100 municípios disponíveis na plataforma e mecanismo de busca mais eficiente.',
    subTitle: 'R$ 10.000',
    actions: [
      {
        text: 'Ir para o Catarse',
        icon: { file: 'right-arrow' },
      },
    ],
  },
  {
    icon: { file: 'project', height: 128, width: 108 },
    title: 'O Brasil é o limite!',
    text: 'Todas as cidades brasileiras com mais de 100 mil habitantes na plataforma.',
    subTitle: 'R$ 6.000',
    actions: [
      {
        text: 'Ir para o Catarse',
        icon: { file: 'right-arrow' },
      },
    ],
  },
  {
    icon: { file: 'graphics', height: 120, width: 108 },
    title: 'O Brasil é o limite!',
    text: 'Todas as cidades brasileiras com mais de 100 mil habitantes na plataforma.',
    subTitle: 'R$ 6.000',
    actions: [
      {
        text: 'Ir para o Catarse',
        icon: { file: 'right-arrow' },
      },
    ],
  },
];

export const ACCESS_LEVEL_LIST = [
  {
    title: 'Níveis de acesso',
    text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
    actions: [
      {
        text: 'Ler mais',
        icon: { file: 'right-arrow' },
      },
    ],
  },

  {
    title: 'Glossário',
    text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
    actions: [
      {
        text: 'Ler mais',
        icon: { file: 'right-arrow-white' },
      },
    ],
  },
  {
    title: 'Como denunciar ou pedir informações',
    text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
    actions: [
      {
        text: 'Ler mais',
        icon: { file: 'right-arrow' },
      },
    ],
  },
];

enum FieldTypes {
  AUTOCOMPLETE = 'AUTOCOMPLETE',
  INPUT = 'INPOUT',
  DATEPICKER_RANGE = 'DATEPICKER_RANGE',
}

const termSuggestions = [
  'Compra emergencial COVID-19',
  'Dispensa de licitação',
  'Contratação',
  'Nomeação',
  'Saneamento básico',
];

export const SEARCH_FORM = {
  fields: [
    {
      label: 'Ex: Licitação,...',
      text: 'Sugestão de busca',
      icon: 'search',
      type: FieldTypes.AUTOCOMPLETE,
      options: of([termSuggestions]),
    },
    {
      type: FieldTypes.INPUT,
      icon: 'search',
      label: 'Município',
    },
    {
      type: FieldTypes.DATEPICKER_RANGE,
      icon: 'search',
    },
  ],
};
