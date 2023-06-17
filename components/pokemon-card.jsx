import { useEffect, useState } from "react";

export default function Pokemon(props) {
  const [pokemon, setpokemon] = useState({});

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((res) => {
        setpokemon(res);
      });
  }, []);

  return (
    <article className="bg-stone-800 p-6 flex-col gap-4 w-36 rounded-md ">
      {/* nul sabe operation ? */}
      <img
        className="object-cover"
        src={pokemon?.sprites?.front_default}
        alt={pokemon.name}
      />
      <p className="text-white font-serif text-lg text-center">
        {pokemon.name}
      </p>
    </article>
  );
}
