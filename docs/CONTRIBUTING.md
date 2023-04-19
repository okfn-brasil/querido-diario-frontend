**Português (BR)** | [English (US)](/docs/CONTRIBUTING-en-US.md)

# Contribuindo
O Querido Diário possui um [Guia para Contribuição](https://github.com/okfn-brasil/querido-diario-comunidade/blob/main/.github/CONTRIBUTING.md#contribuindo) principal que é relevante para todos os seus repositórios. Este guia traz informações gerais sobre como interagir com o projeto, o código de conduta que você adere ao contribuir, a lista de repositórios do ecossistema e as primeiras ações que você pode tomar. Recomendamos sua leitura antes de continuar.

Já leu? Então vamos às informações específicas deste repositório:
- [Como configurar o ambiente de desenvolvimento](#como-configurar-o-ambiente-de-desenvolvimento)
    - [Em Linux](#em-linux)
- [Mantendo](#mantendo)

## Como configurar o ambiente de desenvolvimento
O projeto utiliza [Node.js](https://nodejs.org/) e [Yarn](https://yarnpkg.com/). Utilizamos também o [nvm](https://github.com/nvm-sh/nvm), um gerenciador de versão de `node.js`. Para saber a versão do `node.js`, a lista de dependências e suas versões, veja o arquivo [`package.json`](package.json). 

A seguir, veja como instalar todas essas ferramentas em seu sistema operacional.

## Em Linux

1. Instale o `nvm`.

2. Com o `nvm` instalado, utilize-o para instalar a versão de `node.js` adequada para o projeto:
```console
nvm install v16.2.0
```

3. Ao instalar `node.js`, o gerenciador de pacotes `npm` é instalado junto. Utilize-o para obter o `yarn`:
```console
npm install --global yarn
```

4. Agora, no diretório raíz do projeto, instale as dependências utilizadas.
```console
yarn
```

5. Pronto! Agora você já pode começar a editar o código.

# Mantendo
As pessoas mantenedoras devem seguir as diretrizes do [Guia para Mantenedoras](https://github.com/okfn-brasil/querido-diario-comunidade/blob/main/.github/CONTRIBUTING.md#mantendo) do Querido Diário.