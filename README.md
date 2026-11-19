# Civis — Economia circular que recompensa

**Global Solution FIAP 2026/2 | CitizenTech**

## 1. Sobre o projeto

A Civis é uma plataforma de economia circular urbana que conecta três pontas que hoje andam desconectadas: o **cidadão**, o **comércio local** e as **cooperativas de reciclagem**.

O cidadão recicla resíduos secos e especiais, entrega orgânicos, acumula **Eco-Pontos** e os troca por benefícios reais (cashback, ingressos de cinema, descontos em livrarias e refeições). As empresas parceiras recebem clientes recorrentes e relatórios ESG auditáveis, e as cooperativas recebem material já triado.

Este repositório contém o protótipo **front-end** da solução: um site responsivo e interativo, desenvolvido apenas com HTML, CSS e JavaScript.

### Problema abordado

- Falta incentivo real para o cidadão mudar o hábito de reciclar.
- As empresas querem métricas ESG confiáveis, mas faltam ferramentas práticas de auditoria.
- Restaurantes e comércios sofrem com o desperdício de alimentos e com o custo de descartar orgânicos.

### Objetivos do projeto

- Transformar o descarte correto em um hábito recompensador.
- Mostrar ao cidadão, de forma simples, quantos Eco-Pontos ele pode ganhar.
- Apresentar aos parceiros as vantagens e as métricas ESG da plataforma.
- Facilitar a localização de ecopontos e cooperativas.

## 2. Páginas e funcionalidades

### Páginas (8 no total)

| Página | Conteúdo |
|---|---|
| `index.html` | Apresentação da solução, problema, ciclo e acesso às áreas do site |
| `sobre.html` | Descrição, problema, objetivo e proposta da equipe |
| `integrantes.html` | Nome, RM, turma, foto, GitHub e LinkedIn de cada integrante |
| `faq.html` | Perguntas frequentes sobre a solução |
| `contato.html` | Formulário de contato com validação |
| `cidadao.html` | **Solução:** simulador de Eco-Pontos e catálogo de benefícios |
| `parceiros.html` | **Solução:** vantagens por segmento e exemplo de relatório ESG |
| `ecopontos.html` | **Solução:** busca de ecopontos e cooperativas |

### Funcionalidades em JavaScript (`js/main.js`)

- **Menu hambúrguer:** em telas menores o menu abre e fecha pelo botão; também fecha ao clicar em um link, ao apertar `Esc` ou ao voltar ao tamanho desktop.
- **Validação do formulário de contato:** feedback visual para campos obrigatórios vazios, e-mail inválido e formulário preenchido corretamente.
- **Acordeão (FAQ):** perguntas que abrem e fecham, uma por vez.
- **Abas (Parceiros):** troca de segmento (cinemas, livrarias e restaurantes), com navegação por setas do teclado.
- **Filtro de benefícios:** filtra o catálogo por categoria e atualiza o contador.
- **Calculadora de Eco-Pontos:** calcula os pontos a partir dos quilos de cada material.
- **Modal:** janela de convite para parceria, fechada por botão, clique fora ou `Esc`.
- **Busca de ecopontos:** filtra a lista por bairro ou material.

### Responsividade e acessibilidade

- Layout **mobile-first** com `@media queries`, testado em celular, tablet e desktop.
- Estrutura semântica (`header`, `nav`, `main`, `section`, `article`, `footer`), link "pular para o conteúdo", campos com `label`, textos alternativos nas imagens e atributos ARIA.

## 3. Tecnologias utilizadas

- **HTML5:** estruturação semântica das páginas.
- **CSS3:** estilização, identidade visual e responsividade.
- **JavaScript:** interatividade e manipulação de elementos (sem frameworks ou bibliotecas).
- **Git:** controle de versão do código.
- **GitHub:** armazenamento e compartilhamento do repositório.

## 4. Estrutura de pastas

