"use client";

import React, { useState } from "react";

interface Props {
    onSearch: (query: string) => void;
}

const SearchHero: React.FC<Props> = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setQuery(value);
        onSearch(value);
    };

    return (
        <div className="flex justify-center">
            <form className="w-4/6 mt-6">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-stone-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-700 dark:focus:border-stone-600"
                        placeholder="Busca tus favoritos"
                        value={query}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-stone-700 dark:hover:bg-stone-400 dark:focus:ring-stone-500"
                    >
                        Buscar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchHero;
