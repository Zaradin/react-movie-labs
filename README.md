# Assignment 1 - ReactJS app.

Name: Josh Crotty

## Overview.

The repo contains a react movie web application for the purpose of assignment 1 of Web Application Development 2. The features implemented are discussed below.

### Features.

A bullet-point list of the **new features** you added to the Movies Fan app (and any modifications to existing features)

-   Movie Cast list added into the movieDetails component (these are clickable, goes to each actors details page)
-   Moive List in which an actor is featured in (actorDetailsPage)
-   Sorting functionality in the Trending People page (Most to Least, Least to Most, Name A-Z, Name Z-A)
-   Pagination to the Now Playing page

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

List the **additional** TMDB endpoints used, giving the description and pathname for each one.

-   Movie Credits (Cast) - https://api.themoviedb.org/3/movie/{movie_id}/credits
-   Person Details (Bio, Image, Age) - https://api.themoviedb.org/3/person/{person_id}
-   Actor Movie Credits (Featured in) - https://api.themoviedb.org/3/person/{person_id}/movie_credits
-   Trending People (Actors, Directors, etc) - https://api.themoviedb.org/3/trending/person/{time_window}
-   Now showing in theatres - https://api.themoviedb.org/3/movie/now_playing&language=en-US&page=${page}

## Routing.

List the **new routes** supported by your app and state the associated page.

-   /actor/:id - Actor Details, (Bio, Age, List of Featured movies)
-   /trending/people - List of trending people on TMDB
-   /movies/nowshowing - List of movies that are now showing in theatres

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project,
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).
