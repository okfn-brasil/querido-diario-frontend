export const ACCESS_LEVELS = {
  title: 'Níveis de acesso',
  text: 'Cada município possui um nível de acesso no projeto Querido Diário. Conheça cada um:',
  items: [
    {
      icon: {
        file: 'pin',
        height: 50,
        width: 50,
      },
      title: 'Nível 0 de acesso',
      text: 'Não possuímos a fonte de publicação do diário oficial deste município',
      actions: [{ text: 'Cadastre um município' }],
    },
    {
      icon: {
        file: 'pin',
        height: 50,
        width: 50,
      },
      title: 'Nível 1 de acesso',
      text: 'Possuímos a fonte de publicação do diário oficial deste município',
      actions: [{ text: 'Doe' }, { text: 'Contribua com código' }],
    },
    {
      icon: {
        file: 'pin',
        height: 50,
        width: 50,
      },
      title: 'Nível 2 de acesso',
      text: 'Temos o script para coletar os arquivos e armazená-los em nossa base <br/>Precisamos da sua ajuda para xxx',
      actions: [{ text: 'Doe' }],
    },
    {
      icon: {
        file: 'pin',
        height: 50,
        width: 50,
      },
      title: 'Nível 3 de acesso',
      text: 'o conteúdo dos diários oficiais deste município está disponível na plataforma Querido Diário',
    },
  ],
};
