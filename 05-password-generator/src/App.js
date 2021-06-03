import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <main className="dark">
      <div className="container">
        <h1 className="app-title">Gerador de Senhas</h1>

        <PasswordGenerator />
      </div>
    </main>
  );
}

export default App;
