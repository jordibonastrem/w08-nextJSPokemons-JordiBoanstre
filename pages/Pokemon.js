import axios from "axios";
import Image from "next/image";

export default function Pokemon(props) {
  console.log(props.results);
  const pokemons = props.results;
  return (
    <>
      {pokemons.map((pokemon) => (
        <h1 key={pokemon.url}>{pokemon.name}</h1>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const apiLink = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=200";
  const data = await axios.get(apiLink);

  return {
    props: data.data,
  };
}
