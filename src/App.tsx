import { Provider } from "react-redux";
import { MainView } from "./screens/mainView/mainView";
import { PokeDetails } from "./screens/details/pokeDetails";
import { store } from "./redux/store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Navbar } from "./components/navbar";
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/details" exact component={PokeDetails} />
          <Route path="/" exact component={MainView} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;