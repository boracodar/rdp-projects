O `React.memo` é muito bom quando estamos passando `props` com valores primitivos (strings, integers, booleans, etc).

Mas não vai funcionar em todos os casos, por exemplo, quando passamos objetos, arrays, funções. Isso porque o memo usa "Shallow comparison" para verificar se as props (argumentos) são os mesmos.

# Shallow comparison

Shallow comparison (comparação superficial)
é quando as propriedades dos objetos sendo comparados são feitas usando `===`
e comparações mais profundas não são feitas.

↓

```diff
diff --git a/src/App.js b/src/App.js
-      <Child counter={counter} />
+      <Child counter={counter} incrementCounter={() => setCounter(counter + 1)} />

diff --git a/src/components/Child/index.js b/src/components/Child/index.js

-const Child = ({ counter }) => {
+const Child = ({ counter, incrementCounter }) => {

     <div className="child">
       <h2>Componente filho: {counter}</h2>
+      <button onClick={incrementCounter}>+1</button>
     </div>
```

Ao clicar no novo botão, o componente filho deveria ser renderizado.

Mas ao atualizar o text input, a gente não quer que o componente seja renderizado, porque uma coisa não tem nada a ver com a outra.

O `memo` ainda está no código, mas ele não parece estar funcionando. Só que na verdade ele está, mas por conta do Shallow comparison, ele pensa que é uma nova função toda vez.

Tem uma forma bem interessante de descobrirmos por qual motivo um componente é renderizado:

→ Chrome → React extention → Profiler

↓

```diff
diff --git a/src/App.js b/src/App.js
   const [input, setInput] = useState("");
+  const incrementCounter = () => setCounter(counter + 1);

-      <Child counter={counter} incrementCounter={() => setCounter(counter + 1 } />
+      <Child counter={counter} incrementCounter={incrementCounter} />
     </main>
```

↓

→ Chrome → Dev Tools (verificar console) → problema PERSISTE!

↓

```diff
diff --git a/src/App.js b/src/App.js
-import { useState } from "react";
+import { useState, useCallback } from "react";

-  const incrementCounter = () => setCounter(counter + 1);
+  const incrementCounter = useCallback(() => setCounter(counter + 1), [counter]);
```

→ Chrome → Dev Tools (verificar console) → problema RESOLVIDO 🎉
→ Chrome → React extention → Profiler → problema RESOLVIDO 🎉

↓

```diff
diff --git a/src/App.js b/src/App.js
-  const incrementCounter = useCallback(() => setCounter(counter + 1), [counter]);
+  const incrementCounter = useCallback(() => setCounter(counter + 1), []);
```

→ Chrome → Dev Tools (verificar console) → problema VOLTA!

↓

Desfazer última parte

↓

Marcar item no `README` como "pronto"
