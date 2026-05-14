# 📊 Sistema de Votação (Enquete Interativa)

Uma aplicação de página única (SPA) desenvolvida para praticar arquiteturas de estado global e bibliotecas de componentes.

## 🚀 Sobre o Projeto

Este projeto é um sistema de enquetes interativo onde os utilizadores podem votar na sua linguagem de programação favorita. A aplicação transita fluidamente entre o modo de votação e o painel de resultados, calculando e exibindo as percentagens de votos em tempo real através de barras de progresso animadas.

## ✨ Funcionalidades

- **Votação em Tempo Real**: O estado global é atualizado instantaneamente ao submeter o voto.
- **Gestão de Estado Global (Redux)**: Arquitetura utilizando *Slices* para controlar a contagem de votos e a alternância de telas.
- **Transições Suaves**: Uso de animações nativas para alternar entre componentes de forma elegante e sem recarregar a página.
- **Design System Corporativo**: Interface construída 100% com **Material UI (MUI)**, garantindo acessibilidade, responsividade e o padrão visual do Material Design.

## 🛠️ Tecnologias Utilizadas

- **React** (Vite)
- **Redux Toolkit (RTK)**: Para o cérebro da aplicação e gestão de estado centralizada.
- **Material UI (@mui/material)**: Componentes de interface (Paper, RadioGroup, LinearProgress, Typography).

## 🔗 Acesse o Projeto

- https://sistema-de-votacao-five.vercel.app/

## ⚙️ Instalação e Execução

1. Clone o repositório:
`git clone https://github.com/jeancarloslima/sistema-de-votacao.git`
2. Aceda à pasta do projeto:
`cd sistema-de-votacao`
3. Instale as dependências:
`npm install`
4. Inicie o ambiente de desenvolvimento:
`npm run dev`