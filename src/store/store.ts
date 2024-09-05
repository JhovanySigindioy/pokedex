import { configureStore } from "@reduxjs/toolkit";
import slicePokemonReducer from "./slices/slicePokemon";


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
    reducer:{
        pokemon: slicePokemonReducer
    }
});