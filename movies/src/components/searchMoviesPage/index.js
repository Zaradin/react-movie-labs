import React from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";

function SearchMoviePage({ query, movies, action, title, handleSearchChange }) {
    return (
        <Grid container>
            <Grid size={12}>
                <Header title={title} />
            </Grid>
            <Grid
                container
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearchChange}
                        placeholder="Search for movies..."
                        style={{
                            width: "80%",
                            maxWidth: "900px",
                            padding: "20px",
                            fontSize: "25px",
                            borderRadius: "8px",
                            border: "1px solid",
                        }}
                    />
                </Grid>

                <MovieList action={action} movies={movies} />
            </Grid>
        </Grid>
    );
}

export default SearchMoviePage;
