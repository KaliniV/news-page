# News

Este é um projeto de um site de notícias desenvolvido com Next.js, utilizando a API NewAPI. O projeto inclui vários componentes para exibir e gerenciar notícias de maneira eficaz.

## Funcionalidades

- **Listagem de Notícias**: A página inicial exibe uma lista de notícias obtidas da API NewsAPI.
- **Detalhes da Notícia**: Ao clicar em uma notícia na página inicial, o usuário é direcionado para uma página com mais detalhes sobre a notícia.
- **Página Sobre**: Uma página que fornece informações sobre o projeto.
- **Navegação**: Uma barra de navegação que permite ao usuário acessar facilmente a página inicial e a página "About".
- **Rodapé**: Um rodapé simples que exibe o nome do site e o ano atual.

## Como Funciona

### Fluxo de Dados

1. **Obtendo Dados**: Os dados das notícias são obtidos da API NewsAPI. A função `getStaticProps` é utilizada para buscar as notícias durante a build time.
2. **Rotas Dinâmicas**: A função `getStaticPaths` é utilizada para gerar rotas dinâmicas para cada notícia individual. Cada título de notícia é usado para criar um caminho dinâmico.
3. **Exibindo Dados**: Os dados das notícias são passados para os componentes que exibem a lista de notícias na página inicial e os detalhes da notícia na página específica.

### Estrutura dos Componentes

- **Card**: Exibe um resumo da notícia, incluindo o título, autor, imagem (se disponível) e uma breve descrição.
- **Footer**: Exibe o nome do site e o ano atual.
- **Navbar**: Fornece links de navegação para a página inicial e a página "About".
- **Layout**: Envolve todos os componentes com uma estrutura consistente, incluindo a barra de navegação e o rodapé.
- **Principal**: Exibe os detalhes de uma notícia específica.

### Estrutura das Páginas

- **_app.js**: Personaliza a aplicação Next.js e aplica o layout padrão em todas as páginas.
- **_document.js**: Personaliza o documento HTML padrão utilizado pelo Next.js.
- **about.js**: Fornece informações sobre o projeto.
- **index.js**: Exibe uma lista de notícias na página inicial.

## Interface

### Página Inicial

- **Título**: "NEWS of the day" exibido no topo.
- **Lista de Notícias**: Cada notícia é exibida em um card com título, autor, imagem e descrição curta.
- **Estilo**: A página é estilizada usando CSS Modules para garantir um estilo modular e evitar conflitos.

### Página de Detalhes da Notícia

- **Título da Notícia**: Exibido em destaque no topo da página.
- **Autor**: Nome do autor da notícia.
- **Imagem**: Imagem associada à notícia (se disponível).
- **Descrição e Conteúdo**: Detalhes completos da notícia.
- **Botão de Retorno**: Um botão que leva o usuário de volta à página inicial.

### Página Sobre

- **Informações do Projeto**: Descrição do objetivo e funcionalidades do projeto.

## Código

### Componentes

#### Card


