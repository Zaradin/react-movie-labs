import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import actorImgPlaceholder from "../../images/actor-image-place-holder.png";

const ActorCard = ({ actor }) => {
    return (
        <Card>
            <CardHeader
                title={actor.name}
                sx={{
                    textWrap: "nowrap",
                }}
            />

            <CardMedia
                sx={{ height: 500 }}
                component="img"
                image={
                    actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                        : actorImgPlaceholder
                }
                alt={actor.name}
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
