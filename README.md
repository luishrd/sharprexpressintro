# Express Micro Workshop

-   Intro to Node/Express
-   Intro to Express Routing
-   Intro to Express Middleware

## Routing

-   how to write a route/request handler.
-   using sub routes.
-   how to read data sent by clients.
    -   from the request body.
    -   from the query string.
    -   from URL parameters.
    -   from the headers.

## Middleware

Types

-   normal.
-   error handling.

How to get it?

-   built in.
-   third party.
    -   [morgan](https://www.npmjs.com/package/morgan)
    -   [helmet](https://www.npmjs.com/package/helmet)
    -   [cors](https://www.npmjs.com/package/cors)
-   custom.

What can we do with it?

-   read information from request and response.
-   modify request and response.
-   produce a response (success or error);

How do we use it?

-   globally.
-   locally.
    -   per endpoint.
    -   scoped to a router.
