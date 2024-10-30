import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ActorCard = ({ actor }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <Card sx={{ maxWidth: 200, margin: 1 }}>
            <CardHeader
                title={actor.name}
                sx={{
                    textAlign: "center",
                }}
            />

            <CardMedia
                component="img"
                height="300"
                image={imageUrl}
                alt={actor.name}
                sx={{ objectFit: "cover" }}
            />

            <CardContent>
                {actor.character ? (
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                    >
                        Played: {actor.character}
                    </Typography>
                ) : (
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                    >
                        Popularity: {actor.popularity.toFixed(1)}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};
export default ActorCard;
