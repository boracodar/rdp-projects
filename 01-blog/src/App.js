import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <header>
        <h1>Deixe a vida surpreender você</h1>
      </header> */}
      <Header />

      <main>
        <Post title="Meu primeiro post">
          <p>Conteúdo do 1º post...</p>
        </Post>

        <Post title="Meu segundo post">
          <p>Conteúdo do 2º post...</p>
        </Post>
      </main>

      {/* <footer>&copy; Lucas Caton</footer> */}
      <Footer />
    </>
  );
}

export default App;
