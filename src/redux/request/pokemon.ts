import axios from "axios";

const baseUrl = `https://pokeapi.co/api/v2/pokemon/`

export const requestPokemon = async (offset: number,limit: number) => {
    const url = `${baseUrl}?offset=${offset}&limit=${limit}`
    return await axios
        .get(url)
        .then(function (response:any) {
            return {
                response: response?.data,
                status: true
            }
        })
        .catch(function (error:any) {
            return {
                response: error,
                status:false,
            }
        })
}

export const requestPokemonDetails = async (url: any) => {
    return await axios
        .get(url)
        .then(function (response:any) {
            return {
                response: response?.data,
                status: true
            }
        })
        .catch(function (error:any) {
            return {
                response: error,
                status: false,
            }
        })
}
