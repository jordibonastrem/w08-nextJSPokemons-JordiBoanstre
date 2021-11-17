const PokemonsSSR = ({ pokemons }) => {
  return (
    <>
      <h1>Pokemons SSR</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://pokeapi-menchu.herokuapp.com/pokemon`);
  const pokemons = await res.json();

  return {
    props: {
      pokemons,
    },
  };
}

export default PokemonsSSR;
