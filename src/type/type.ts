
export type PokemonType ={
    name: string,
    id:string
}

export type StateType ={
    pokemonList: PokemonType[]
    loaderPokemons:boolean,
    pokemonDetails:any,
    loaderPokemonDetails:boolean

}
export type ActionType ={
    payload: any
    type:string
}

export type ResponseType ={
    response: object,
    status: string
}

export type paramType ={
    offset: number,
    limit: number
}
export type resultType ={
    name: string,
    url: string
}

