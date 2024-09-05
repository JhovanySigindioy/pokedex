import React from "react";
import { Route, Routes } from "react-router";
import { ListPokemonPage, DetailPokemonPage, TeamPokemonPage } from "../pages";
import { Navbar } from "../components/Navbar";


export const MainRouter: React.FC = () => {
    return (
        <main>
            <Navbar />
            <Routes>
                <Route path="/" element={<ListPokemonPage />} />
                <Route path="/card/:urlPokemon" element={<DetailPokemonPage />} />
                <Route path="/team" element={<TeamPokemonPage />} />
            </Routes>
        </main>
    );
};
