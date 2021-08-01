import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";  
import { Table } from "../../components/table";
import { getPokemons } from "./redux/actions";
import { getPokemonsResult, isLoadingGetPokemonsResult } from "./redux/selectors";

export function MainView() {
  const dispatch = useDispatch();
  const pokemons = useSelector(getPokemonsResult)
  const isLoadingpokemonsReponse = useSelector(isLoadingGetPokemonsResult)
  console.log("view: ",pokemons);
  const [initialState, setInitialState] = useState(false);

  useEffect(() => {
    setInitialState(true);
    dispatch(getPokemons({payload: "pikachu", id:2 }));
  }, [dispatch]);

  return (
    <div>
      <header >
        {!isLoadingpokemonsReponse && initialState ? <Table pokemons={pokemons}/> : "Loading.."}
      </header>
    </div>
  )
}
