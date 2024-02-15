"use client";

import React, { useState } from "react";
import useMarvelData from "../hooks/useMarvelData";
import Loading from "../loading";
import SearchHero from "../components/search/SearchHero";
import useSearch from "../hooks/useSearch";

const SeriesPage: React.FC = () => {
    const { data, loading, error, truncate } = useMarvelData("series");

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

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-8 ">
                {(searchResults || data || []).map((serie: any) => (
                    <div
                        key={serie.id}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-950 dark:border-gray-700 hover:scale-105 ease-in duration-300"
                    >
                        {serie.thumbnail && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                                alt={serie.title}
                                className="rounded-t-lg"
                            />
                        )}
                        <h2 className="px-2 m-2 ">{serie.title}</h2>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 px-2">
                            {truncate(serie.description)}{" "}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 px-2">
                            Año de inicio: {serie.startYear}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 px-2">
                            Año de fin: {serie.endYear}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeriesPage;
