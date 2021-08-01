
export function PokeDetails(props: any) {
  console.log("props", props.location.state);
  const pokemon = props.location.state.pokemon;

  const getColor = (name: any) => {
    return colors[name];
  };

  const colors: { [key: string]: any } = {
    fire: 'red',
    grass: 'green',
    electric: 'yellow',
    water: 'blue',
    ground: 'yellow',
    rock: 'gray',
    fairy: 'blue',
    poison: 'gray',
    bug: 'gray',
    dragon: 'red',
    psychic: 'pink',
    flying: 'yellow',
    fighting: 'blue',
    normal: 'pink',
    ice: 'gray'
  };

  return (
    <div className="mt-6 ">
      <div className="flex flex-wrap items-stretch justify-center m-auto max-w-xl">
        <figure className={`bg-${getColor(pokemon.types[0].type.name)}-400 m-2 p-3 shadow-2xl hover:bg-opacity-90 bg-gray-100 rounded-xl p-8">`}>
          <div className="bg-gray-100 h-36 w-36 rounded-full mx-auto">
            <img className="w-32 h-32 rounded-full mx-auto" src={pokemon.sprites.front_default} alt={pokemon.name} width="384" height="512" />
          </div>
          <div className="">
            <blockquote>
              <span className="text-gray-500 text-xs rounded-xl px-2 bg-yellow-200">{'#' + pokemon.id.toString().padStart(3, '0')}</span>
              <div className="text-gray-900 text-lg" >{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</div>
              <div className="mt-1">
                <span className="text-sm mr-1">Weight:</span>
                <span key={pokemon.weight} className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${getColor(pokemon.types[0].type.name)}-200 text-blue-900 mr-1`}>
                  {pokemon.weight}
                </span>
                <div className="mt-1">
                  <span className="text-sm mr-1">Height:</span>
                  <span key={pokemon.height} className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${getColor(pokemon.types[0].type.name)}-200 text-blue-900 mr-1`}>
                    {pokemon.height}
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-sm mr-1">Type:</span>
                  {pokemon.types.map((type: any) => (
                    <span key={type.type.name} className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${getColor(pokemon.types[0].type.name)}-200 text-blue-900 mr-1`}>
                      {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                    </span>
                  ))}
                </div>
                <div className="mt-1">
                  <span className="text-sm mr-1">Abilities:</span>
                  {pokemon.abilities.map((abilitie: any) => (
                    <span key={abilitie.ability.name} className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${getColor(pokemon.types[0].type.name)}-200 text-gray-900 mr-1`}>
                      {abilitie.ability.name[0].toUpperCase() + abilitie.ability.name.slice(1)}
                    </span>
                  ))}
                </div>
                <div className="mt-1">
                  <span className="text-sm mr-1">Moves:</span>
                  {pokemon.moves.map((move: any) => (
                    <span key={move.move.name} className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${getColor(pokemon.types[0].type.name)}-200 text-gray-900 mr-1`}>
                      {move.move.name[0].toUpperCase() + move.move.name.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
            </blockquote>
          </div>
        </figure>
      </div>
    </div>
  )
}