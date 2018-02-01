# Twitter authentication and tweet retrieval application

Web App that authenticates with Twitter and displays the user's tweets


## Quickstart
* git clone the repo
  ```
  git@github.com:jnv22/159ba8a85a796510d44206810c564b31.git
  ```
* Fill out the server information
  **Note**: `PORT` and `CLIENT_PORT` will **USUALLY** be the same since the server will be serving the application. These two can be different if using the server and webpack dev server, respectively.
  ```
  cp .env.example .env
   ```
* In the package.json, modify `start:webpackdev` and `start` script `API_BASE_URL` argument to point to the server
* Install dependencies
  ```
  npm install
  ```
* Build the application, copy files to the server, and run the application
  ```
  npm run start
  ```

### Before continuing, ensure that you ran through the QuickStart steps above, and the application is cloned, dependencies are installed, and .env is filled out
## Development Mode
**Note**: in .env file, `PORT` and `CLIENT_PORT` will be different since the server and webpack dev server will be running seperately. `CLIENT_PORT` should be set to 8080. This is the default port set in webpack, can be modified in the webpack config.
* Open two terminal windows.  
  **Start the webpack dev server**
  ```
  npm run start:webpackdev
  ```
  **Start the express server**
  ```
  npm run start:server
  ```


## Testing Mode
* Start the tests for the Express server and UI
  ```
  npm run test
  ```
