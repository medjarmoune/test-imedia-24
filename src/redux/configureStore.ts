import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import pokemon from "./reducer/pokemon";
import {watcherSaga} from "./saga/routeSaga";


const reducer = combineReducers({
    pokemonReducer: pokemon,
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
