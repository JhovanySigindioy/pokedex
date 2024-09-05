import { createSlice } from "@reduxjs/toolkit";
import { PokemonState } from "../../interface/pokemonState";
import { fetchPokemons } from "../thunks/fetchPokemons";
import { fetchPokemonDetail } from "../thunks/fetchPokemonDetail";

const initialState: PokemonState = {
    pokemons: {
        count: 0,
        next: "",
        previous: null,
        results: []
    },
    pokemonDetail: {
        name: "",
        height: 0,
        weight: 0,
        sprites: ""
    },
    isLoading: false,
    currentPage: 0,
    teamPokemon: [],
};

const slicePokemon = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        addToTeam: (state) => {
            state.teamPokemon.push({ ...state.pokemonDetail });
        },
        deleteFromTeam: (state, action) => {
            const newTeam = state.teamPokemon.filter((pokemon) => pokemon.name !== action.payload.name)
            console.log('soy El nuevo equipo', newTeam)
            state.teamPokemon = newTeam;
        },
        nextPage: (state) => {
            state.currentPage += 10;
        },
        backPage: (state) => {
            if (state.currentPage > 0) state.currentPage -= 10;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.pokemons = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchPokemons.rejected, (state) => {
                state.isLoading = false;
                console.error('Error al objtener datos desde la pokeApi');
            })
            .addCase(fetchPokemonDetail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
                state.pokemonDetail = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchPokemonDetail.rejected, (state) => {
                state.isLoading = false;
                console.error('Error al obtener detalles del pokemon, desde la pokeApi');
            })
    }
})

export const { nextPage, backPage, addToTeam, deleteFromTeam} = slicePokemon.actions;
export default slicePokemon.reducer;