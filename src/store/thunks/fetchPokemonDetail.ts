import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataPokemon } from "../../helpers/getDataPokemon";

export const fetchPokemonDetail = createAsyncThunk(
    "pokemon/fetchpokemonDetail",
    async (url: string) => {
        const data = await getDataPokemon(url);
        return {
            name: data.name,
            height: data.height,
            weight: data.weight,
            sprites: data.sprites.other.dream_world.front_default
        };
    }
)