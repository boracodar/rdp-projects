import Head from "next/head";
import Image from "next/image";

import Header from "../../../components/Header";

import { pizzas } from "../../../data/menu.json";

const Flavor = ({ flavor }) => {
  const { name, price, photoPath } = pizzas.find((pizza) => pizza.slug === flavor);

  return (
    <div className="container">
      <Head>
        <title>Pizzaton - Pizza "{name}"</title>
      </Head>

      <Header />

      <main>
        <h1>{name}</h1>

        <h2>{price}</h2>

        <Image src={photoPath} alt={`Foto da pizza ${name}`} width={600} height={338} />
      </main>
    </div>
  );
};

export default Flavor;

// Busca dados em tempo de build
export async function getStaticProps({ params }) {
  return { props: { ...params } };
}

// Especificar as rotas dinamicas para pré-renderização baseado em dados
export async function getStaticPaths() {
  return {
    paths: pizzas.map(({ slug }) => `/menu/pizzas/${slug}`),
    fallback: false,
  };
}
