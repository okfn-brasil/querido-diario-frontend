**Português (BR)** | [English (US)](/docs/README-en-US.md) 

<p align="center">
  <a href="https://queridodiario.ok.org.br/sobre" target="_blank"> <img alt="Querido Diário" src="./images/querido-diario-logo.png" width="200">
  </a>
</p>

# Frontend (interface web)
Dentro do [ecossistema do Querido Diário](https://github.com/okfn-brasil/querido-diario-comunidade/blob/main/.github/CONTRIBUTING.md#ecossistema-do-querido-di%C3%A1rio), este repositório é o responsável pelo **[site do Querido Diário](https://queridodiario.ok.org.br/)**.

Conheça mais sobre as [tecnologias](https://queridodiario.ok.org.br/tecnologia) e a [história](https://queridodiario.ok.org.br/sobre) do projeto.

# Sumário
- [Como contribuir](#como-contribuir)
- [Ambiente de desenvolvimento](#ambiente-de-desenvolvimento)
- [Como executar](#como-executar)
- [Suporte](#suporte)
- [Agradecimentos](#agradecimentos)
- [Open Knowledge Brasil](#open-knowledge-brasil)
- [Licença](#licença)

# Como contribuir
<p>  
  <a href="https://www.catarse.me/queridodiario-okbr" target="_blank"> 
    <img alt="catarse" src="https://img.shields.io/badge/Catarse-Apoie%20o%20projeto-orange?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyNSA0NTUiIHdpZHRoPSIzMjUiIGhlaWdodD0iNDU1Ij4KCTx0aXRsZT5sb2dvLXYtY29yLXBvc2l0aXZvLWFpPC90aXRsZT4KCTxzdHlsZT4KCQkuczAgeyBmaWxsOiAjMTdhMzM4IH0gCgkJLnMxIHsgZmlsbDogIzdkYjkzZCB9IAoJCS5zMiB7IGZpbGw6ICNmMmJmMDAgfSAKCQkuczMgeyBmaWxsOiAjZjE5MTA2IH0gCgkJLnM0IHsgZmlsbDogI2VhNjYwYiB9IAoJCS5zNSB7IGZpbGw6ICNkZTMyODEgfSAKCTwvc3R5bGU+Cgk8ZyBpZD0iTGF5ZXIgMSI+CgkJPGcgaWQ9IiZsdDtHcm91cCZndDsiPgoJCQk8cGF0aCBpZD0iJmx0O1BhdGgmZ3Q7IiBjbGFzcz0iczAiIGQ9Im01Ni40IDI1Ni40cS0xLjggMy4xLTMuNCA2LjRjLTE1LjQgMzMuMS00LjcgNjMuMSAxNC44IDkyLjQgMTEuNiAxNy40IDguNiAzNi40LTEuOSA0Ny4zLTYgNi4zLTE0LjUgOS44LTIzLjIgOS43LTQuNSAwLTkuMS0wLjktMTMuNS0zLTYuMy0yLjktMTUuMS05LjEtMjIuMi0yOC43LTguOS0yNC4yLTkuMS01MS42IDIuNi03Ni44IDEwLjEtMjEuNiAyNi45LTM3LjggNDYuOC00Ny4zeiIvPgoJCQk8cGF0aCBpZD0iJmx0O1BhdGgmZ3Q7IiBjbGFzcz0iczEiIGQ9Im00Ni41IDMwNS44YzAuNSAyLjYgMSA1LjIgMS43IDcuOCAxMC41IDM4LjcgNDAuNyA1Ni41IDc3LjggNjcuNCAyMi4xIDYuNSAzMyAyNC43IDMxLjkgNDEuMi0wLjcgOS42LTUuMyAxOC41LTEyLjcgMjQuNi0zLjggMy4yLTguNCA1LjctMTMuNSA3LTcuNCAyLTE5LjIgMy0zOS4xLTguNC0yNC41LTE0LjItNDQuMS0zNy4yLTUyLTY2LjctNi44LTI1LjItNC4xLTUwLjggNS45LTcyLjl6Ii8+CgkJCTxwYXRoIGlkPSImbHQ7UGF0aCZndDsiIGNsYXNzPSJzMiIgZD0ibTczLjIgMzU0LjVjMi4yIDEuOCA0LjUgMy42IDYuOSA1LjMgMzYuMiAyNS4zIDc0LjMgMTguOSAxMTMuMiAxLjggMjMuMi0xMC4xIDQ1LjMtMi41IDU2IDEyLjIgNi4zIDguNiA4LjYgMTkuNCA2LjggMjkuNy0xIDUuNC0zLjEgMTAuNy02LjUgMTUuNS00LjggNi45LTE0IDE2LjEtMzguOSAyMC41LTMwLjcgNS40LTYzLjQtMC4xLTkwLjktMTkuNC0yMy42LTE2LjUtMzkuNC0zOS45LTQ2LjYtNjUuNnoiLz4KCQkJPHBhdGggaWQ9IiZsdDtQYXRoJmd0OyIgY2xhc3M9InMzIiBkPSJtMTMwLjEgMzc2LjZxNC43IDAuMSA5LjUtMC40YzQ4LjQtNC4zIDc2LTM2LjUgOTYuNy03OC41IDEyLjQtMjUgMzYuNC0zNC4xIDU1LjgtMjkuMyAxMS40IDIuOCAyMSAxMC4yIDI2LjcgMjAuMyAzIDUuMiA1IDExLjEgNS41IDE3LjYgMC45IDkuMi0wLjQgMjMuNC0xOC4zIDQ0LjctMjIgMjYuMy01My41IDQ0LjgtOTAuMyA0OC0zMS41IDIuOC02MS40LTUuOC04NS42LTIyLjR6Ii8+CgkJCTxwYXRoIGlkPSImbHQ7UGF0aCZndDsiIGNsYXNzPSJzNCIgZD0ibTE5My42IDM1NS4xYzIuNy0yLjIgNS4zLTQuNiA3LjgtNy4xIDM3LjctMzcuOCAzOC4xLTg0LjUgMjUuOS0xMzQuNS03LjItMjkuOCA2LjUtNTQuNSAyNi4zLTY0LjIgMTEuNS01LjYgMjQuOS02LjEgMzYuOC0xLjggNi4zIDIuMyAxMi4xIDUuOSAxNy4xIDExIDcuMiA3LjEgMTYuMiAyMC4xIDE2LjMgNTAuNiAwIDM3LjctMTMuNSA3NS42LTQyLjIgMTA0LjMtMjQuNiAyNC43LTU1LjkgMzguNi04OCA0MS43eiIvPgoJCQk8cGF0aCBpZD0iJmx0O1BhdGgmZ3Q7IiBjbGFzcz0iczUiIGQ9Im0yMzEuOSAyOTJjMC44LTQuNCAxLjQtOC45IDEuOC0xMy41IDYtNjkuMi0zMi42LTExNi04Ni41LTE1NS43LTMyLjItMjMuNi0zOS4xLTU5LjYtMjcuNS04NS44IDYuNy0xNS4zIDE5LjctMjcgMzUuMi0zMi42IDguMS0yLjkgMTctNC4yIDI2LjEtMy40IDEzLjIgMS4xIDMzIDYuNSA1OC42IDM2LjkgMzEuNSAzNy41IDQ5LjcgODYuNSA0NS4xIDEzOS4xLTMuOSA0NS4xLTIzLjQgODUuMS01Mi44IDExNXoiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPg==">
  </a>
</p> 

Agradecemos por considerar contribuir com o Querido Diário! :tada:

Você encontra como fazê-lo no [CONTRIBUTING.md](/docs/CONTRIBUTING.md)!

Além disso, consulte a [documentação do Querido Diário](https://docs.queridodiario.ok.org.br/pt-br/latest/) para te ajudar. 

# Ambiente de desenvolvimento
O projeto utiliza [Node.js](https://nodejs.org/) e [Yarn](https://yarnpkg.com/). Utilizamos também o [nvm](https://github.com/nvm-sh/nvm), um gerenciador de versão de `node.js`. Para saber a versão do `node.js`, a lista de dependências e suas versões, veja o arquivo [`package.json`](../package.json).

Por meio de um terminal aberto no diretório raíz do repositório, use a sequência de comandos a seguir para instalar todas essas ferramentas em sistema operacional Linux:
```
nvm install v16.2.0
npm install --global yarn
yarn
```

Para mais detalhes ou informações sobre a configuração em outros sistemas operacionais veja em ["como configurar o ambiente de desenvolvimento"](/docs/CONTRIBUTING.md#como-configurar-o-ambiente-de-desenvolvimento).

# Como executar
1. Com o terminal aberto no diretório raíz do repositório, o projeto pode ser servido localmente com o comando:
``` console
yarn ng serve
```
2. Durante a execução, um log aparecerá no terminal. O trecho final, como este a seguir, informa em qual porta a visualização do site está hospedada. Basta copiar o endereço `http` e abrir no navegador. 
```
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

✔ Compiled successfully.
```
3. Pronto! Agora você já pode simular as alterações, vendo como as modificações feitas no código refletem no site, antes de enviar sua contribuição!

# Suporte 
<p>  
  <a href="https://go.ok.org.br/discord" target="_blank">
    <img alt="Discord Invite" src="https://img.shields.io/badge/Discord-Entre%20no%20servidor-blue?style=for-the-badge&logo=discord" >
  </a>
</p>

Ingresse em nosso [canal de comunidade](https://go.ok.org.br/discord) para trocas sobre os projetos, dúvidas, pedidos de ajuda com contribuição e conversar sobre inovação cívica em geral.

# Agradecimentos
A aplicação foi inicialmente desenvolvida junto às pessoas do estúdio de software [Jurema](https://jurema.la/).

Este projeto é mantido pela Open Knowledge Brasil e possível graças às comunidades técnicas, às [Embaixadoras de Inovação Cívica](https://embaixadoras.ok.org.br/), às pessoas voluntárias e doadoras financeiras, além de universidades parceiras, empresas apoiadoras e financiadoras.

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
</p>

A [Open Knowledge Brasil](https://ok.org.br/) é uma organização da sociedade civil sem fins lucrativos, cuja missão é utilizar e desenvolver ferramentas cívicas, projetos, análises de políticas públicas, jornalismo de dados para promover o conhecimento livre nos diversos campos da sociedade. 

Todo o trabalho produzido pela OKBR está disponível livremente.

# Licença

Código licenciado sob a [Licença MIT](/LICENSE.md).
