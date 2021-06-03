# O que é o Next.js?

- Framework para usar React em produção.
- Dá para usar tudo que já vimos até agora. Não muda absolutamente nada!
- Substitui outras libs, como o React Routes
- Vamos aprender como criar um site/aplicação completa e colocar em produção

# Vantagens de usar Next.js?

https://nextjs.org/

# Exemplo

https://github.com/lucascaton/contrata-se-devs
https://www.lucascaton.com.br/

# App

Site de uma pizzaria (mas poderia ser um app mais completo, acessando API, etc)

```bash
yarn create next-app pizzaton
yarn dev # você pode conferir em package.json
```

https://nextjs.org/docs/advanced-features/src-directory

--------------------------------------------------------------------------------

- Rotas/Páginas
  - Estáticas
    - / (Home)
      - Slogan
      - Ler do arquivo `config/pizzaton.json`
        - Endereço
        - Telefone
        - Whatsapp
      - Links para outras páginas
    - /sobre
      - História da pizzaria
    - /menu
      - Ler do arquivo `config/menu.json`
        - Mussarela
        - Portuguesa
        - Pepperoni

  - Dinâmicas
    - /pizzas
      - https://nextjs.org/docs/api-reference/next.config.js/redirects
    - /pizzas/[flavor].js
      - Ler do arquivo `config/menu.json`
      - Com lista dos sabores das pizzas
      - Preço
      - Foto da pizza

- Deployment
