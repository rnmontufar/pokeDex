
import axios from "axios";

export async function getPokemonsDetails() {
  const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  const detail = await axios.all(pokemon.data.results.map(function(poke: { url: string; }) {
    return axios.get(poke.url);
  })).then(function(info){
    return info.map(function(pokeDetails:any){
      return pokeDetails.data;
    })
  }).catch((e) => {
    console.error(e);
  })
  return detail;
}