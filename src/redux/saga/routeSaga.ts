import {takeLatest} from "redux-saga/effects";
import {GET_POKEMON, GET_POKEMON_DETAILS} from "../reducer/pokemon";
import {handlePokemons, handlePokemonDetails} from "./handler/pokemon";


export function* watcherSaga() {
    // @ts-ignore
    yield takeLatest(GET_POKEMON, handlePokemons)
    // @ts-ignore
    yield takeLatest(GET_POKEMON_DETAILS, handlePokemonDetails)
}
