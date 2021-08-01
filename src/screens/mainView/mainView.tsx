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
    dispatch(getPokemons({ payload: "pikachu" }));
  }, [dispatch]);

  return (
    <div>
      <header >
        {!isLoadingpokemonsReponse && initialState ? <Cards pokemons={pokemons} /> :
          <div className="flex justify-center m-auto mt-3 transform translate-x-10 translate-y-4 text-base">
            Loading...
          </div>
        }
      </header>
    </div>
  )
}
