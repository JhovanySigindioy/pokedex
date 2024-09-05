export interface PokemonResult {
    name: string;
    url: string;
}

export interface Pokemon {
    count: number;
    next: string;
    previous: string | null;
    results: PokemonResult[];
}