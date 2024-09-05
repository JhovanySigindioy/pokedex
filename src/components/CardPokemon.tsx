import React from "react";
import { Loading } from "./Loading";
import { PokemonDetail } from "../interface/pokemonDetail";


export const CardPokemon: React.FC<{ isLoading: boolean, pokemonDetail: PokemonDetail, isInTeam: boolean, handleAddToTeam?: () => void, handleDeleteFromTeam?: () => void }> = ({ isLoading, pokemonDetail, isInTeam, handleAddToTeam, handleDeleteFromTeam }) => {
    console.log("validamos que pokemos estn en el equipo: ", pokemonDetail);

    return (
        <div className="flex justify-center items-center p-10">
            <div className="w-full max-w-xs bg-white rounded-lg shadow-lg">
                <div className="rounded-t-lg py-10 flex items-center justify-center bg-gradient-to-b from-blue-500 to-indigo-600">
                    {isLoading ?
                        <Loading />
                        :
                        <img
                            src={pokemonDetail.sprites}
                            alt={`${pokemonDetail.name}, pokemon seleccionado`}
                            className="w-40 h-40 object-contain"
                        />}
                </div>
                <div className="p-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 capitalize">{pokemonDetail.name}</h2>
                    <p className="text-gray-600 mt-2">Altura: {pokemonDetail.height}</p>
                    <p className="text-gray-600">Peso: {pokemonDetail.weight}</p>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
                        onClick={isInTeam ? handleDeleteFromTeam : handleAddToTeam}
                    >
                        {isInTeam ? "Eliminar del equipo" : "Agregar al equipo"}
                    </button>
                </div>
            </div>
        </div>
    );
};
