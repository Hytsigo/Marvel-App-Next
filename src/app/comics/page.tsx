"use client";

import React from "react";
import useMarvelData from "../hooks/useMarvelData";
import Loading from "../loading";
import useSearch from "../hooks/useSearch";
import SearchHero from "../components/search/SearchHero";

const ComicsPage: React.FC = () => {
    const { data, loading, error } = useMarvelData("comics");
    const { searchResults, handleSearch } = useSearch(data || []);
    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <SearchHero onSearch={handleSearch} />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-8">
                {(searchResults || data || []).map((comic: any) => (
                    <div
                        key={comic.id}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-950 dark:border-gray-700 hover:scale-105 ease-in duration-300"
                    >
                        {comic.thumbnail && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                alt={comic.title}
                                className="rounded-t-lg"
                            />
                        )}
                        <h2 className="px-2 m-2">{comic.title}</h2>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 px-2">
                            {comic.description}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 px-2">
                            Fecha de Publicación:{" "}
                            {new Date(comic.dates[0].date).toLocaleDateString()}{" "}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComicsPage;
