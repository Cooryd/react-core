## React Core
An extensive starter kit for development of a React application with both Redux and React Routing included.

**Includes**
* Full ES6 & JSX Transpiling using babel via webpack.
* Development server with Hot Module Reloading for instant updates without reloading the page.
* Mocha and Jest unit testing
* SASS compilation (can be swapped out for LESS)
* Linting of code when compiling.

**Setup and scripts**
<p>Ensure you have at least node v6, this can be checked by running `node -v`</p>

* `npm install`  *This needs to be done before anything else.*

* `npm start` *This starts the dev-server at localhost:3000, the application with compile, have all tests ran and be linted with a report displayed in the cli*

* `npm run build` *This runs a production build task over the project, along with running all tests and linting. Output is placed in a /dist directory.*

* `npm run lint` *Only run linting task across project*

* `npm run test` *Only run unit tests*
