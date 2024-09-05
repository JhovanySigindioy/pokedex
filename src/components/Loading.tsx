import React from "react";

export const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center overflow-hidden animate__animated animate__fadeIn">
            <div className="w-full max-w-md bg-transparent p-6 shadow-lg">
                <div className="w-4 h-4 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-blue-red text-xl font-semibold">Cargando...</span>
            </div>
        </div>
    );
};
