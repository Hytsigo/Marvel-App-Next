"use client";

import React from "react";
import useMarvelData from "../hooks/useMarvelData";
import Loading from "../loading";
import useSearch from "../hooks/useSearch";
import SearchHero from "../components/search/SearchHero";
import "react-responsive-modal/styles.css";
import "./Modal.styles.css";
import useModal from "../hooks/useModal";
import CharacterModal from "../components/modal/CharacterModal";

const CharactersPage: React.FC = () => {
    const { data, loading, error, truncate } = useMarvelData("characters");
    const { searchResults, handleSearch } = useSearch(data || []);
    const { onCloseModal, onOpenModal, open, selectedCharacter } = useModal([]);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <SearchHero onSearch={handleSearch} />

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-8 ">
                {(searchResults || data || []).map((character: any) => (
                    <div
                        key={character.id}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-950 dark:border-gray-700 hover:scale-105 ease-in duration-300 flex flex-col justify-between"
                    >
                        {character.thumbnail && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                alt={character.name}
                                className="rounded-t-lg"
                            />
                        )}
                        <h2 className="px-2 m-2 ">{character.name}</h2>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 px-2">
                            {truncate(character.description)}
                        </p>
                        <div>
                            <button
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-stone-700 dark:hover:bg-stone-400 dark:focus:ring-stone-500 mb-2 m-2"
                                onClick={() => onOpenModal(character)}
                            >
                                Leer mas
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <CharacterModal
                open={open}
                onClose={onCloseModal}
                character={selectedCharacter}
            />
        </div>
    );
};

export default CharactersPage;
