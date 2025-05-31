export interface Pokemon{
    id: number;
    name: string;
    sprites: {
        frony_default: string;
        other:{
            'official-artwork': {
                front_default: string;
            }
        }
    }
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        }
    }[];
}

export interface PokemonListItem{
    name: string;
    url: string;
}

export interface PokemonListResponse{
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}