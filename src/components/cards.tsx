import { useHistory } from "react-router-dom";
import { getColor } from "../helpers/helpers";

export function Cards(props: any) {
  let { pokemons } = props;
  let history = useHistory();

  function handleClick(pokemon: any) {
    history.push({
      pathname: '/details',
      state: { pokemon: pokemon }
    });
  }

  return (
    <div className="bg-gradient-to-r from-green-100 via-red-300 to-yellow-600 mt-6">
      <div className="flex flex-wrap items-stretch justify-center m-auto max-w-6xl">
        {pokemons.map((pokemon: any) => (
          <div className={`bg-${getColor(pokemon.types[0].type.name)}-200 rounded-xl m-2 p-3 shadow-2xl hover:bg-opacity-20 cursor-pointer`} onClick={()=>handleClick(pokemon)}>
          <div className="bg-gray-100 h-36 w-36 rounded-full mx-auto">
              <img className="h-15 w-15 m-auto h-36 w-36" src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="mt-4">
              <span className="text-gray-500 text-xs rounded-xl px-2 bg-yellow-200">{'#' + pokemon.id.toString().padStart(3, '0')}</span>
              <div className="text-gray-900 text-lg" >{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</div>
            </div>
            <div className="mt-1">
              {pokemon.types.map((type: any) => (
                <span key={type.type.name} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 mr-1">
                  {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                </span>
              ))}
            </div>

            <div className="mt-1">
              {pokemon.abilities.map((abilitie: any) => (
                <span key={abilitie.ability.name} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-300 text-blue-800 mr-1">
                  {abilitie.ability.name[0].toUpperCase() + abilitie.ability.name.slice(1)}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}