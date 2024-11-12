import React, { useState } from "react";
import { useQuery } from "react-query";
import { getMovieByTitle } from "../api/tmdb-api";
import SearchMoviePage from "../components/searchMoviesPage";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Spinner from "../components/spinner";

function SearchPage() {
    const [query, setQuery] = useState("");

    const {
        data: movies,
        isLoading,
        isError,
        error,
    } = useQuery(["searchMovies", query], () => getMovieByTitle(query), {
        enabled: query.length > 0,
        retry: false
    });

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
    };

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <SearchMoviePage
            query={query}
            movies={movies || []}
            action={(movie) => <AddToFavoritesIcon movie={movie} />}
            title="Search Movies"
            loading={isLoading}
            handleSearchChange={handleSearchChange}
        />
    );
}

export default SearchPage;
