# Referências/inspirações

- https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer
- https://www.youtube.com/watch?v=o-nCM1857AQ
- https://github.com/hswolff/youtube/blob/master/videos/why-i-love-usereducer/src/LoginUseReducer.js

Não foi usado:
- https://daveceddia.com/usereducer-hook-examples/

--------------------------------------------------------------------------------

# O que é um "reducer"?

"reducer" é um nome bonito para uma função que recebe 2 valores e retorna 1.

Se você tem um array de alguma coisa e quer combinar todos os elementos em um único valor uma das formas de fazer isso é através de um "reducer".

No JavaScript, os Arrays tem nativamente uma função chamada "reduce" que vão fazer exatamente isso para a gente.

[Demo → somar valores de um array]

```javascript
let total = 0;
[1, 2, 3].forEach(number => { total += number })

//    ↓

sum = [1, 2, 3].reduce((total, number) => total + number, 0);
// mudar valor inicial para 10
```

--------------------------------------------------------------------------------

# Ok, entendi a função `reduce` dos arrays, mas o que é `useReducer`?

Eu gastei esse tempo todo explicando o que é e como usar o "reduce" porque o `useReducer` recebe os mesmos argumentos e basicamente funciona da mesma forma.

Só que ele é um hook e é uma alternativa ao `useState`, só que usado para gerenciar lógica de estados mais cmplexos, que envolve múltiplos sub-valores, ou quando o próximo estado depende do estado anterior.

`useReducer` também possibilita a otimização da performance de componentes
porque é possível usar um dispatch, que a gente já vai ver na prática como funciona.

--------------------------------------------------------------------------------

# Clean up

```diff
diff --git a/src/App.js b/src/App.js
@@ -1,25 +1,5 @@
 function App() {
+  return <h1>Hello World!</h1>;
```

--------------------------------------------------------------------------------

# Implement Counter

```diff
diff --git a/src/App.js b/src/App.js
@@ -1,5 +1,11 @@
+import Counter from "./components/Counter";
+
 function App() {
-  return <h1>Hello World!</h1>;
+  return (
+    <>
+      <Counter />
+    </>
+  );
 }

 export default App;
diff --git a/src/components/Counter/index.js b/src/components/Counter/index.js
@@ -0,0 +1,19 @@
+import { useReducer } from "react";
+
+const Counter = () => {
+  const [total, dispatch] = useReducer((state, action) => {
+    console.log({ state, action });
+    return state + action;
+  }, 0);
+
+  return (
+    <>
+      <h2>{total}</h2>
+
+      <button onClick={() => dispatch(1)}>+1</button>
+      <button onClick={() => dispatch(2)}>+2</button>
+    </>
+  );
+};
+
+export default Counter;
```

--------------------------------------------------------------------------------

# Extract 'sum' to its own operations reducer file

```diff
diff --git a/src/components/Counter/index.js b/src/components/Counter/index.js
@@ -1,10 +1,13 @@
 import { useReducer } from "react";

+import { sum } from "../../reducers/operations";
+
 const Counter = () => {
-  const [total, dispatch] = useReducer((state, action) => {
-    console.log({ state, action });
-    return state + action;
-  }, 0);
+  const [total, dispatch] = useReducer(sum, 0);

   return (
     <>
diff --git a/src/reducers/operations.js b/src/reducers/operations.js
@@ -0,0 +1,4 @@
+export const sum = (state, action) => {
+  console.log({ state, action });
+  return state + action;
+};
```

--------------------------------------------------------------------------------

# SignInForm 1

```diff
diff --git a/src/App.js b/src/App.js
@@ -1,11 +1,13 @@
-import Counter from "./components/Counter";
+import SignInForm from "./components/SignInForm";

 function App() {
   return (
     <>
-      <Counter />
+      <SignInForm />
     </>
   );
 }
diff --git a/src/components/SignInForm/index.js b/src/components/SignInForm/index.js
@@ -0,0 +1,29 @@
+import "./styles.css";
+
+const SignInForm = () => {
+  return (
+    <main>
+      <form>
+        <h1>Autenticação</h1>
+
+        {/* <p className="error">Usuário ou senha inválidos</p> */}
+
+        <label>
+          <p>Nome de usuário</p>
+          <input type="text" />
+        </label>
+
+        <label>
+          <p>Senha</p>
+          <input type="password" />
+        </label>
+
+        <footer>
+          <button type="submit">Entrar</button>
+        </footer>
+      </form>
+    </main>
+  );
+};
+
+export default SignInForm;


diff --git a/src/index.css b/src/index.css
@@ -1,4 +1,10 @@
-body {
+* {
   margin: 0;
+  padding: 0;
+  box-sizing: border-box;
+}
+
+body {
   font-family: sans-serif;
+  background-color: #f5f5f5;
 }
```

```css
/* src/components/SignInForm/styles.css */

main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  width: 400px;
  margin: 1rem;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 5px;
}

.error {
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid #ef4444;
  border-radius: 5px;
  background-color: #fee2e2
}

label {
  display: block;
  margin-top: 1rem;
}

label input {
  width: 100%;
  margin-top: 0.25rem;
  padding: 0.5rem;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

footer {
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 5px;
}

button[disabled] {
  background-color: #93c5fd;
}
```

