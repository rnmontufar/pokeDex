import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";  
import { Cards } from "../../components/cards";
import { getPokemons } from "./redux/actions";
import { getPokemonsResult, isLoadingGetPokemonsResult } from "./redux/selectors";

export function MainView() {
  const dispatch = useDispatch();
  const pokemons = useSelector(getPokemonsResult)
  const isLoadingpokemonsReponse = useSelector(isLoadingGetPokemonsResult)
  const [initialState, setInitialState] = useState(false);

  useEffect(() => {
    setInitialState(true);
    dispatch(getPokemons({payload: "pikachu" }));
  }, [dispatch]);

  return (
    <div>
      <header >
        {!isLoadingpokemonsReponse && initialState ? <Cards pokemons={pokemons}/> : "Loading.."}
      </header>
    </div>
  )
}
