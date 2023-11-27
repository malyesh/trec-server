# TRec

### _Create and see the best travel reccomendations!_

## Overview

An application where users post reccomendations for specific tourist attractions and famous landmarks, giving their opinion about if its overrated or underrated, how much time a person needs there etc. so that when other people are looking to go on a trip they can get all their reccomendations in one spot, and even create their own on vacation!

## Problem

Researching for travel can get very confusing and its mostly just long-winded blogs or paid-for tour groups advertising. With this app, public opinion for each of the places a person would want to travel to is in one place and can even show them somewhere they didn't think to go before!

## My Solution and Features

I created an application where users can post travel landmark photos in a social media style while giving real tips, recommendations, and ratings to those locations. Other users are able to browse these posts, favorite the ones that may be helpful for an upcoming trip, and can use these recommendations to guide their itinerary creation! Users can view a feed of all posts to gain ideas, or choose to look at the post feed of one specific landmark. They can also view their own posts on their profile page. A user does not need to be logged in to browse the posts, but must be logged in in order to create posts and to favorite posts.

This process consolidates the research that a traveler would need to do when creating an itinerary and deciding where they should go, how much time to spend there, and what is worth the wait.

I hope you find this helpful too!

## Tech Stack and Libraries

- HTML/SCSS
- React
- Node + Express
- Axios
- MySQL + Knex
- react-select library
- jsonwebtoken and bcrypt libraries
- busboy library

## How to Install

Install the dependencies

```sh
npm i
```

Create .env file to copy and populate the variables from the .env.sample file to create and connect to your database

```sh
CORS_ORIGIN=
PORT=
DB_HOST=
DB_NAME=
DB_USER=
DB_PASSWORD=

SECRET_KEY=
```

Migrate tables into database

```sh
npx knex migrate:latest
```

Seed data into the tables

```sh
npx knex seed:run
```

Start the server

```sh
npm start
```

## How to Use
home page
![Screenshot 2023-11-26 222449](https://github.com/malyesh/trec-server/assets/74512928/6f054454-1fa2-41d6-8013-b72a67162358)
see popular posts feed
![Screenshot 2023-11-26 222506](https://github.com/malyesh/trec-server/assets/74512928/9d3b61e7-c5fe-4802-8c1b-98535d98f3a6)
search for landmarks in a country and city from the drop down menus
![Screenshot 2023-11-26 222522](https://github.com/malyesh/trec-server/assets/74512928/757bf01a-4fe9-4f3d-a063-d7f4a688e676)
pick a landmark to view it's post feed
![Screenshot 2023-11-26 222551](https://github.com/malyesh/trec-server/assets/74512928/1e8fb66c-4f35-4fa3-bb7d-7283eb6acffa)
sign up 
![Screenshot 2023-11-26 222604](https://github.com/malyesh/trec-server/assets/74512928/ef887ad3-0a1a-4452-902d-679f40f3aafd)
log in
![Screenshot 2023-11-26 222615](https://github.com/malyesh/trec-server/assets/74512928/b8eb2f66-1cef-4c5d-af04-910825983880)
create a post
![Screenshot 2023-11-26 222716](https://github.com/malyesh/trec-server/assets/74512928/682e3312-0e8c-49f2-a542-dd7a5cb27fb8)
favorite posts to view in favorited section
![Screenshot 2023-11-26 222703](https://github.com/malyesh/trec-server/assets/74512928/73154fb4-cadc-44dc-97fa-59f5dbd18ebf)
view preview of your posts on your profile page
![Screenshot 2023-11-26 222637](https://github.com/malyesh/trec-server/assets/74512928/3b2909f0-2498-4eae-ad33-61b7e084a22a)
view full details of each of your posts from profile page
![Screenshot 2023-11-26 222650](https://github.com/malyesh/trec-server/assets/74512928/80e19fce-4967-44a1-b85e-7378448d05df)
