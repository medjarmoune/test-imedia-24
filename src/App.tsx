import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/configureStore";
import PokemonsListComponent from "./components/ClickMe";

function App() {

  return (
        <Provider store={store}>
            <div className="App">
                <PokemonsListComponent/>
            </div>
        </Provider>
  );
}

export default App;
