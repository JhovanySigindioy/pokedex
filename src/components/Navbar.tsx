import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <header className="bg-gray-700 sticky top-0">
            <nav className="container flex items-center p-4">
                <a href="https://pokeapi.co/" target="_blank"><img src="/src/assets/logo.png" alt="Logo poke api" className="w-28 mr-4 hover:scale-125 transition duration-100" /></a>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-indigo-300 hover:text-gray-200 font-bold">Lista Pokemon</Link>
                    </li>
                    <li>
                        <Link to="/team" className="text-indigo-300 hover:text-gray-200 font-bold">Equipo Pokemon</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
