import {call, put} from "redux-saga/effects"
import {initialPokemonList, initialPokemonsDetails, loaderPokemons, loaderPokemonsDetails} from "../../reducer/pokemon";
import {requestPokemon, requestPokemonDetails} from "../../request/pokemon";
import {paramType, ResponseType} from "../../../type/type";


export function* handlePokemons({offset,limit}:paramType) {
    try {
        yield put(loaderPokemons(true));
        const pokemonList :ResponseType = yield call(requestPokemon, offset, limit);
        yield put(initialPokemonList(pokemonList));
        yield put(loaderPokemons(false));
    } catch (error) {
        console.log("error", error)
    }
}

export function* handlePokemonDetails({url}:any) {
    try {
        yield put(loaderPokemonsDetails(true));
        const pokemonDetails :ResponseType = yield call(requestPokemonDetails, url);
        yield put(initialPokemonsDetails(pokemonDetails));
        yield put(loaderPokemonsDetails(false));
    } catch (error) {
        console.log("error", error)
    }
}