--------------------------------------------------------------------------------

# SignInForm 2

```diff
diff --git a/src/components/SignInForm/index.js b/src/components/SignInForm/index.js
@@ -1,6 +1,10 @@
+import { useState } from "react";
+
 import "./styles.css";

 const SignInForm = () => {
+  const [username, setUsername] = useState("");
+  const [password, setPassword] = useState("");

   return (
     <main>
       <form>
@@ -10,12 +14,20 @@ const SignInForm = () => {

         <label>
           <p>Nome de usuário</p>
-          <input type="text" />
+          <input
+            type="text"
+            value={username}
+            onChange={({ target }) => setUsername(target.value)}
+          />
         </label>

         <label>
           <p>Senha</p>
-          <input type="password" />
+          <input
+            type="password"
+            value={password}
+            onChange={({ target }) => setPassword(target.value)}
+          />
         </label>

         <footer>
```

--------------------------------------------------------------------------------

# SignInForm 3

```diff
diff --git a/src/services/api.js b/src/services/api.js
@@ -0,0 +1,11 @@
+export async function signIn({ username, password }) {
+  return new Promise((resolve, reject) => {
+    setTimeout(() => {
+      if (username === "lucas" && password === "caton") {
+        resolve();
+      } else {
+        reject();
+      }
+    }, 1000);
+  });
+}

diff --git a/src/components/SignInForm/index.js b/src/components/SignInForm/index.js
@@ -1,16 +1,35 @@
 import { useState } from "react";

+import { signIn } from "../../services/api";

 import "./styles.css";

 const SignInForm = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
+  const [isLoading, setIsLoading] = useState(false);
+  const [error, setError] = useState("");
+
+  const handleFormSubmit = async (event) => {
+    event.preventDefault();
+
+    setIsLoading(true);
+
+    try {
+      await signIn({ username, password });
+    } catch (error) {
+      setError("Usuário ou senha inválidos");
+    }
+
+    setIsLoading(false);
+  };
+
   return (
     <main>
-      <form>
+      <form onSubmit={handleFormSubmit}>
         <h1>Autenticação</h1>

-        {/* <p className="error">Usuário ou senha inválidos</p> */}
+        {error && <p className="error">{error}</p>}

         <label>
           <p>Nome de usuário</p>
@@ -31,7 +50,9 @@ const SignInForm = () => {
         </label>

         <footer>
-          <button type="submit">Entrar</button>
+          <button type="submit" disabled={isLoading}>
+            {isLoading ? "Autenticando..." : "Entrar"}
+          </button>
         </footer>
       </form>
     </main>
```

--------------------------------------------------------------------------------

# SignInForm 4

```diff
diff --git a/src/components/SignInForm/index.js b/src/components/SignInForm/index.js
@@ -9,6 +9,7 @@ const SignInForm = () => {
   const [error, setError] = useState("");
+  const [isSignedIn, setIsSignedIn] = useState(false);

@@ -17,6 +18,7 @@ const SignInForm = () => {
     try {
       await signIn({ username, password });
+      setIsSignedIn(true);
     } catch (error) {
       setError("Usuário ou senha inválidos");
     }

@@ -26,6 +28,12 @@ const SignInForm = () => {
     <main>
+      {isSignedIn ? (
+        <>
+          <h1>Olá, {username}!</h1>
+          <button onClick={() => setIsSignedIn(false)}>Sair</button>
+        </>
+      ) : (
         <form onSubmit={handleFormSubmit}>
          ...
         </form>
+      )}
     </main>
```

--------------------------------------------------------------------------------

# SignInForm 5

```diff
diff --git a/src/components/SignInForm/index.js b/src/components/SignInForm/index.js
@@ -19,6 +19,9 @@ const SignInForm = () => {
     try {
       await signIn({ username, password });
       setIsSignedIn(true);
+      setUsername("");
+      setPassword("");
+      setError("");
     } catch (error) {
       setError("Usuário ou senha inválidos");
     }
```

--------------------------------------------------------------------------------

Estamos nos preocupando com transição de estados (states)
em vez de se preocupar com o fluxo do usuário (ações do usuário)

--------------------------------------------------------------------------------

# SignInForm with useReducer 1

```diff
diff --git a/src/components/SignInForm/index.js b/src/components/SignInForm/index.js
@@ -1,10 +1,24 @@
-import { useState } from "react";
+import { useState, useReducer } from "react";

 import { signIn } from "../../services/api";

 import "./styles.css";

+const signInReducer = (state, action) => {
+  return state;
+};
+
+const initialState = {
+  username: "",
+  password: "",
+  isLoading: false,
+  error: "",
+  isSignedIn: false,
+};
+
 const SignInForm = () => {
+  const [state, dispatch] = useReducer(signInReducer, initialState);
+
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [isLoading, setIsLoading] = useState(false);
```

--------------------------------------------------------------------------------

# SignInForm with useReducer 2

