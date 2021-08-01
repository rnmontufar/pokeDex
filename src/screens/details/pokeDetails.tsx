
import { colors200, colors400 } from "../../helpers/helpers";

export function PokeDetails(props: any) {
  const pokemon = props.location.state.pokemon;
  return (
    <div className="mt-6 ">
      <div className="flex flex-wrap items-stretch justify-center m-auto max-w-xl">
        <figure className={`${colors400[pokemon.types[0].type.name]} bg-opacity-70 m-2 p-3 shadow-2xl hover:bg-opacity-90 bg-gray-100 rounded-xl p-8">`}>
          <div className="bg-gray-100 h-36 w-36 rounded-full mx-auto">
            <img className="w-32 h-32 rounded-full mx-auto" src={pokemon.sprites.front_default} alt={pokemon.name} width="384" height="512" />
            <span className="text-gray-500 text-xs rounded-xl px-2 bg-yellow-200">{'#' + pokemon.id.toString().padStart(3, '0')}</span>
            <div className="text-gray-900 text-lg text-center" >{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</div>
          </div>
          <div>
            <blockquote>
              <div className="mt-6">
                <span className="text-sm mr-1">Weight:</span>
                <span key={pokemon.weight} className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colors200[pokemon.types[0].type.name]} text-blue-900 mr-1`}>
                  {pokemon.weight}
                </span>
                <div className="mt-1">
                  <span className="text-sm mr-1">Height:</span>
                  <span key={pokemon.height} className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colors200[pokemon.types[0].type.name]} text-blue-900 mr-1`}>
                    {pokemon.height}
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-sm mr-1">Type:</span>
                  {pokemon.types.map((type: any) => (
                    <span key={type.type.name} className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colors200[pokemon.types[0].type.name]} text-blue-900 mr-1`}>
                      {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                    </span>
                  ))}
                </div>
                <div className="mt-1">
                  <span className="text-sm mr-1">Abilities:</span>
                  {pokemon.abilities.map((abilitie: any) => (
                    <span key={abilitie.ability.name} className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colors200[pokemon.types[0].type.name]} text-gray-900 mr-1`}>
                      {abilitie.ability.name[0].toUpperCase() + abilitie.ability.name.slice(1)}
                    </span>
                  ))}
                </div>
                <div className="mt-1">
                  <span className="text-sm mr-1">Moves:</span>
                  {pokemon.moves.map((move: any) => (
                    <span key={move.move.name} className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colors200[pokemon.types[0].type.name]} text-gray-900 mr-1`}>
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
