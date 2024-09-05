import React from "react";
import { useEffect } from "react";
import { Loading } from "../components/Loading";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/thunks/fetchPokemons";
import { backPage, nextPage } from "../store/slices/slicePokemon";
import { Link } from "react-router-dom";

export const ListPokemonPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    const { pokemons, isLoading, currentPage } = useSelector((state: RootState) => state.pokemon)

    useEffect(() => {
        const url: string = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${currentPage}`
        dispatch(fetchPokemons(url));

    }, [dispatch, currentPage]);
    return (
        <div className="w-screen text-center ">

            <h1 className="pt-4 pb-6 mx-auto text-4xl font-bold text-blue-400 tracking-wide">Crea tu equipo pokemon</h1>
            <div className="w-full max-w-2xl my-2  mx-auto flex">
                
                <button className="p-4 border-2 border-gray-300 hover:bg-gray-700 w-32 rounded-lg mr-2 text-gray-300 hover:text-yellow-300 text-3xl" onClick={() => dispatch(backPage())}>
                    {"<"}
                </button>
                
                <div className="w-full  mx-auto ">
                    <ul className="">
                        {isLoading ? (
                            <div className="p-2 my-2 bg-gray-200 border rounded-md text-center animate__animated animate__fadeIn">
                                <Loading />
                            </div>
                        ) : (
                            pokemons.results.map((pokemon, index) => (
                                <li key={index} className="p-2 mb-2 bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-700 animate__animated animate__fadeIn">
                                    <Link to={`/card/${encodeURIComponent(pokemon.url)}`} className="text-yellow-300 hover:text-yellow-200 font-semibold">
                                        {pokemon.name}
                                    </Link>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
                <button className="p-4 border-2 border-gray-300 hover:bg-gray-700 w-32 rounded-lg ml-2 text-gray-300 hover:text-yellow-300 text-3xl" onClick={() => dispatch(nextPage())}>
                    {">"}
                </button>
            </div>
        </div>

    );
};
