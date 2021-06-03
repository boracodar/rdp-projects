Simulando um problema de performance:

```diff
diff --git a/src/components/Child/index.js b/src/components/Child/index.js
 const Child = ({ counter, incrementCounter }) => {
+  console.log("Início da função");
+  const array = Array.from({ length: 15_000_000 }, (_, i) => Math.tan(i));
+  const lastElement = array.slice(-1)[0];
   console.log("Componente está sendo renderizado!");

       <button onClick={incrementCounter}>+1</button>
+      <h3>{lastElement}</h3>
     </div>
```

↓

→ Chrome → Dev Tools (verificar console) → problema CRIADO!
  - Ou seja, demora muito cada vez que que componente precisa ser renderizado
    - Clicar no botão +1 do <Child /> para demonstrar

↓

Não podemos usar o `React.memo` nesse caso.
Mas existe uma alternativa apropriada: o `useMemo`.

↓

```diff
diff --git a/src/components/Child/index.js b/src/components/Child/index.js
-import { memo } from "react";
+import { memo, useMemo } from "react";

-  const array = Array.from({ length: 15_000_000 }, (_, i) => Math.tan(i));
-  const lastElement = array.slice(-1)[0];
+  const lastElement = useMemo(() => {
+    const array = Array.from({ length: 15_000_000 }, (_, i) => Math.tan(i));
+
+    return array.slice(-1)[0];
+  }, []);

   console.log("Componente está sendo renderizado!");
```

↓

→ Chrome → Dev Tools (verificar console) → problema RESOLVIDO 🎉

↓

Explicar que poderíamos passar uma dependência como 2º argumento do `useMemo`,
como por exemplo um state.

↓

Marcar item no `README` como "pronto"
