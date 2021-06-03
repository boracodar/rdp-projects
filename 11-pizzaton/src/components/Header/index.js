import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <h2>Pizz🍕ton</h2>
        </a>
      </Link>

      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/sobre">
          <a>Sobre</a>
        </Link>
        <Link href="/menu">
          <a>Menu</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
