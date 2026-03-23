# FEDev-Project-Starter

This project is a basic SvelteKit project, with some basic email+password authentication:
- it used the `better-auth` official Svelte integration
- it has the following routes:
  - `/login`
    - for an existing user to login
  - `/logout`
    - for a logged-in user to logout
  - `/register`
    - for a new user to register

## Resetting the database

Don't waste time manually adding / removing users for testing purposes - always add features to make resetting and seeding a database a single comment/route


There is a route to reset the database:
  - when the website is running visit route `/resetdatabase`
    - this runs function `resetDatabase()` which is declared in `/lib/server/seed.js`

    
When the database is reset, it will reset to the users defined in  `/lib/data/users.json`
- if you are going to define any more users in here, please make life simple and ensure **ALL users have password = `password`**

Each user has basic user properties, plus the following:
- `balance`, an integer balance, for whatever currency/credits is appropriate for your project case study
- `category`, a string, such as member category 'gold', or user type 'admin' etc.
- `role`, a string, such as 'ROLE_MEMBER', 'ROLE_STAFF', 'ROLE_ADMIN'
  - you could use this to offer a different experience for different types of user
  - e.g. ROLE_ADMIN could see a list of all users, ROLE_STAFF could see a list contact numbers to phone if help is needed etc.

Learn how to make use of the properites of the currently logged-in user:
- [README_USING_USER_DATA.md](README_USING_USER_DATA.md)

## Setting up this project

When you've cloned/downloaded this project from GitHub you need to run the following 3 command line actions before starting the web server:
  ```bash
  npm install
  npm run auth:schema
  npm run db:push
  ```

Then run the dev web server with

  ```bash
  npm run dev
  ```

Then **reset the database** by visiting the `/resetdatabase` route.

More detailed description about project setup setps can be found in: [README_SETUP_DETAILS.md](README_SETUP_DETAILS.md)


## Adding additional fields to the 'user' database table

If you wish to add additional fields to the 'user' table, you can learn how to do so here:
- [README_NEW_DB_FIELD.md](README_NEW_DB_FIELD.md)


## Disabling client-side navigation (no caching)

To allow `/routes/+layout.svelte` to be able to display the currently logged in user on every page, it was necessary to disable caching.

Everything should all just work for you, but you can learn a litle more about this here:
- [README_CACHE_DISABLED.md](README_CACHE_DISABLED.md)

