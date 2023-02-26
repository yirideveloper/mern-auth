# :rocket: MERN authentication with email verification, hooks and docker (prod/dev).

![capture du 2018-12-16 13-57-42](https://user-images.githubusercontent.com/40322270/50053751-aa653080-013a-11e9-9a8d-35a55c9042f1.png)

:video_game: Demo: <https://mern-auth-client.herokuapp.com/login>

:warning: CSS styles, Google Captcha, Sentry usage and some other not essential dependencies like notifications are only in the demo. This repository aim to have a fast to use boilerplate.

## :star: The project if it helped you!

# :whale: Docker

Boilerplate now is fully usable with docker, it integrate the MongoDB database, the React/Redux frontend and NodeJS/Express backend.

If you do not have docker: <https://docs.docker.com/get-docker/>

Docker allows to deloy the app in docker containers in one line in the CLI.

## Environment variables

You have to set the following environment variables in `server.env` file (rename server.example.env to server.env):

- SENDGRID_API_KEY, the backend uses Send Grid to send emails, you can register and get a free key on their website: <https://sendgrid.com/>. :warning: You cannot use the app without a key. Validation links are sent in http not https, you can modified that in server/routes/auth.js if you want to go https in deployment.

- SESSION_KEY, it is the secret key that is used to compute the hash of sessions. It is important to use a strong key: <https://cloud.google.com/network-connectivity/docs/vpn/how-to/generating-pre-shared-key>.

- SENDING_EMAIL, the email address you want to use to send confirmation email to the user.

## Development

in the root directory:

`docker-compose up --build`

It supports hot reloading for both the frontend and backend.

## Production

in the root directory:

`docker-compose -f docker-compose.prod.yml up --build`

Frontend app uses an Nginx server to deliver static files.

You may want to use the flag `--remove-orphans`

To deploy on Heroku refer to their documentation:
<https://devcenter.heroku.com/categories/deploying-with-docker>

## :computer: Boilerplate

MERN Stack with advanced authentication :

- Email verification (Token Based) with resend/reset option, Login with forgot password feature.

- Server side sessions.

- Docker for development and production with hot reloading.

- Mongodb.

- Express.

- React/Redux based on Create React App.

- React Hooks.

- Nodejs.

- Passport-js local.

- Sendgrid API for emails.

## :lock: Security

This repository is scanned with snyk and code scanning from github for vulnerabilities. Do not use this code blindly, audit it first.

## :construction: To Do List

- Google/Facebook Oauth.
- Test coverage.
- Rate limitation on endpoints.
- CSRF protection.
- Internationalization.
- Explore removing redux for react query.

## :information_source: How to ?

- Use emails for authentication instead of usernames: <https://github.com/flaviuse/mern-authentication/issues/7>

- I added a dependency but my docker container does not found it: <https://medium.com/@semur.nabiev/how-to-make-docker-compose-volumes-ignore-the-node-modules-directory-99f9ec224561> (either install the dependency in the container with the cli or reset the volume).

## :scroll: Changelog

## 20/09/2020

- Rewrite frontend with Hooks and functionnal components.
- Remove unwanted inheritance from classes.
- Make css minimalist for better boilerplate.

### 16/09/2020

- Added input sanitization in server side with mongo-sanitize.

### 07/09/2020

- Updated all dependencies for server and client.
- Added docker for development with hot reloading and production with nginx for the frontend. MongoDB in docker as well.
- Fixed missing error catching,
- Change naming of folder structure of components on client.
- Reworked get user logic for immutability.
- Removed unused dependencies.

### 28/04/2019

- Huge simplification of the project for better usability as a boilerplate (CSS styles, Google Captcha, Sentry usage...).
