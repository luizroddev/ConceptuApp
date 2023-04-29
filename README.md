# Projeto React Native - Punk API - Conceptu

Este projeto é uma aplicação mobile desenvolvida em React Native que consome a Punk API (https://punkapi.com/). Ele foi criado com a finalidade de demonstrar habilidades de desenvolvimento, organização do código e aplicação de boas práticas.

## Índice

- [Projeto React Native - Punk API - Conceptu](#projeto-react-native---punk-api---conceptu)
  - [Índice](#índice)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologias e Bibliotecas](#tecnologias-e-bibliotecas)
  - [Arquitetura do Projeto](#arquitetura-do-projeto)
  - [Instruções de Execução](#instruções-de-execução)
    - [Executando o aplicativo iOS](#executando-o-aplicativo-ios)
      - [Versões utilizadas](#versões-utilizadas)
    - [Executando o aplicativo Android](#executando-o-aplicativo-android)
      - [Versões utilizadas](#versões-utilizadas-1)
  - [Testes](#testes)
  - [Considerações Finais](#considerações-finais)

## Funcionalidades

O aplicativo oferece as seguintes funcionalidades:

1. _Listagem de Cervejas:_ Exibição de uma lista de cervejas obtidas da API Punk API.
2. _Filtragem:_ Permite ao usuário filtrar as cervejas por diferentes critérios.
3. _Ordenação:_ Capacidade de ordenar a lista de cervejas por diferentes aspectos.
4. _Detalhes da Cerveja:_ Ao selecionar uma cerveja, o usuário pode visualizar detalhes adicionais.
5. _Paginação:_ Implementação de paginação para otimizar a carga de dados.
6. _Lazy Loading:_ Carregamento otimizado de imagens para melhorar o desempenho.

## Tecnologias e Bibliotecas

O projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

- _React Native:_ Utilizado para o desenvolvimento da aplicação.
- _React Native Fast Image:_ Utilizado para o carregamento otimizado de imagens (lazy loading) e outras funcionalidades relacionadas à manipulação de imagens.
- _React Native Paper:_ Adotado para oferecer componentes de interface de usuário consistentes e bem projetados seguindo os princípios do Material Design.
- _React Native Responsive Screen:_ Empregado para criar um layout responsivo e adaptável a diferentes tamanhos de tela e orientações de dispositivos.
- _Axios:_ Utilizado para a realização de requisições HTTP para a API Punk API.
- _React Testing Library:_ Utilizado para a criação de testes de unidade e integração.
- _TypeScript:_ Adotado para adicionar tipagem estática ao projeto, aumentando a confiabilidade e legibilidade do código.

## Arquitetura do Projeto

O projeto adota uma arquitetura modular, com uma organização de pastas que separa componentes, serviços, tipos e testes. Os princípios SOLID são aplicados para garantir um código bem estruturado e fácil de manter.

Cada componente é responsável por uma única funcionalidade (SRP), favorecendo a reutilização e manutenibilidade do código. As classes podem ser estendidas sem alterar a lógica do componente existente (OCP). Substituições de classes são possíveis sem causar problemas na aplicação (LSP).

A interface de rede é pequena e específica, incluindo apenas os métodos necessários para a interação com a camada de rede (ISP). A dependência na camada de rede é feita por meio de uma abstração, não de uma implementação concreta, tornando o código mais flexível (DIP).

A gestão do estado da aplicação e a lógica de negócios são realizadas por meio de hooks personalizados. Por exemplo, o hook `useBeers` é responsável por gerenciar o estado das cervejas, lidar com a paginação, a filtragem e a busca de cervejas.

## Instruções de Execução

Para executar o projeto, é necessário ter o Node.js e o npm instalados. Siga as instruções abaixo:

1. Clone o repositório localmente através do comando `git clone`.
2. Navegue até a pasta do projeto com o comando `cd`.

### Executando o aplicativo iOS

#### Versões utilizadas

    - Node: 20.0.0
    - npm: 9.6.4
    - Java: javac 19
    - CocoaPods: 1.12.0
    - Watchman: 2023.04.24.00
    - Xcode: 14.1
    - react: 18.2.0 => 18.2.0
    - react-native: 0.71.7 => 0.71.7

- Para instalar as dependências do iOS, execute: `npm install && cd ios/ && pod install && cd ..`.
- Para rodar o simulador utilize: `npm run start`.
- Para obter mais informações, consulte as instruções oficiais do React-Native nesta [página](https://reactnative.dev/docs/environment-setup#development-os) em "React Native CLI Quickstart" > Mac OS ou Windows > iOS.

### Executando o aplicativo Android

#### Versões utilizadas

    - Node: 19.0.0
    - npm: 8.19.2
    - Java: javac 19
    - react: 18.2.0 => 18.2.0
    - react-native: 0.71.7 => 0.71.7

- Para instalar as dependências do Android, execute: `npm install`.
- Para rodar o simulador utilize: `npm run start`.
- Para obter mais informações, consulte as instruções oficiais do React-Native nesta [página](https://reactnative.dev/docs/environment-setup#development-os) em "React Native CLI Quickstart" > Mac OS ou Windows > Android.

3. Para executar os testes, utilize `npm test`.

## Testes

Os testes são executados utilizando o comando `npm test`. Os testes foram desenvolvidos com a biblioteca React Testing Library, que permite a criação de testes de unidade e integração, garantindo que as principais funcionalidades e componentes estejam funcionando corretamente.

## Considerações Finais

Este aplicativo foi desenvolvido como parte de um processo seletivo para uma vaga de desenvolvedor React Native. O principal objetivo era a criação de um aplicativo funcional e performático, seguindo as melhores práticas de desenvolvimento em React Native, além da implementação de testes automatizados.

Caso tenha dúvidas ou sugestões, sinta-se à vontade para abrir uma issue ou enviar um pull request. Obrigado por conferir este projeto!
