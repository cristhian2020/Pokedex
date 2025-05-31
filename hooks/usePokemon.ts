import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import { Pokemon } from "../types/pokemon";

const fetchPokemon = async (nameOrId: string | number)=>{
    const {data} = await api.get<Pokemon>(`pokemon/${nameOrId}` 
    )
    return data;

}