```diff
diff --git a/src/components/SignInForm/index.js b/src/components/SignInForm/index.js
@@ -5,6 +5,42 @@ import { signIn } from "../../services/api";
 import "./styles.css";

 const signInReducer = (state, action) => {
+  switch (action.type) {
+    case "SIGN_IN":
+      return {
+        ...state,
+        isLoading: true,
+      };
+
+    case "SUCCESS":
+      return {
+        ...state,
+        isLoading: false,
+        error: "",
+        isSignedIn: true,
+      };
+
+    case "ERROR":
+      return {
+        ...state,
+        isLoading: false,
+        error: "Usuário ou senha inválidos",
+      };
+
+    case "SIGN_OUT":
+      return {
+        ...state,
+        isSignedIn: false,
+
+        // ↓ DEIXAR PARA ARRUMAR DEPOIS DE PROPÓSITO
+        // ↓ EXPLICAR QUE COMEÇAMOS A PENSAR NO FLUXO E NÃO EM ESTADOS
+        // username: "",
+        // password: "",
+      };
+
+    default:
+      break;
+  }
   return state;
 };

@@ -28,19 +64,14 @@ const SignInForm = () => {
   const handleFormSubmit = async (event) => {
     event.preventDefault();

-    setIsLoading(true);
+    dispatch({ type: "SIGN_IN" });

     try {
       await signIn({ username, password });
-      setIsSignedIn(true);
-      setUsername("");
-      setPassword("");
-      setError("");
+      dispatch({ type: "SUCCESS" });
     } catch (error) {
-      setError("Usuário ou senha inválidos");
+      dispatch({ type: "ERROR" });
     }
-
-    setIsLoading(false);
   };

   return (
@@ -48,7 +79,7 @@ const SignInForm = () => {
       {isSignedIn ? (
         <>
           <h1>Olá, {username}!</h1>
-          <button onClick={() => setIsSignedIn(false)}>Sair</button>
+          <button onClick={() => dispatch({ type: "SIGN_OUT" })}>Sair</button>
         </>
       ) : (
         <form onSubmit={handleFormSubmit}>
```

--------------------------------------------------------------------------------

# SignInForm with useReducer 3

```diff
diff --git a/src/components/SignInForm/index.js b/src/components/SignInForm/index.js
@@ -1,4 +1,4 @@
-import { useState, useReducer } from "react";
+import { useReducer } from "react";

 import { signIn } from "../../services/api";

@@ -55,11 +55,7 @@ const initialState = {
 const SignInForm = () => {
   const [state, dispatch] = useReducer(signInReducer, initialState);

-  const [username, setUsername] = useState("");
-  const [password, setPassword] = useState("");
-  const [isLoading, setIsLoading] = useState(false);
-  const [error, setError] = useState("");
-  const [isSignedIn, setIsSignedIn] = useState(false);
+  const { username, password, isLoading, error, isSignedIn } = state;

   const handleFormSubmit = async (event) => {
     event.preventDefault();
```

--------------------------------------------------------------------------------

# SignInForm with useReducer 4

```diff
diff --git a/src/components/SignInForm/index.js b/src/components/SignInForm/index.js
@@ -38,6 +38,13 @@ const signInReducer = (state, action) => {
         // password: "",
       };

+    case "SET_ATTRIBUTE": {
+      return {
+        ...state,
+        [action.fieldName]: action.payload,
+      };
+    }
+
     default:
       break;
   }
@@ -88,7 +95,9 @@ const SignInForm = () => {
             <input
               type="text"
               value={username}
-              onChange={({ target }) => setUsername(target.value)}
+              onChange={({ target }) =>
+                dispatch({ type: "SET_ATTRIBUTE", fieldName: "username", payload: target.value })
+              }
             />
           </label>

@@ -97,7 +106,9 @@ const SignInForm = () => {
             <input
               type="password"
               value={password}
-              onChange={({ target }) => setPassword(target.value)}
+              onChange={({ target }) =>
+                dispatch({ type: "SET_ATTRIBUTE", fieldName: "password", payload: target.value })
+              }
             />
           </label>

```

--------------------------------------------------------------------------------

# SignInForm with useReducer 5

```diff
diff --git a/src/components/SignInForm/index.js b/src/components/SignInForm/index.js
         isSignedIn: false,
-
-        // ↓ DEIXAR PARA ARRUMAR DEPOIS DE PROPÓSITO
-        // ↓ EXPLICAR QUE COMEÇAMOS A PENSAR NO FLUXO E NÃO EM ESTADOS
-        // username: "",
-        // password: "",
+        username: "",
+        password: "",
       };

     case "SET_ATTRIBUTE": {
```

--------------------------------------------------------------------------------

A idéia principal é que quando temos estados mais complexos,
a gente pense em fluxos, ou seja, os comportamentos do usuário.

Porque um componente desses pode ficar muito complexo rapidamente,
imagine se a gente adicionar 2FA,
ou um link para redefinir a senha, aí precisaria de mais campos...
ou login via Facebook, ou via Google, via Apple...
ou seja, pode facilmente ficar mais complexo e difícil de manter.

E o `useReducer` é um dos hooks mais incríveis que existe
justamente por nos ajudar a gerenciar estados de forma mais fácil!
