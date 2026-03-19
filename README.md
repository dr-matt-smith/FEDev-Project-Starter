# FEDev-Project-Starter

This project is a basic SvelteKit project, with some basic email+password authentication:
- it used the `better-auth` official Svelte integration
- it has the following routes:
  - `/login`
    - for an existing user to login
  - `/register`
    - for a new user to register
  - `/logout`
    - for a logged-in user to logout
  - `seed.js`
    - there is a JavaScript script `seed.js` that will reset the database to just 2 users:
      - matt@itb.ie, password = `password`
      - joe@apple.com, password = `password`
      - **for this project ALL users should have password = `password`**

Each user has properties:
- `balance`, an integer balance, for whatever currency/credits is appropriate for your project case study
- `category`, a string, such as member category 'gold', or user type 'admin' etc.



## Disabling client-side navigation (no caching)

By default, SvelteKit acts as a Single Page Application (SPA): after the first page load, it handles navigation client-side using its own router, which can cache `load()` data and intercept redirects before they reach the server.

This project disables that behaviour globally via `src/routes/+layout.js`:

```js
export const csr = false;
```

Setting `csr = false` ("client-side rendering") turns off the SvelteKit client-side router for every page. The result is that the app behaves like a traditional server-rendered website:

- Every link click and form submission is a full HTTP request to the server
- Every `load()` function always runs fresh on the server — no stale cached data
- Redirects (e.g. `redirect(302, '/login')`) are real HTTP redirects followed by the browser natively
- No JavaScript is shipped to the browser at all

### Reverting to SvelteKit defaults

To restore normal SvelteKit SPA behaviour, simply delete the file `src/routes/+layout.js`. The default value of `csr` is `true`, so removing the file is all that is needed.

If you only want to disable caching on specific pages rather than globally, you can instead export `csr = false` from an individual `+page.js` file for just that route.

