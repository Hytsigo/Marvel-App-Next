"use client";

import { useState } from "react";

type SearchResult = {
    id: number;
    title: string;
    name: string;
};

type HandleSearch = (query: string) => void;

type UseSearchReturn = {
    searchResults: SearchResult[] | null;
    handleSearch: HandleSearch;
};

const useSearch = (data: SearchResult[]) => {
    const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
        null
    );

    const handleSearch: HandleSearch = (query) => {
        if (!query.trim()) {
            setSearchResults(null);
            return;
        }

        const results = data.filter(
            (item) =>
                (item.title &&
                    item.title.toLowerCase().includes(query.toLowerCase())) ||
                (item.name &&
                    item.name.toLowerCase().includes(query.toLowerCase()))
        );

        setSearchResults(results);
    };

    return { searchResults, handleSearch };
};

export default useSearch;
