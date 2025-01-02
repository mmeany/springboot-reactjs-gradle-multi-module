During development this module may be worked on independently, typical work scenario for me:

* Run the `hello-api` as a Spring Boot service with Spring profile `ignore-cors` active. This will expose the API on
  port `8080` and disable CORS checks.
* Open a CMD terminal in the `hello-api-ui` directory and launching a development server `npm run dev`.
* Access the UI by following the link presented by the running the development server, something like
  `http://localhost:5173/`

From this point on, changes in the UI code are instantly reflected in the browser.

Changes in the backend API may require a restart of the Spring Boot service.
