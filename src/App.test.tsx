import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import { MainView } from "./screens/mainView/mainView";
import { Cards } from "../src/components/cards";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { PokeDetails } from './screens/details/pokeDetails';

const initialState = {
  getPokemons: {
    getPokemonsResult: [
      {
        abilities: [{
          ability: {
            name: "overgrow",
          }
        }],
        id: 1,
        name: "bulbasaur",
        types: [{
          type: {
            name: "grass",
          }
        }],
        sprites: {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
        }
      }
    ]
  }
};

const location = {
  state:{
    pokemon:{
      abilities: [{
        ability: {
          name: "overgrow",
        }
      }],
      id: 1,
      moves: [{
        move: {
          name: "razor-wind",
        }
      }],
      name: "bulbasaur",
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
      },
      types: [{
        type: {
          name: "grass",
        }
      }]
    }
  }
}

afterEach(() => {
  cleanup();
});

test('Render MainView', () => {
  const mockStore = configureStore();
  const store = mockStore(initialState)
  const tree = renderer.create(<Provider store={store}><MainView /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Cards', () => {
  const tree = renderer.create(<Cards pokemons={initialState.getPokemons.getPokemonsResult} />).toJSON();
  expect(tree).toMatchSnapshot();
})

test('Render PokeDetails', () => {
  const tree = renderer.create(<PokeDetails location={location} />).toJSON();
  expect(tree).toMatchSnapshot();
})