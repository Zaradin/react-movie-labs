# Assignment 1 - ReactJS app.

Name: Josh Crotty

## Overview.

The repo contains a react movie web application for the purpose of assignment 1 of Web Application Development 2. The features implemented are discussed below.

### Features.

A bullet-point list of the **new features** you added to the Movies Fan app (and any modifications to existing features)

- Movie Cast list added into the movieDetails component (these are clickable, goes to each actors details page)
- Moive List in which an actor is featured in (actorDetailsPage)
- Sorting functionality in the Trending People page (Most to Least, Least to Most, Name A-Z, Name Z-A)
- Pagination to the Now Playing page
- Button to view similar movie recommendations in the movie details page
- Search box that allows you to search moives by title and updates the list in realtime
- User Authentication through firebase, allows you to create an account
- User account page so users can see their favorite movies list and also accout information

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

List the **additional** TMDB endpoints used, giving the description and pathname for each one.

- Movie Credits (Cast) - https://api.themoviedb.org/3/movie/{movie_id}/credits
- Person Details (Bio, Image, Age) - https://api.themoviedb.org/3/person/{person_id}
- Actor Movie Credits (Featured in) - https://api.themoviedb.org/3/person/{person_id}/movie_credits
- Trending People (Actors, Directors, etc) - https://api.themoviedb.org/3/trending/person/{time_window}
- Now showing in theatres - https://api.themoviedb.org/3/movie/now_playing&language=en-US&page=${page}
- Movie recommendations from movieid - https://api.themoviedb.org/3/movie/${movieId}/recommendations?&language=en-US
- Search movies by title - https://api.themoviedb.org/3/search/movie

## Routing.

List the **new routes** supported by your app and state the associated page.

- /actor/:id - Actor Details, (Bio, Age, List of Featured movies)
- /trending/people - List of trending people on TMDB
- /movies/nowshowing - List of movies that are now showing in theatres
- /movie/:id/recommendations - List of movies that are similar to the movie in the url (:id)
- /search - Search bar where users can type a movie title and the results will be displayed on the page
- /signup - Allows a user to create an account with a username, email, and password that gets stored in firebase
- /login - Allows a user to log into an account with there email and password

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

_protected routes were done by creating a component that accepts children as a prop, the component checks if a user is currently logged in, if so, the component returns the children, else it redirects to /login. Using this component as a wrapper around routes creates it as a protected route)_

- /account - this is a protected route, only accessible if a user is logged in

## Independent learning (If relevant).

- Protected Routes - https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c
- Getting started with firebase auth - https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/
- Issue with the search box defocusing on key press - https://levelup.gitconnected.com/react-text-input-losing-focus-after-each-keypress-dd6eabfe2f7c
