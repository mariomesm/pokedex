import Pokemon from "@/components/pokemon-card.jsx";


export default function home(props) {
//   const [pokemonList, setPokemonList] = useState([]);

  //queryparam  ?limit=10
  //   useEffect(() => {
  //     fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
  //     .then(res => res.json())
  //     .then((res)=>{
  //       setPokemonList(res.results)
  //     })
  //   }, []);
  return (
    <>
      <header className="p-10">
        <img
          className="mx-auto"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="logo"
        />
      </header>
      <section className="grid sm:grid-cols-2 md:grid-cols-5 gap-5 p-10">
        {props.pokemonList.map((pokemon) => {
          //cada vez que se realiza un map se debe de poner una key
          return <Pokemon key={pokemon.url} url={pokemon.url} />;
        })}
      </section>
    </>
  );
}

//Solo los archivos que sean paginas pueden realizar esto
//Siempre va a regresar un objeto
export async function getServerSideProps() {
  
  const pokemonList =  await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then((res) => res.json())
    .then((res) => res.results);
    console.log("pokemonList",pokemonList)
  return {
    props: {pokemonList},
  };
}
