export const TECH = {
  title: 'Tecnologia',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio neque, interdum vel nunc varius, fringilla viverra risus.',
  actions: [
    {
      text: 'Doe',
      to: '/doe',
      style: 'link-secondary',
    },
    {
      text: 'Contribua com código',
      to: '/doe',
      style: 'link-secondary',
    },
    {
      text: 'Relatórios',
      to: '/doe',
      style: 'link-secondary',
    },
  ],
};

export const DOC = {
  title: 'Documentação',
  text: 'Se está chegando aqui agora, vamos te dar algumas dicas para começar. Bem-vinda(o)s!',
  actions: [
    {
      text: 'Já sabe o que é o Querido Diário?',
      to: '/sobre',
    },
    {
      text: 'Vídeo do Catarse',
      to: 'https://www.catarse.me/queridodiario-okbr?ref=ctrse_explore_pgsearch&project_id=120548&project_user_id=1384462',
    },
    {
      text: 'Está aprendendo a programar e contribuir para código aberto? Comece por aqui!',
      to: '/tecnologia#contribua',
    },
    {
      text: 'Você já tinha ouvido falar da Operação Serenata de Amor?',
      to: 'https://serenata.ai/',
    },
    {
      text: 'Quer contribuir financeiramente?',
      to: 'https://www.catarse.me/queridodiario-okbr?ref=ctrse_explore_pgsearch&project_id=120548&project_user_id=1384462',
    },
  ],
};

export const HELP = {
  title: 'Onde pedir ajuda?',
  text: 'A comunidade de pessoas envolvidas no Querido Diário é muito \n receptiva, temos um \n<a href="https://discord.gg/fsEhQxSWjt" target="_blank">canal no Discord</a> onde utilizamos para fazer conversas por texto e voz, entre e se apresente! Por lá organizamos para fazer nossa reunião pública e mensal com as pessoas que mantêm o projeto. \nCaso tenha alguma dúvida sobre o projeto e a nossa comunidade vocêtambém pode nos mandar um email pelo seguinte endereço: <a href="mailto:contato@serenata.ai">contato@serenata.ai</a>.',
};

export const SCOPE = {
  title: 'O escopo do Querido Diário',
  text: 'O Querido Diário é um projeto de código aberto da Open Knowledge Brasil - junto à valiosas contribuições da comunidade - que está usando tecnologia para libertar e centralizar as informações publicadas nos diários oficiais dos municípios, hoje presas em PDFs obscuros de acesso complicado. \n\nTodo ato público, para que seja válido no Brasil, deve ser publicado em um diário oficial, ou seja, desde o governo federal, tribunais e até a câmara de vereadores da sua cidade, todos divulgam atos oficiais em arquivos que devem ser acessíveis pela população.\n]nO escopo atual do projeto está em coletar os atos do poder executivo dos 5.570 municípios brasileiros. É uma iniciativa muito ambiciosa dada a diversidade de desafios e barreiras para se acessar esses dados, desde a falta de padronização até a escassez de recursos de tecnologias que muitos municípios brasileiros possuem para manterem informações públicas acessíveis na internet.',
};

export const ARCHITECTURE = {
  title: 'Arquitetura',
};

export const VERSIONS = {
  title: 'Versões',
  text: 'Versão X.Y - Change Log\nVersão X.X - Change Log',
};

export const CONTRIBUTION = {
  title: 'Contribua com código',
  text: [
    'Olá! Quer contribuir para o Querido Diário? Aqui você vai encontrar todas as informações para entender cada parte do projeto. Dessa forma, poderá decidir por onde começar de acordo com o seu interesse e de forma mais confortável.',
    'Todos os nossos códigos estão no Github da OKBR e estão sob licenças de software explícitas na raíz de cada repositório. Dessa forma, reforçamos que todo o projeto tem seu código fonte aberto para a comunidade.',
    'A maior parte do desenvolvimento técnico no projeto foi feita por uma comunidade incrível. Essas pessoas trabalharam voluntariamente por anos ajudando a OKBR a chegar na estrutura atual do Querido Diário.',
  ],
};

export const COLLECT = {
  title: 'Coleta de dados',
  text: 'Para entender o Querido Diário, é muito importante saber como funciona a estrutura de coleta de arquivos de diários oficiais. Todos os scripts são desenvolvidos utilizando o framework Scrapy, ferramenta muito popular para raspagem de dados. Caso nunca tenha utilizado, o tutorial é um ótimo caminho para aprender a fazer seus primeiros scripts de coleta de dados. Temos um repositório direcionado para organizar a coleta de arquivos. Nele, você encontrará arquivos em Python  desenvolvidos pela comunidade para cada município, chamamos esses arquivos de spiders (Spider é o termo utilizado para um script de raspagem de dados no Scrapy).',
};

