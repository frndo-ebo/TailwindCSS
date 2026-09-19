# Desvendando o Código  
  
Landing page em React + Vite estilizada com Tailwind CSS v4, criada como demonstração de componentes utilitários.  
  
## Tecnologias  
  
- React 19  
- Vite 8  
- Tailwind CSS v4 (via `@tailwindcss/vite`)  
- Oxlint  
  
## Como rodar  
  
\`\`\`bash  
cd frontend  
npm install  
npm run dev  
\`\`\`  
  
Scripts disponíveis:  
- `dev` — inicia o servidor de desenvolvimento  
- `build` — gera build de produção  
- `preview` — visualiza o build  
- `lint` — roda o Oxlint  
  
## Estrutura do projeto  
  
- `src/App.jsx` — componente raiz, compõe o layout (Header, Hero, Recursos, Sobre, Footer)  
- `src/components/header.jsx` — barra de navegação  
- `src/components/hero.jsx` — seção inicial com `HeroContent` e `HeroCodeCard`  
- `src/components/Recurso.jsx` + `recursoCard.jsx` — grid de funcionalidades  
- `src/components/sobre.jsx` — seção "Sobre"  
- `src/components/footer.jsx` — rodapé  
  
## Licença  
  
Projeto de estudo/demonstração.
