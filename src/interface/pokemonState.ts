import { Pokemon } from "./pokemon";
import { PokemonDetail } from "./pokemonDetail";

export interface PokemonState {
    pokemons: Pokemon;
    pokemonDetail: PokemonDetail;
    isLoading: boolean;
    currentPage: number;
    teamPokemon: PokemonDetail[];
}