export const CENSUS = {
  title: 'Censo',
  text: 'Antes de alguém conseguir escrever um spider para um município é importante sabermos em qual site os arquivos do diário oficial estão sendo publicados, e isso não é tão simples. Estamos falando de um país com 5.570 municípios que publicam seus atos públicos sem nenhum padrão, dentre eles alguns publicam em sites de associações, empresas privadas ou até mesmo site de outros entes da federação, e tudo isso sem nenhuma gestão de fluxo da informação. \nPor isso, nós criamos uma iniciativa de mapeamento das fontes de publicação, o Censo Querido Diário, onde qualquer pessoa pode preencher um formulário e nos enviar a fonte de publicação de diários oficiais de um município.\nTodas as fontes de publicação enviadas são validadas por um time voluntário e estão sendo feitas análises de dados que irão compor relatórios sobre o diagnóstico de como está esse retrato de divulgação de atos públicos no Brasil. Com acesso à base de dados você consegue utilizar a linguagem R e Python para realizar análises exploratórias e contribuir no nosso repositório do censo.',
};

export const TOOLBOX = {
  textSecondary: 'Toolbox',
  text: 'O objetivo do Querido Diário Toolbox é fornecer para a comunidade um conjunto de ferramentas que possibilitem a análise e manipulação dos dados extraídos de diários oficiais. Com o toolbox, ampliamos as possibilidades de novos projetos que se utilizem da base de dados e compartilhamos conhecimento acumulado na limpeza e tratamento de dados que o projeto já enfrentou. O toolbox, inclusive, é utilizado internamente pela equipe da OKBR para o tratamento dos diários que são oferecidos na API; ele permite a extração de dados, metadados, limpeza de caracteres irrelevantes e extração de CPF e CNPJ. O toolbox não é, nem nunca será, um projeto concluído: com o apoio da comunidade, vamos sempre adicionar novas ferramentas e disponibilizá-las a todas as pessoas interessadas no projeto!',
};

export const PUBLIC_API = {
  textSecondary: 'API pública',
  text:
    'A API pública é uma das camadas principais do projeto, pois permite a divulgação da base de dados de uma forma acessível e automatizável por máquinas, além de promover um acesso direto aos dados para pessoas desenvolvedoras e pesquisadoras. Além disso, a plataforma consome os dados da API para a disponibilização dos dados para o público geral.\n\nA API foi export construída com FastAPI e Python e é integrada ao Swagger para a obtenção da documentação de forma automática. Você pode contribuir com ideias para a API no repositório oficial.',
};

export const FRONTEND = {
  textSecondary: 'Front end',
  text: 'xxx',
};

export const STARTUP = {
  textSecondary: 'Para começar',
  text: 'Linguagem Python',
  actions: [
    { text: 'https://python.org.br/' },
    { text: 'https://www.pycursos.com/python-para-zumbis/' },
    { text: 'https://escoladedados.org/' },
  ],
};

export const REPORTS = {
  title: 'Relatórios',
  text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus.',
  items: [
    {
      title: 'Nulla vel metus scelerisque ante sollicitudin commodo.',
      text: 'Praesent scelerisque, leo quis venenatis ultricies, nisl quam bibendum ex, id dapibus sapien ipsum a nibh.',
      actions: [
        {
          text: 'Ler mais',
          icon: 'right-arrow',
          to: '/add-link',
        },
      ],
    },
    {
      title: 'Nulla vel metus scelerisque ante sollicitudin commodo.',
      text: 'Praesent scelerisque, leo quis venenatis ultricies, nisl quam bibendum ex, id dapibus sapien ipsum a nibh.',
      actions: [
        {
          text: 'Ler mais',
          icon: 'right-arrow',
          to: '/add-link',
        },
      ],
    },
    {
      title: 'Nulla vel metus scelerisque ante sollicitudin commodo.',
      text: 'Praesent scelerisque, leo quis venenatis ultricies, nisl quam bibendum ex, id dapibus sapien ipsum a nibh.',
      actions: [
        {
          text: 'Ler mais',
          icon: 'right-arrow',
          to: '/add-link',
        },
      ],
    },
  ],
};
