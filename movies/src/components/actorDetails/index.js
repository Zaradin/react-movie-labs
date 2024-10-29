import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const ActorDetails = ({ actor }) => {
    return (
        <Card sx={{ maxWidth: 600, margin: "auto", mt: 3 }}>
            <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
            />
            <CardContent>
                <Typography variant="h4">{actor.name}</Typography>
                <Typography variant="body1">Born: {actor.birthday}</Typography>
                <Typography variant="body1">
                    Place of Birth: {actor.place_of_birth}
                </Typography>
                <Typography variant="body1">{actor.biography}</Typography>
            </CardContent>
        </Card>
    );
};

export default ActorDetails;
