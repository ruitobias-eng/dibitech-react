# dibiTech Website - Modern Redesign

Este repositório contém o código-fonte do site da dibiTech, redesenhado com um visual moderno, estilo neumórfico e animações elegantes. O projeto foi desenvolvido utilizando React, TypeScript e Tailwind CSS.

## 🚀 Sobre a dibiTech

A dibiTech é especialista em engenharia de automação e Indústria 4.0, transformando desafios em soluções inteligentes. Oferecemos serviços completos em:

- **Automação de Processos**: Soluções para otimização e automação industrial
- **Desenvolvimento de Sistemas**: Software personalizado e aplicações web/mobile
- **Infraestrutura de TI**: Consultoria, implementação e gerenciamento de redes
- **Ciência de Dados e ML**: Análise de dados, IA e machine learning
- **Educação e Treinamento**: Capacitação técnica e consultoria

## ✨ Funcionalidades do Site

- **Design Neumórfico**: Elementos com sombras suaves e aparência 3D para uma experiência visual sofisticada
- **Animações Elegantes**: Transições fluidas e interativas implementadas com Framer Motion
- **Layout Responsivo**: Adaptação perfeita para diferentes tamanhos de tela (desktop, tablet e mobile)
- **Seções Completas**: Inclui Home, Serviços, Sobre Nós (com seção de Equipe Técnica), Portfólio e Contato
- **Rodapé Detalhado**: Informações de contato, links de serviços e copyright
- **Cores da Marca**: Utilização das cores amarelo, verde e preto em uma paleta moderna e profissional

## 🏗️ Estrutura do Projeto

```
dibitech-redesign/
├── dibitech/
│   ├── public/             # Arquivos estáticos
│   ├── src/                # Código-fonte da aplicação
│   │   ├── App.tsx         # Componente principal da aplicação
│   │   ├── AppRouter.tsx   # Configuração de rotas com React Router
│   │   ├── components/     # Componentes reutilizáveis
│   │   │   ├── Layout.tsx  # Componente de layout que inclui Navbar e Footer
│   │   │   ├── AnimatedNavbar.tsx
│   │   │   ├── AnimatedHero.tsx
│   │   │   ├── AnimatedServices.tsx
│   │   │   ├── AnimatedContactForm.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/          # Páginas principais
│   │   │   ├── ServicosPage.tsx
│   │   │   ├── SobrePage.tsx
│   │   │   ├── PortfolioPage.tsx
│   │   │   └── ContatoPage.tsx
│   │   ├── styles/         # Estilos globais e neumorphism.css
│   │   └── ...
│   ├── index.html          # Arquivo HTML principal
│   ├── package.json        # Dependências e scripts do projeto
│   ├── tailwind.config.js  # Configuração do Tailwind CSS
│   ├── tsconfig.json       # Configuração do TypeScript
│   └── vite.config.ts      # Configuração do Vite
└── README.md
```

## 🛠️ Tecnologias Utilizadas

- **React 18**: Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva
- **Framer Motion**: Biblioteca para animações de alta performance no React
- **React Router DOM**: Para gerenciamento de rotas na aplicação Single Page Application (SPA)
- **Vite**: Ferramenta de build rápida para projetos web

## 🚀 Como Configurar o Ambiente

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/dibitech-redesign.git
   cd dibitech-redesign/dibitech
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   pnpm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O site estará disponível em `http://localhost:5173` (ou outra porta disponível).

## 📦 Como Gerar o Build para Produção

Para gerar os arquivos otimizados para produção, execute:

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

Para visualizar o build de produção localmente:

```bash
npm run preview
```

## 🌐 Como Implantar

Os arquivos gerados na pasta `dist/` podem ser implantados em qualquer serviço de hospedagem de sites estáticos:

### Netlify
1. Arraste e solte a pasta `dist` no painel do Netlify
2. Ou conecte seu repositório GitHub para deploy automático

### Vercel
1. Importe o projeto diretamente do seu repositório GitHub, GitLab ou Bitbucket
2. Configure o comando de build como `npm run build`
3. Configure o diretório de output como `dist`

### GitHub Pages
1. Configure as GitHub Pages para servir a pasta `dist`
2. Use GitHub Actions para automatizar o processo de build e deploy

### Servidor Próprio
1. Faça upload do conteúdo da pasta `dist` para o diretório raiz do seu servidor web
2. Configure o servidor para servir arquivos estáticos

## 👥 Equipe Técnica

### Rodrigo (RC)
**Engenharia | Inovação Tecnológica | BI**

Especialista em soluções tecnológicas para engenharia de computação, IoT e sistemas embarcados, com sólida experiência em integração de sistemas, engenharia de computação e análise de dados aplicada ao setor financeiro.

### Rui Tobias (RT)
**Engenharia de Computação | Ciência de Dados | Indústria 4.0**

Expertise Multidisciplinar: Automação Industrial (CLPs, SCADA, Redes Industriais), Engenharia de Software (Java, .NET, Python, Delphi, Bancos de Dados), TI & Infraestrutura (Servidores, Cloud, Cibersegurança), Data Science (Análise de Dados, Machine Learning, IoT), Docência Técnica.

## 📞 Contato

- **Telefone**: (15) 98100-9064
- **Email**: engenharia@dibitech.com.br
- **Localização**: Apiaí, SP
- **LinkedIn**: [dibiTech](www.linkedin.com/in/ruitobias)

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias e novas funcionalidades.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

© 2025 Rui & Rodrigo Carvalho. Todos os direitos reservados. Design: HTML5 UP
