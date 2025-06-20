import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import { Pokemon } from "../types/pokemon";

const fetchPokemon = async (nameOrId: string | number)=>{
    const {data} = await api.get<Pokemon>(`pokemon/${nameOrId}` 
    )
    return data;
}

export const usePokemon =(nameOrId: string| number)=>{
    return useQuery({
        queryKey: ['pokemon', nameOrId],
        queryFn: ()=> fetchPokemon(nameOrId),
    })
}