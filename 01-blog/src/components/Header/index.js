import "./styles.css";

// https://www.reshot.com/free-stock-photos/photo/photo-9lmXdy/
import mainImage from "./let-life-surprise-you.jpg";

function Header() {
  return (
    <header>
      <h1>Deixe a vida surpreender você</h1>
      <img src={mainImage} alt="Livro com a frase 'Let life surprise you'" />
    </header>
  );
}

export default Header;
