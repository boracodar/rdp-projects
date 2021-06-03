- [ ] Introdução + criação/limpeza do app
  - [ ] Vamos aprender novos conceitos
  - [ ] Vamos reforçar conceitos que já vimos em aulas anteriores

  - [ ] Explicar que vai ser um app similar ao app de cronometro do iOS/Android
    - [ ] Inclusive com timers que vão rodar em paralelo
  - [ ] "timers" é um nome reservado
  - [ ] Limpeza do projeto, mas mantendo o `App.css`

- [ ] `App` & index.css (layout inicial)
- [ ] `TimerForm` → CSS Modules
- [ ] `TimerForm` → onSubmit event
- [ ] `TimerForm` → FormData
- [ ] `App` → timers (useState)
- [ ] `App` → `.timers` CSS class
- [ ] `App`/`Timer` → Spread Properties
- [ ] `Timer` → custom font
- [ ] `Timer` → setInterval
- [ ] `Timer` → running state + componente SVG (`Loading`)
- [ ] `Timer` → delete timer
- [ ] `Timer` → useEffect com "clean up" (unmount)
- [ ] Remover valores padrões do form e do estado

--------------------------------------------------------------------------------

# useRef

Esse hook nos permite manter valores
durante todo o ciclo de vida de um componente.

Eles são usados primariamente para acessar o DOM (árvore de elementos HTML).

https://reactjs.org/docs/hooks-reference.html#useref

If you pass a ref object to React with <div ref={myRef} />,
React will set its .current property to the corresponding DOM node whenever that node changes.
