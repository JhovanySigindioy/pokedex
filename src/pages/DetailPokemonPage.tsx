import React, { useEffect } from "react";
import { useParams } from "react-router";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetail } from "../store/thunks/fetchPokemonDetail";
import { CardPokemon } from "../components/CardPokemon";
import { addToTeam, deleteFromTeam } from "../store/slices/slicePokemon";

export const DetailPokemonPage: React.FC = () => {
    const { urlPokemon } = useParams();
    const urlPokemonSelected: string = decodeURIComponent(urlPokemon || "");
    const dispatch: AppDispatch = useDispatch();
    const { pokemonDetail, isLoading, teamPokemon } = useSelector((state: RootState) => state.pokemon);

    const isInTeam: boolean = teamPokemon.some((pokemon) => pokemon.name === pokemonDetail.name);

    const handleAddToTeam = () => {
        dispatch(addToTeam());
    }

    const handleDeleteFromTeam = () => {
        dispatch((deleteFromTeam(pokemonDetail)));
    }

    useEffect(() => {
        if (urlPokemonSelected) {
            dispatch(fetchPokemonDetail(urlPokemonSelected));
        }
    }, [dispatch, urlPokemonSelected]);

    return (
        <CardPokemon isLoading={isLoading} pokemonDetail={pokemonDetail} isInTeam={isInTeam} handleAddToTeam={handleAddToTeam} handleDeleteFromTeam={handleDeleteFromTeam} />
    );
};
