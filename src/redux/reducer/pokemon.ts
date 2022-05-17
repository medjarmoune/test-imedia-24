import {paramType, ResponseType, StateType} from "../../type/type";

export const GET_POKEMON = "GET_POKEMON";
export const INITIAL_POKEMON = "INITIAL_POKEMON";
export const LOADER_POKEMON_STATUS = "LOADER_POKEMON_STATUS";

export const GET_POKEMON_DETAILS = "GET_POKEMON_DETAILS";
export const INITIAL_POKEMON_DETAILS = "INITIAL_POKEMON_DETAILS";
export const LOADER_POKEMON_DETAILS_STATUS = "LOADER_POKEMON_DETAILS_STATUS";


export const getPokemons = ({offset,limit}: paramType) => ({
    type: GET_POKEMON,
    offset,
    limit
})

export const initialPokemonList = (pokemonList:ResponseType) => ({
    type: INITIAL_POKEMON,
    pokemonList,
})

export const loaderPokemons = (status:boolean) => ({
    type: LOADER_POKEMON_STATUS,
    loaderPokemons : status,
})

export const getPokemonsDetails = ({url}: any) => ({
    type: GET_POKEMON_DETAILS,
    url,
})

export const initialPokemonsDetails = (pokemonDetails:any) => ({
    type: INITIAL_POKEMON_DETAILS,
    pokemonDetails,
})

export const loaderPokemonsDetails = (status:boolean) => ({
    type: LOADER_POKEMON_DETAILS_STATUS,
    loaderPokemonDetails : status,
})

const initialState: StateType =  {
    pokemonList:[],
    loaderPokemons:false,
    pokemonDetails:undefined,
    loaderPokemonDetails:false
}

export  default (state = initialState, action: any) =>{
    switch (action.type) {
        case INITIAL_POKEMON:
            const {pokemonList}  = action;
            return {...state, pokemonList};
        case LOADER_POKEMON_STATUS:
            const {loaderPokemons} = action;
            return {...state, loaderPokemons};
            case INITIAL_POKEMON_DETAILS:
            const {pokemonDetails}  = action;
            return {...state, pokemonDetails};
        case LOADER_POKEMON_DETAILS_STATUS:
            const {loaderPokemonDetails} = action;
            return {...state, loaderPokemonDetails};
        default:
            return state;
    }
}

