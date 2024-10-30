import React from "react";
import Grid from "@mui/material/Grid2";
import ActorCard from "../actorCard";

function TrendingPeopleListPageTemplate({ people, title }) {
    return (
        <Grid container spacing={2} sx={{ padding: "20px" }}>
            <Grid item container spacing={2}>
                {people.map((person) => (
                    <Grid key={person.id} item xs={12} sm={6} md={4} lg={3}>
                        <ActorCard actor={person} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default TrendingPeopleListPageTemplate;
