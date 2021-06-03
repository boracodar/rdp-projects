> PRIVADO: Essa aula foi inspirada nesse vídeo:
> https://www.youtube.com/watch?v=3cYtqrNUiVw&list=WL&index=3

---

- Criar componentes `App` e `Child`
- Adicionar `console.log("Componente está sendo renderizado!");`

# O que significa dizer que um componente está sendo (ou vai ser) renderizado?

- Executar o código (useState, useEffect, etc), ler o template e produzir um HTML que vai ser adicionado (ou removido) da DOM (navegador).

# Quando um componente é renderizado?

- Quando um de seus estados muda
- Quando os props mudam
- Quando o componente pai é renderizado

# Por que isso não é um problema em 95-99% dos casos?

- React é inteligente e performático
- Virtual DOM, etc.

# Mas e quando se torna um problema, como resolver?

- Memoization: https://en.wikipedia.org/wiki/Memoization
  - Requerimentos: Pure_function → https://en.wikipedia.org/wiki/Pure_function
    - Com os mesmos argumentos, deve retornar sempre o mesmo resultado
    - Não pode ter efeitos colaterais (escrever ou ler de um log/API, etc)
      - Exemplo:
        ```javascript
        const f  = (x) => x * 2; console.log(f(4)) // ✔
        const f2 = (x) => Date.now() * x * 2; console.log(f2(4)) // ✕
        ```

---

Copiar para o `README` do projeto:

```markdown
Podemos usar memoization de 3 formas diferentes no React:

- [ ] "Memoizar" um componente inteiro (ou seja, argumentos são as props)
  - React.memo

- [ ] "Memoizar" uma função
  - useCallback

- [ ] "Memoizar" um valor
  - useMemo
```
