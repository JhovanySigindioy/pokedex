import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataPokemon } from "../../helpers/getDataPokemon";

export const fetchPokemons = createAsyncThunk(
    "pokemon/fetchpokemons",
    async (url: string) => {
        const data = await getDataPokemon(url);
        return data;
    }
)