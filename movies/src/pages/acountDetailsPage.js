import React, { useEffect, useState, useContext } from "react";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { auth } from "../firebase/firebase";
import { MoviesContext } from "../contexts/moviesContext";
import { getMovie } from "../api/tmdb-api";

const AccountDetailsPage = () => {
    const [user, setUser] = useState(null);
    const { favorites } = useContext(MoviesContext);
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        // Firebase listener to get the current user
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (favorites.length > 0) {
            Promise.all(
                favorites.map((movieId) =>
                    getMovie({ queryKey: [null, { id: movieId }] })
                )
            )
                .then((movies) => setMovieDetails(movies))
                .catch((error) =>
                    console.error("Error fetching movie details: ", error)
                );
        }
    }, [favorites]);

    const userNameInitial = user?.displayName?.[0];

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <Paper
                        elevation={3}
                        sx={{ padding: 3, textAlign: "center" }}
                    >
                        <Box display="flex" justifyContent="center" mb={2}>
                            {
                                <Avatar
                                    sx={{
                                        bgcolor: "primary.main",
                                        width: 100,
                                        height: 100,
                                    }}
                                >
                                    {userNameInitial}
                                </Avatar>
                            }
                        </Box>
                        <Typography variant="h6">
                            {user?.displayName || "No Username"}
                        </Typography>
                        <Typography variant="body1">
                            {user?.email || "No Email"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Signed up on: {user?.metadata.creationTime || "N/A"}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <Paper elevation={3} sx={{ padding: 3 }}>
                        <Typography variant="h5" gutterBottom>
                            Your Favorite Movies
                        </Typography>
                        <Box>
                            {favorites.length === 0 ? (
                                <Typography>No favorites yet!</Typography>
                            ) : (
                                <Grid container spacing={2}>
                                    {movieDetails.map((movie) => (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            key={movie.id}
                                        >
                                            <Card>
                                                <CardMedia
                                                    component="img"
                                                    height="300"
                                                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                    alt={movie.title}
                                                    sx={{
                                                        height: 300,
                                                    }}
                                                />
                                                <CardContent>
                                                    <Typography
                                                        variant="h7"
                                                        component="div"
                                                    >
                                                        {movie.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                    >
                                                        {movie.release_date
                                                            ? movie.release_date.slice(
                                                                  0,
                                                                  4
                                                              )
                                                            : "N/A"}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            )}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AccountDetailsPage;
