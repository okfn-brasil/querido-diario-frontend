**Português (BR)** | [English (US)](.github/README-en-US.md) 

<p align="center">
  <a href="https://queridodiario.ok.org.br/sobre" target="_blank"> <img alt="Querido Diário" src="./.github/images/querido-diario-logo.png" width="200">
  </a>
</p>


# Frontend (interface web)
Dentro do [ecossistema do Querido Diário](https://github.com/okfn-brasil/querido-diario-comunidade/blob/main/.github/CONTRIBUTING.md#ecossistema), este repositório é o responsável pelo **[site do Querido Diário](https://queridodiario.ok.org.br)**.

Conheça mais sobre as [tecnologias](https://queridodiario.ok.org.br/tecnologia) e a [história](https://queridodiario.ok.org.br/sobre) do projeto. 

# Sumário
- [Como contribuir](#como-contribuir)
- [Como configurar o ambiente de desenvolvimento](#como-configurar-o-ambiente-de-desenvolvimento)
  - [Em Linux](#em-linux)
  - [Em MacOS](#em-macos)
  - [Em Windows](#em-windows)
- [Como executar](#como-executar)
- [Suporte](#suporte)
- [Agradecimentos](#agradecimentos)
- [Open Knowledge Brasil](#open-knowledge-brasil)
- [Licença](#licença)


# Como contribuir
<p>  
  <a href="https://www.catarse.me/queridodiario-okbr" target="_blank"> 
    <img alt="catarse" src="https://img.shields.io/badge/Catarse-Apoie o projeto-orange?style=for-the-badge&logo=data:image/ico;base64,AAABAAEAEBIAAAEAIAAXAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEggGAAAAUjteagAAAd5JREFUOI2NlLFrU1EUh7/z7mtIQiWh1ae0SKJBxBaxzyUgBUsULOjQoeCm6V9g1cVB8AUXwSFxcRBB+gYRB3Vw0Mk4OAhCsuiiKVFEsBFqwYJJTa5Dk9fXlzTNb7r33PP77jmcyxWtNSJCUBXbmQIKwGngK5BNlZwigNbayzO6nFt60TYDJIA3FdvJBpP6ARI9YoWK7SQHBZR7xGKAMyhgAaj2iF9ePpmL7wpIlZwyYAPF4Jk5+nG+s5adpuBXxXYeAdnOPnL0CWrPt6vWg/VCvxb81SyIanzxblV/ARb7thCUGv5+f9Ncx4iuQHtKAwMSRTcPMLT/QydU3gaw3PSc5abj3dYthcbeeQBRPPUAlpueAZ6vXHr/ezeAqDoS1gwd2Tjvr6AwagoXnp2a3slcuxa5A2yax5uIYtIPODEWEsZDstTL/OtG+CJNrpsHmoSS/5CwBrgHYLZzqvUWyX2mHH74euLTpKo9njBqL/UPNUODWf40z9DycgGc2JVGzl/BUrXeoqHRq0SPpYzV20BJIjoPnCOqTYY17G0BHIovbuQ6JO8lWm56an7EPDtiyl1L1smoZQ4aa8FuyrEMtv8/6HrKN19NzwG3gORx42d+1vy8BsSBYizDW9j+ofwHqM6MbbvUDjEAAAAASUVORK5CYII=">
  </a>
</p> 

Agradecemos por considerar contribuir com o Querido Diário! :tada:

Você encontra como fazê-lo no [CONTRIBUTING.md](.github/CONTRIBUTING.md)!

Além disso, consulte a [documentação do Querido Diário](https://docs.queridodiario.ok.org.br/pt/latest/index.html) para te ajudar. 

# Como configurar o ambiente de desenvolvimento

O projeto utiliza [Node.js](https://nodejs.org/) e [Yarn](https://yarnpkg.com/). Utilizamos também o [nvm](https://github.com/nvm-sh/nvm), um gerenciador de versão de `node.js`. Para saber a versão do `node.js`, a lista de dependências e suas versões, veja o arquivo [`package.json`](package.json). 

A seguir, veja como instalar todas essas ferramentas em seu sistema operacional.

## Em Linux

1. [Instale](https://www.treinaweb.com.br/blog/instalando-e-gerenciando-varias-versoes-do-node-js-com-nvm) o `nvm`.

2. Com o `nvm` instalado, utilize-o para instalar a versão de `node.js` adequada para o projeto:
```console
$ nvm install v16.2.0
```

3. Ao instalar `node.js`, o gerenciador de pacotes `npm` é instalado junto. Utilize-o para obter o `yarn`:
```console
$ npm install --global yarn
```

4. Agora faça um fork deste repositório e, com o terminal aberto em um diretório de preferência no seu computador, clone-o e acesse o novo diretório criado com o nome do repositório.
``` console
$ git clone <endereço_copiado_do_código_do_fork>
$ cd querido-diario-frontend
```

5. Instale as dependências utilizadas no projeto:
```console
$ yarn
```

6. Pronto! Agora você já pode começar a editar o código.


## Em MacOS
[_em construção_]


## Em Windows
[_em construção_]


# Como executar
1. Com o terminal aberto no diretório `querido-diario-frontend`, o projeto pode ser servido localmente com o comando:
``` console
$ yarn ng serve
```

2. Durante a execução, um log aparecerá no terminal. O trecho final, como este a seguir, informa em qual porta a visualização do site está hospedada. Basta copiar o endereço `http` e abrir no navegador. 
```
Build at: 2022-09-29T14:36:15.974Z - Hash: 1070f70dedca285ec8c6 - Time: 43313ms

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

✔ Compiled successfully.
```

3. Pronto! Agora você já pode simular as alterações, vendo como as modificações feitas no código refletem no site, antes de enviar sua contribuição!


# Suporte 
<p>  
  <a href="https://discord.com/invite/mxHGPq8rdY" target="_blank">
    <img alt="Discord Invite" src="https://img.shields.io/badge/Discord-Entre%20no%20servidor-blue?style=for-the-badge&logo=discord" >
  </a>
</p>

Ingresse em nosso [Discord](https://discord.com/invite/mxHGPq8rdY) para trocas sobre os projetos, dúvidas, pedidos de ajuda com contribuição e conversar sobre inovação cívica em geral.


# Agradecimentos
Este projeto é mantido pela Open Knowledge Brasil e possível graças à comunidade técnica, às [Embaixadoras de Inovação Cívica](https://embaixadoras.ok.org.br/), às pessoas voluntárias e doadoras financeiras, além de universidades parceiras, empresas apoiadoras e financiadoras.

Conheça [quem apoia o Querido Diário](https://queridodiario.ok.org.br/apoie#quem-apoia).


# Open Knowledge Brasil
<p>
  <a href="https://twitter.com/okfnbr" target="_blank">
    <img alt="Twitter Follow" src="https://img.shields.io/badge/Twitter-_-blue?style=for-the-badge&logo=twitter">
  </a>
  <a href="https://www.instagram.com/openknowledgebrasil/" target="_blank">
    <img alt="Instagram Follow" src="https://img.shields.io/badge/Instagram-_-red?style=for-the-badge&logo=instagram">
  </a>
  <a href="https://www.linkedin.com/company/open-knowledge-brasil" target="_blank">
    <img alt="LinkedIn Follow" src="https://img.shields.io/badge/LinkedIn-_-9cf?style=for-the-badge&logo=linkedin">
  </a>
  <a href="https://www.facebook.com/OpenKnowledgeBrasil" target="_blank">
    <img alt="Facebook Follow" src="https://img.shields.io/badge/Facebook-_-informational?style=for-the-badge&logo=facebook">
  </a>
</p>

A [Open Knowledge Brasil](https://ok.org.br/) é uma organização da sociedade civil sem fins lucrativos, cuja missão é utilizar e desenvolver ferramentas cívicas, projetos, análises de políticas públicas, jornalismo de dados para promover o conhecimento livre nos diversos campos da sociedade. 

Todo o trabalho produzido pela OKBR está disponível livremente.


# Licença

Código licenciado sob a [Licença MIT](LICENSE.md).
