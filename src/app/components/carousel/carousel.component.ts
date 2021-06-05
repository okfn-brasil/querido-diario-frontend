import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CarouselComponent implements OnInit {
  constructor() {}

  items = [
    {
      icon: { name: 'ok-hand', height: 120, width: 74 },
      textPrimary: 'Chegamos aqui',
      textSecondary:
        'Já construímos toda a infraestrutura e libertamos 12 capitais.',
      money: 'R$ 2.000',
    },

    {
      icon: { name: 'computer', height: 120, width: 116 },
      textPrimary: 'Plataforma turbinada!',
      textSecondary:
        '+ 100 municípios disponíveis na plataforma e mecanismo de busca mais eficiente.',
      money: 'R$ 6.000',
      link: {
        text: 'Ir para o Catarse',
        href: '',
      },
    },

    {
      icon: { name: 'project', height: 128, width: 108 },
      textPrimary: 'O Brasil é o limite!',
      textSecondary:
        'Todas as cidades brasileiras com mais de 100 mil habitantes na plataforma.',
      money: 'R$ 10.000',
      link: {
        text: 'Ir para o Catarse',
        href: '',
      },
    },

    {
      icon: { name: 'graphics', height: 120, width: 108 },
      textPrimary: 'Busca inteligente',
      textSecondary:
        'ruzamentos com bases de dados relevantes e sistema de recomendação de conteúdo.',
      money: 'R$ 14.000',
      link: {
        text: 'Ir para o Catarse',
        href: '',
      },
    },

    {
      icon: { name: 'ok-hand' },
      textPrimary: 'Chegamos aqui',
      textSecondary:
        'Já construímos toda a infraestrutura e libertamos 12 capitais.',
      money: 'R$ 2.000',
    },

    {
      icon: { name: 'computer' },
      textPrimary: 'Plataforma turbinada!',
      textSecondary:
        '+ 100 municípios disponíveis na plataforma e mecanismo de busca mais eficiente.',
      money: 'R$ 6.000',
      link: {
        text: 'Ir para o Catarse',
        href: '',
      },
    },

    {
      icon: { name: 'project' },
      textPrimary: 'O Brasil é o limite!',
      textSecondary:
        'Todas as cidades brasileiras com mais de 100 mil habitantes na plataforma.',
      money: 'R$ 10.000',
      link: {
        text: 'Ir para o Catarse',
        href: '',
      },
    },

    {
      icon: { name: 'graphics' },
      textPrimary: 'Busca inteligente',
      textSecondary:
        'ruzamentos com bases de dados relevantes e sistema de recomendação de conteúdo.',
      money: 'R$ 14.000',
      link: {
        text: 'Ir para o Catarse',
        href: '',
      },
    },
  ];

  ngOnInit(): void {}
}