```text
civis/
│
├── index.html
├── sobre.html
├── integrantes.html
├── faq.html
├── contato.html
├── cidadao.html
├── parceiros.html
├── ecopontos.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
└── assets/
    ├── avatar.svg
    ├── integrantes/
    └── projeto/
```

- `css/style.css`: folha de estilos única, com variáveis de cor, componentes reutilizáveis e media queries.
- `js/main.js`: todo o JavaScript, dividido em módulos que só rodam se os elementos existirem na página.
- `assets/`: imagens e ícones (`integrantes/` com as fotos da equipe e `projeto/` com as capturas de tela).

## 5. Autores e integrantes

Equipe **Civis — Global Solution FIAP 2026/2**.

### Gustavo Souza Lopes

- **RM:** 575057
- **Turma:** 1TDSPT
- **LinkedIn:** [linkedin.com/in/gustavo-souza-lopes](https://www.linkedin.com/in/gustavo-souza-lopes)
- **GitHub:** [github.com/GustaLopess](https://github.com/GustaLopess)

<img src="assets/integrantes/gustavo.png" width="120">

### Kaique Ferreira de Castro

- **RM:** 575222
- **Turma:** 1TDSPT
- **LinkedIn:** [linkedin.com/in/kaiquefcastro](https://www.linkedin.com/in/kaiquefcastro)
- **GitHub:** [github.com/kaiqueznx7](https://github.com/kaiqueznx7)

<img src="assets/integrantes/kaique.jpg" width="120">

### Lucas Alves Pires

- **RM:** 576621
- **Turma:** 1TDSPT
- **LinkedIn:** [linkedin.com/in/lucaspires31](https://www.linkedin.com/in/lucaspires31)
- **GitHub:** [github.com/lucaspires31](https://github.com/lucaspires31)

<img src="assets/integrantes/lucas.jpg" width="120">

### Rafael Alexandre Girardi Ramos

- **RM:** 575391
- **Turma:** 1TDSPT
- **LinkedIn:** [linkedin.com/in/rafael-ramos-99a3b343b](https://www.linkedin.com/in/rafael-ramos-99a3b343b)
- **GitHub:** [github.com/Rafaelreifsss](https://github.com/Rafaelreifsss)

<img src="assets/integrantes/rafael.jpg" width="120">

### Daniel Platero de Souza Rodrigues

- **RM:** 575084
- **Turma:** 1TDSPT
- **LinkedIn:** [linkedin.com/in/daniel-rodrigues-406927414](https://www.linkedin.com/in/daniel-rodrigues-406927414)
- **GitHub:** [github.com/Platero1310](https://github.com/Platero1310)

<img src="assets/integrantes/daniel.jpg" width="120">

## 6. Imagens e demonstração

Capturas de tela das principais páginas, em desktop e em celular.

### Página inicial

<img src="assets/projeto/Home1.png">
<img src="assets/projeto/Home2.png">

### Para o cidadão (simulador e benefícios)

<img src="assets/projeto/Cidadao.png">

### Para parceiros

<img src="assets/projeto/Parceiros.png">

### Ecopontos

<img src="assets/projeto/Ecopontos.png">

### Contato

<img src="assets/projeto/Contato.png">

### Versão mobile

<img src="assets/projeto/Mobile-menu.png" width="280">
<img src="assets/projeto/Mobile-simulador.png" width="280">

## 7. Links do projeto

- **Repositório no GitHub:** **[(https://github.com/TechnosDevelopers/civisgs)]**


## 8. Contato

Para dúvidas, sugestões ou informações sobre o projeto, entre em contato com os integrantes da equipe pelos perfis do LinkedIn ou GitHub listados na seção 5.

**Equipe:** Civis  
**Instituição:** FIAP  
**Desafio:** Global Solution 2026/2 — CitizenTech


---

Desenvolvido pela equipe Civis como parte da Global Solution FIAP 2026/2.
