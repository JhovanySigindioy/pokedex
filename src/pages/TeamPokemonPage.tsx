import React from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { CardPokemon } from "../components";
import { Dispatch } from "redux";
import { deleteFromTeam } from "../store/slices/slicePokemon";

export const TeamPokemonPage: React.FC = () => {
    const { teamPokemon, isLoading, } = useSelector((state: RootState) => state.pokemon);
    const dispatch: Dispatch = useDispatch();

    const handleDeleteFromTeam = (pokemon: any) => {
        dispatch(deleteFromTeam(pokemon));
    }

    return (
        <div className="text-center">
            {
                teamPokemon.length > 0 ?
                    teamPokemon.map((pokemon, index) => (
                        <CardPokemon key={index} isLoading={isLoading} isInTeam={true} pokemonDetail={pokemon} handleDeleteFromTeam={() => handleDeleteFromTeam(pokemon)} />
                    )) :
                    <h1 className=" text-blue-400 text-4xl font-bold m-40 hover:scale-110 transition duration-100 ">No has asignado pokemons a tu equipo</h1>
            }
        </div>
    );
};
