import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieRecommendations } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const MovieRecommendationsPage = () => {
    const { movieId } = useParams();
    const { data, error, isLoading, isError } = useQuery(
        ["recommendations", movieId],
        () => getMovieRecommendations(movieId)
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const recommendations = data.results;

    return (
        <PageTemplate
            title="Recommended Movies"
            movies={recommendations}
            action={(movie) => {
                return <AddToFavoritesIcon movie={movie} />;
            }}
        />
    );
};

export default MovieRecommendationsPage;
