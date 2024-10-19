**English (US)** | [Português (BR)](/docs/CONTRIBUTING.md)

# Contributing
Querido Diário has a main [Contribution Guide](https://docs.queridodiario.ok.org.br/en/latest/contributing/contribution-guide.html#contributing) that applies to all its repositories. This guide provides general information on how to interact with the project, the code of conduct to which you adhere when contributing, a list of repositories in the ecosystem, and the first steps you can take. We recommend reading it before proceeding.

Already read it? Now let’s move on to the specifics of this repository:
- [Structure](#structure)
- [How to choose an issue to work on](#how-to-choose-an-issue-to-work-on)
- [How to set up the development environment](#how-to-set-up-the-development-environment)
    - [On Linux](#on-linux)
- [Running the project with external dependencies](#running-the-project-with-external-dependencies)
    - [Public API](#public-api)
    - [Backend](#backend)
- [Maintaining](#maintaining)

## Structure
A brief description of the repository structure:

| **Directory**                                               | **Description**                                                                                                                                  |
|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| [`.github`](/.github)                                       | Repository settings for GitHub.                                                                                                                  |
| [`docs`](/docs)                                             | Documentation files of the repository (README, CONTRIBUTING, etc.).                                                                              |
| [`e2e`](/e2e)                                               | Eend-to-end tests (👀).                                                                                                                          |
| [`src`](/src)                                               | Source code directory. Contains the main application files (index.html, styles.sass, etc.) and subdirectories that organize the source code.     |
| [`src/app`](/src/app)                                       | Directory that organizes the functionalities of the application (directives, modules, services, etc.).                                           |
| [`src/app/data`](/src/app/data)                             | Constant data sets of the project.                                                                                                               |
| [`src/app/directives`](/src/app/directives)                 | Additional behaviors of project elements.                                                                                                        |
| [`src/app/interfaces`](/src/app/interfaces)                 | Data object interfaces and some helper functions.                                                                                                |
| [`src/app/modules`](/src/app/modules)                       | Definitions of the visual components of the project.                                                                                             |
| [`src/app/modules/components`](/src/app/modules/components) | Generic components to be used in the project (card, modal, etc.).                                                                                |
| [`src/app/modules/layouts`](/src/app/modules/layouts)       | Generic structures to be used in the project (column, section, etc.).                                                                            |
| [`src/app/modules/pages`](/src/app/modules/pages)           | Definitions of the form and functionality of the project pages.                                                                                  |
| [`src/app/services`](/src/app/services)                     | Services for requesting and/or delivering data/content.                                                                                          |
| [`src/app/stores`](/src/app/stores)                         | State storage services.                                                                                                                          |
| [`src/assets`](/src/assets)                                 | Static content files (fonts, icons, images, and text content).                                                                                   |
| [`src/assets/fonts`](/src/assets/fonts)                     | Typography fonts used in the project.                                                                                                            |
| [`src/assets/icons`](/src/assets/icons)                     | Icons (usually SVG) used in the project.                                                                                                         |
| [`src/assets/images`](/src/assets/images)                   | Image files used in the project (deprecated, prefer CDN).                                                                                        |
| [`src/assets/pages`](/src/assets/pages)                     | Text content files to be consumed by the services and inserted into the project pages.                                                           |
| [`src/environments`](/src/environments)                     | Development and production environment configurations.                                                                                           |


## How to choose an issue to work on
Aside from issues labeled as [`good first issue`](https://github.com/okfn-brasil/querido-diario-frontend/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) and [`priority`](https://github.com/okfn-brasil/querido-diario-frontend/issues?q=is%3Aissue+is%3Aopen+label%3A%22priority%22), such as the ones indicated in the [Contribution Guide](https://docs.queridodiario.ok.org.br/en/latest/contributing/contribution-guide.html#contributing), there are also a few important labels specific to the frontend repository:
- [`backend dependency`](https://github.com/okfn-brasil/querido-diario-frontend/issues?q=is%3Aissue+is%3Aopen+label%3A%22backend+dependency%22): These are usually more complex issues because the demands may arise in the frontend but require development in other repositories of the project. If the other stages of the project have not yet been developed, it is not worth investing time in the issue.
- [`ui/ux`](https://github.com/okfn-brasil/querido-diario-frontend/issues?q=is%3Aissue+is%3Aopen+label%3Aui%2Fux): Some demands will be entirely dedicated to interface design or will be better addressed with this effort. It is usually better to work on them with experience in frontend development as well as UI/UX design, preferably with a team.
- [`graphic design`](https://github.com/okfn-brasil/querido-diario-frontend/issues?q=is%3Aissue+is%3Aopen+label%3A%22graphic+design%22): Illustrations, images, and icons may be necessary for some issues. If you have experience with this type of work, these are for you!

When choosing interface design or graphic design issues, pay attention to the project's styles. You may also find the [frontend design documentation](https://docs.queridodiario.ok.org.br/en/latest/contributing/frontend.html) useful.

## How to set up the development environment
The project uses [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/). We also use [nvm](https://github.com/nvm-sh/nvm), a `node.js` version manager. To know the `node.js` version, the list of dependencies and their versions, see the [`package.json`](/package.json) file.

Next, see how to install all these tools on your operating system.

### On Linux

1. Install [`nvm`](https://github.com/nvm-sh/nvm).
2. With `nvm` installed, use it to install the appropriate version of `node.js` for the project:
```console
nvm install v16.2.0
```
3. When `node.js` is installed, the package manager `npm` is installed alongside it. Use it to obtain `yarn`:
```console
npm install --global yarn
```
4. Now, in the root directory of the project, install the dependencies:
```console
yarn
```
5. Done! Now you can start editing the code.

## Running the project with external dependencies

Part of the frontend functionalities of Querido Diário depend on external resources, and it will be necessary to configure them locally or use the production ones (if possible) to modify or test certain functionalities. The dependencies are:

### [Public API](https://github.com/okfn-brasil/querido-diario-api/)

To search for content in gazettes, consult data from municipalities registered in QD, access CNPJ data, and send suggestion emails, it is necessary to interact with the QD API.

It is possible to use the production API, especially if you need data that takes time to be collected (and is already ready for consultation in the production API) and your usage of the API is light. In this case, you do not need to change anything in the repository, which is already configured to access the production API.

However, in other cases, it will be necessary to configure the API locally. To do this, change the constant `API` in the file [`src/app/constants.ts`](/src/app/constants.ts) from `'https://queridodiario.ok.org.br/api'` to `'http://0.0.0.0:8080'` (or `'http://localhost:8080'`), and run it locally (as instructed in the API environment setup documentation) to consume its data.

If it is necessary to populate the local API with a lot of data, you will need to execute the full QD workflow, from scraping to making it available through the API. In these cases, refer to how to [set up Querido Diário end-to-end](https://docs.queridodiario.ok.org.br/en/latest/contributing/end-to-end-configuration.html).

### [Backend](https://github.com/okfn-brasil/querido-diario-backend/)

The search and alert functionalities of [Querido Diário: Technologies in Education](https://queridodiario.ok.org.br/educacao)  depend entirely on the backend.

It is not possible to use the production backend. To test any functionality related to QD-Edu, it will be necessary to configure the backend locally. To do this, change the constant `educationApi` in the file [`src/app/services/utils/index.ts`](/src/app/services/utils/index.ts) from `'https://backend-api.queridodiario.ok.org.br/api/'` to `'http://0.0.0.0:8000/api/'` (or `'http://localhost:8000/api/'`), and run it locally (as instructed in the API environment setup documentation) to use the local backend.

If it is necessary to configure the QD API and backend at the same time, pay attention to the correct use of pods and containers so that both services can be deployed (either within the same pod with both ports open or in different pods) or refer to how to [set up Querido Diário end-to-end](https://docs.queridodiario.ok.org.br/en/latest/contributing/end-to-end-configuration.html).


# Maintaining
Maintainers must follow the guidelines in Querido Diário's [Guide for Maintainers](https://docs.queridodiario.ok.org.br/en/latest/contributing/contribution-guide.html#maintaining). Just like the [frontend design documentation](https://docs.queridodiario.ok.org.br/en/latest/contributing/frontend.html), it also contains important information.
