```javascript
import { memo } from "react";
// ...
export default memo(Child);
```

↓

```diff
diff --git a/src/App.js b/src/App.js
-      <Child />
+      <Child counter={counter} />
     </main>

diff --git a/src/components/Child/index.js b/src/components/Child/index.js
-const Child = () => {
+const Child = ({ counter }) => {

-  return <h2 className="child">Componente filho</h2>;
+  return <h2 className="child">Componente filho: {counter}</h2>;
```

↓

```diff
diff --git a/src/App.js b/src/App.js
   const [counter, setCounter] = useState(0);
+  const [input, setInput] = useState("");

       <button onClick={() => setCounter(counter + 1)}>+1</button>
+      <br />
+      <br />
+      <input type="text" value={input}
+        onChange={({ target }) => setInput(target.value)} />
+
       <Child counter={counter} />
     </main>
   );
```

↓

```diff
diff --git a/src/components/Child/index.js b/src/components/Child/index.js

-import { memo } from "react";

-export default memo(Child);
+export default Child;
```

↓

Desfazer última parte

↓

Marcar item no `README` como "pronto"
