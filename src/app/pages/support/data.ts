import { ANALYSIS, API, TOOLBOX } from '../home/analysis';
import { CONTRIBUTION } from '../tech/data';
import { CONTRIBUTORS } from './contributors';
import { REPOSITORIES } from './repositories';

export const SUPPORT = {
  title: 'Apoie',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio neque, interdum vel nunc varius, fringilla viverra risus.',
  actions: [
    {
      text: 'Nossas metas',
      to: '/doe',
      style: 'link-secondary',
    },
    {
      text: 'Quem apoia',
      to: '/doe',
      style: 'link-secondary',
    },
  ],
};

export const WHO_SUPPORTS = {
  title: 'Quem apoia',
  items: [
    {
      title: 'Realização',
      text: 'O Querido Diário é um projeto realizado e desenvolvido pela Open Knowledge Brasil, contando com a colaboração de sua rede de pessoas Embaixadoras de Inovação Cívica e da comunidade em torno da Operação Serenata de Amor.',
      icons: [
        {
          file: 'logo-OK',
          height: 32,
          width: 116,
        },
        {
          file: 'logo-serenata',
          height: 32,
          width: 116,
        },
        {
          file: 'logo-embaixadores',
          height: 32,
          width: 116,
        },
      ],
    },
    {
      title: 'Financiamento do algoritmo de busca',
      text: 'Em junho de 2020, a Open Knowledge Brasil foi uma das organizações selecionadas pelo projeto EmpatIA, mantido pela Iniciativa Latino-Americana de Dados Abertos (ILDA) e com financiamento do Banco Interamericano de Desenvolvimento (BID). O projeto visa compreender e desenvolver novos conhecimentos sobre a utilização da Inteligência Artificial (IA) na resolução de problemas públicos, e possibilitou o desenvolvimento da primeira versão do algoritmo de busca da plataforma Querido Diário.',
      icons: [
        {
          file: 'logo-Ilda',
          height: 17,
          width: 52,
        },
        {
          file: 'logo-Ilda',
          height: 17,
          width: 52,
        },
      ],
    },
    {
      title: 'Desenvolvimento frontend e usabilidade',
      text: 'A atual versão da plataforma foi desenvolvida com o apoio da Jurema, que é responsável pelo frontend e pelo estudo da experiência das pessoas usuárias.',
      icons: [
        {
          file: 'logo-jurema',
          height: 18,
          width: 80,
        },
      ],
    },
    {
      title: 'Automatização da raspagem de dados',
      text: 'O Querido Diário também recebe apoio da <a href="https://www.zyte.com/" target="_blank">Zyte</a> para utilizar sua infraestrutura, possibilitando a automatização do processo de raspagem das informações textuais contidas nos diários oficiais.',
      icons: [
        {
          file: 'logo-jurema',
          height: 18,
          width: 80,
        },
      ],
    },
    {
      title: 'Armazenamento e hospedagem',
      text: 'A plataforma está hospedada na <a href="https://www.digitalocean.com/" target="_blank">DigitalOcean</a>, que é apoiadora de longa data do Querido Diário e da OperaçãoSerenata de Amor.',
      icons: [
        {
          file: 'logo-digitalocean',
          height: 18,
          width: 110,
        },
      ],
    },
    {
      title: 'comunidade',
      text: 'Existem várias maneiras de contribuir com o Querido Diário. Se você deseja ajudar o projeto a ir mais longe, <a href="https://www.catarse.me/queridodiario-okbr" target="_blank" >acesse nossa campanha de financiamento coletivo no Catarse</a>e consulte as faixas de doação e suas recompensas. Assim, você sejunta às XX pessoas que já nos ajudaram:',
      action: {
        title:
          'Repositório de desenvolvimento da Toolbox (processamento de dados)',
        to: '/foo',
      },
      items: CONTRIBUTORS,
    },
    {
      action: {
        text: 'Se você é uma pessoa desenvolvedora interessada em contribuir com o código do projeto, que é aberto e acessível a toda a comunidade, consulte nossos repositórios no Github e junte-se ao time que ajuda o Querido Diário a tomar forma:',
        to: '/foo',
      },
    },
    {
      title: 'Repositório geral do Querido Diário',
      action: {
        text:
          'Repositório de desenvolvimento da Toolbox (processamento de dados)',
        to: '/foo',
      },
      items: REPOSITORIES,
    },
    {
      title: 'Repositório de desenvolvimento da API',
      items: API,
    },
    {
      action: {
        text:
          'Repositório de desenvolvimento da Toolbox (processamento de dados)',
        to: '/foo',
      },
      items: TOOLBOX,
    },
    {
      action: {
        text: 'Censo dos diários oficiais - análises e relatórios',
        to: '/foo',
      },
      items: ANALYSIS,
    },
  ],
};
