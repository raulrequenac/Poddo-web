
<p align="center"><img width="200" src="https://github.com/raulrequenac/Poddo-web/blob/master/src/assets/images/logo.svg"></p>
<h1 align="center">Pōddō</h1>

## Introduction
Poddo is a platform for listening podcasts, in which the user will be able to subscribe to channels to follow their posts easily.
Also, users can comment the podcasts and "star" them unlimitedly, as so with the comments.

## Technologies

### API
The API was developed with Java on Spring Boot, with a microservice architecture. There are 4 services, 1 edge service and the server:

- **User service:** It manages the user CRUD and the subscriptions to the Channels. There are two types of User: normal user and admins. Admins extra capacities are: create other admins, lock accounts and block podcasts. Data is stored in a **SQL Database** using **H2**.

- **Podcast service:** It manages the podcasts CRUD and storage. Podcasts are labelled with tags. Also, Playlists are implemented asiged to a Channel. Data is stored in a **Mongo Database**.

- **Comment service:** It manages the comments CRUD and stars. Data is stored in a **SQL Database** using **H2**.

- **Channel service:** It manages the channels CRUD, subscriptions and the relations with the podcasts and the playlists. Data is stored in a **SQL Database** using **H2**.

- **Edge service:** It has the end-points which the user can interact with and the implementation of the security and **Cloudinary**, which is a cloud database in which the images and the podcasts' audios were stored. Later, the images and the audios were stored in their respectives databases by only indicating the url to the file in the cloud.

You can find the API repository [here](https://github.com/raulrequenac/Poddo-api).

### FRONT
The Front was developed with Angular with a full **CSS-handmade design**. It presents an intuitive design in which the users don't need to be logged in in order to interact with the app. Cookies were used to store the user data to login and manage the security within the app.

Every view has a navbar, in which the user can navigate to the principal views, and a header, in which the user can search for podcasts bi title.

## Usage
The app must be running in local:

- For the API, you have to clone the repository from: https://github.com/raulrequenac/Poddo-api. Every service/server will run by inserting the command **mvn spring-boot:run**

- For the front, you have to clone the repository and insert the commands **npm i** and **ng serve**.

### Credentials
The credentials to log into the application are:

| Username | Password |
| -------- | -------- |
| admin    | admin    | 
| user     | user     |

## Conclusion
Even though the app is a great idea, when developing it got bigger and bigger and I was not able to finish it (yet). I did my best in this week and I could have done a simple app to just show that i learned everything from the course and just settling with it, but I decided to go even further and challenge myself by implementing a complex logic and a handmade design, in which i could show my skills and my creativity. Still have so much to do, like finishing what i could not finish and implementing new ideas I got this week.

Thank all the staff for this opportunity and their great job. I've learned a lot and I'm proud of how I worked during the course. See you soon!

Raúl Requena.
