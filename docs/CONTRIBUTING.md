**Português (BR)** | [English (US)](/docs/CONTRIBUTING-en-US.md)

# Contribuindo
O Querido Diário possui um [Guia para Contribuição](https://docs.queridodiario.ok.org.br/pt-br/latest/contribuindo/guia-de-contribuicao.html#contribuindo) principal que é relevante para todos os seus repositórios. Este guia traz informações gerais sobre como interagir com o projeto, o código de conduta que você adere ao contribuir, a lista de repositórios do ecossistema e as primeiras ações que você pode tomar. Recomendamos sua leitura antes de continuar.

Já leu? Então vamos às informações específicas deste repositório:
- [Estrutura](#estrutura)
- [Como escolher a issue para trabalhar](#como-escolher-a-issue-para-trabalhar)
- [Como configurar o ambiente de desenvolvimento](#como-configurar-o-ambiente-de-desenvolvimento)
    - [Em Linux](#em-linux)
- [Executando o projeto com dependências externas](#executando-o-projeto-com-dependências-externas)
    - [API pública](#api-pública)
    - [Backend](#backend)
- [Mantendo](#mantendo)

## Estrutura

Uma breve descrição da estrutura do repositório:

| **Diretório**                                               | **Descrição**                                                                                                                                    |
|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| [`.github`](/.github)                                       | Configurações do repositório para o GitHub.                                                                                                      |
| [`docs`](/docs)                                             | Arquivos de documentação do repositório (README, CONTRIBUTING, etc.).                                                                            |
| [`e2e`](/e2e)                                               | Testes end-to-end (👀).                                                                                                                       |
| [`src`](/src)                                               | Diretório do código fonte. Contém arquivos principais da aplicação (index.html, styles.sass, etc.) e subdiretórios que organizam o código fonte. |
| [`src/app`](/src/app)                                       | Diretório que organiza as funcionalidades da aplicação (diretivas, módulos, serviços, etc.)                                                      |
| [`src/app/data`](/src/app/data)                             | Conjuntos de dados constantes do projeto.                                                                                                        |
| [`src/app/directives`](/src/app/directives)                 | Comportamentos adicionais de elementos do projeto.                                                                                               |
| [`src/app/interfaces`](/src/app/interfaces)                 | Interfaces de objetos de dados e algumas funções auxiliares.                                                                                     |
| [`src/app/modules`](/src/app/modules)                       | Definições dos componentes visuais do projeto.                                                                                                   |
| [`src/app/modules/components`](/src/app/modules/components) | Componentes genéricos a serem usados no projeto (card, modal, etc.).                                                                             |
| [`src/app/modules/layouts`](/src/app/modules/layouts)       | Estruturas genéricas a serem usadas no projeto (coluna, seção, etc.).                                                                            |
| [`src/app/modules/pages`](/src/app/modules/pages)           | Definições de forma e funcionalidade das páginas do projeto.                                                                                     |
| [`src/app/services`](/src/app/services)                     | Serviços de requisição e/ou entrega de dados/conteúdo.                                                                                           |
| [`src/app/stores`](/src/app/stores)                         | Serviços de armazenamento de estado.                                                                                                             |
| [`src/assets`](/src/assets)                                 | Arquivos de conteúdo estático (fontes, ícones, imagens e conteúdo textual).                                                                      |
| [`src/assets/fonts`](/src/assets/fonts)                     | Fontes tipográficas utilizadas no projeto.                                                                                                       |
| [`src/assets/icons`](/src/assets/icons)                     | Ícones (geralmente SVG) utilizados no projeto.                                                                                                   |
| [`src/assets/images`](/src/assets/images)                   | Arquivos de imagem usados no projeto (em desuso, dar preferência a CDN).                                                                         |
| [`src/assets/pages`](/src/assets/pages)                     | Arquivos de conteúdo textual a ser consumidos pelos serviços e inseridos nas páginas do projeto.                                                 |
| [`src/environments`](/src/environments)                     | Configurações de ambientes de desenvolvimento e produção.                                                                                        |


## Como escolher a issue para trabalhar

Além das issues marcadas como [`good first issue`](https://github.com/okfn-brasil/querido-diario-frontend/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) e [`priority`](https://github.com/okfn-brasil/querido-diario-frontend/issues?q=is%3Aissue+is%3Aopen+label%3A%22priority%22), como indicadas no [Guia para Contribuição](https://docs.queridodiario.ok.org.br/pt-br/latest/contribuindo/guia-de-contribuicao.html#contribuindo), também há algumas etiquetas importantes específicas do repositório do frontend:
- [`backend dependency`](https://github.com/okfn-brasil/querido-diario-frontend/issues?q=is%3Aissue+is%3Aopen+label%3A%22backend+dependency%22): Normalmente são issues mais complexas pois as demandas podem surgir no frontend mas necessitam do desenvolvimento em outros repositórios do projeto. Se as outras etapas do projeto ainda não foram desenvolvidas, não vale a pena investir tempo na issue.
- [`ui/ux`](https://github.com/okfn-brasil/querido-diario-frontend/issues?q=is%3Aissue+is%3Aopen+label%3Aui%2Fux): Algumas demandas serão inteiramente dedicadas ao desenho de interfaces ou serão melhor endereçadas com esse esforço. Normalmente é melhor trabalhar nelas com experiência de frontend e também de design UI/UX, preferencialmente em equipe.
- [`graphic design`](https://github.com/okfn-brasil/querido-diario-frontend/issues?q=is%3Aissue+is%3Aopen+label%3A%22graphic+design%22): Pode ser que ilustrações, imagens, ícones sejam necessários para algumas issues, se tiver experiência com esse tipo de trabalho, essas são pra você!

Ao escolher issues de desenho de interfaces ou de desenho gráfico, se atente aos estilos do projeto. Você também pode achar útil a [documentação de design do frontend](https://docs.queridodiario.ok.org.br/pt-br/latest/contribuindo/frontend.html).

## Como configurar o ambiente de desenvolvimento
O projeto utiliza [Node.js](https://nodejs.org/) e [Yarn](https://yarnpkg.com/). Utilizamos também o [nvm](https://github.com/nvm-sh/nvm), um gerenciador de versão de `node.js`. Para saber a versão do `node.js`, a lista de dependências e suas versões, veja o arquivo [`package.json`](../package.json). 

A seguir, veja como instalar todas essas ferramentas em seu sistema operacional.

### Em Linux

1. Instale o [`nvm`](https://github.com/nvm-sh/nvm).

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

## Executando o projeto com dependências externas

Parte das funcionalidades do frontend do Querido Diário dependem de recursos externos e será necessário configurá-los localmente ou utilizar os de produção (se possível) para modificar ou testar certas funcionalidades. As dependências são:

### [API pública](https://github.com/okfn-brasil/querido-diario-api/)

Para realizar buscas de conteúdo em diários, consultar dados de municípios cadastrados no QD, consultar dados de CNPJs e envio de emails de sugestões, é necessário interagir com a API do QD.

É possível utilizar a API de produção, principalmente se precisar de dados que demoram a ser coletados (e na API de produção já estão prontos para consulta) e o seu uso da API for de intensidade leve. Neste caso, não é necessário alterar nada no repositório, já configurado para acessar a API de produção.

Porém, em outros casos será necessário configurar localmente a API. Para isso, altere a constante `API` no arquivo [`src/app/constants.ts`](src/app/constants.ts) de `'https://queridodiario.ok.org.br/api'` para `'http://0.0.0.0:8080'` (ou `'http://localhost:8080'`), e execute localmente (como instruído na documentação de configuração de ambiente da API) para consumir seus dados.

Se for necessário popular a API local com muitos dados, será necessário executar o fluxo completo do QD, da raspagem à disponibilização pela API. Nesses casos, consulte como [configurar o Querido Diário de ponta-a-ponta](https://docs.queridodiario.ok.org.br/pt-br/latest/contribuindo/configuracao-de-ponta-a-ponta.html).

### [Backend](https://github.com/okfn-brasil/querido-diario-backend/)

As funcionalidades de busca e alertas do [Querido Diário: Tecnologias na Educação](https://queridodiario.ok.org.br/educacao) dependem inteiramente do backend.

Não é possível utilizar o backend de produção. Para testar qualquer funcionalidade referente ao QD-Edu, será necessário configurar o backend localmente. Para isso, altere a constante `educationApi` no arquivo [`src/app/services/utils/index.ts`](src/app/services/utils/index.ts) de `'https://backend-api.queridodiario.ok.org.br/api/'` para `'http://0.0.0.0:8000/api/'` (ou `'http://localhost:8000/api/'`), e execute localmente (como instruído na documentação de configuração de ambiente da API) para utilizar o backend local.

Se for necessário configurar a API e o backend do QD ao mesmo tempo, se atente ao uso correto de pods e containers para que os dois serviços possam ser levantados (dentro do mesmo pod com as duas portas abertas ou em pods diferentes) ou consulte como [configurar o Querido Diário de ponta-a-ponta](https://docs.queridodiario.ok.org.br/pt-br/latest/contribuindo/configuracao-de-ponta-a-ponta.html).

# Mantendo
As pessoas mantenedoras devem seguir as diretrizes do [Guia para Mantenedoras](https://docs.queridodiario.ok.org.br/pt-br/latest/contribuindo/guia-de-contribuicao.html#mantendo) do Querido Diário. Assim como a [documentação de design do frontend](https://docs.queridodiario.ok.org.br/pt-br/latest/contribuindo/frontend.html) também traz informações importantes.
