import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!username) return;

    // https://docs.github.com/en/rest/reference/repos
    fetch(`https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=100`)
      .then((response) => response.json())
      .then((data) => {
        const result = data.sort((a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1));

        setRepos(result);
      });
  }, [username]);

  const handleSearch = async () => {
    setIsLoading(true);

    // https://docs.github.com/en/rest/reference/search#search-users
    await fetch(`https://api.github.com/search/users?q=${query}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.items));

    setIsLoading(false);
  };

  return (
    <main>
      <section className="search">
        <input
          type="search"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Username"
        />

        <button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? "Pesquisando..." : "Pesquisar"}
        </button>

        {!!searchResults.length && (
          <>
            <h1>Resultado da busca:</h1>

            <ul>
              {searchResults.map((user) => (
                <li key={user.id}>
                  <img src={user.avatar_url} alt={`Foto de ${user.login}`} />

                  {user.login}

                  {username === user.login ? (
                    " ✔"
                  ) : (
                    <button onClick={() => setUsername(user.login)}>Selecionar</button>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <section className="repos">
        {username ? (
          <>
            <h1>Repositórios de {username}:</h1>

            {repos.length ? (
              <ul>
                {repos.map((repo) => (
                  <li key={repo.id}>
                    {repo.name} ({repo.stargazers_count})
                  </li>
                ))}
              </ul>
            ) : (
              "Carregando..."
            )}
          </>
        ) : (
          <p>Faça uma busca primeiro.</p>
        )}
      </section>
    </main>
  );
}

export default App;
