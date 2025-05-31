import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';
import { PokemonListResponse } from '../types/pokemon';

const fetchPokemonList = async (offset = 0, limit = 20)=>{
    const { data } = await api.get<PokemonListResponse>(
        `pokemon?offset=${offset}&limit=${limit}`
    );
    return data;
}

export const usePokemonList = (offset = 0, limit = 20)=>{
    return useQuery({
        queryKey: ['pokemonList', offset, limit],
        queryFn: ()=> fetchPokemonList(offset, limit),
        placeholderData: (previusData)=> previusData,     
    })
}