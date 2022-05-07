<details>
  <summary>Create React App Help</summary>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>

# Notes/Documentation from frontend development

## What

This application is a resource for users to sign up, search for, and apply to jobs.

## How

The application was developed using React.js for the frontend, Express for the backend, and PSQL for the database.

## Why/Intent

The intent of the project was to build a full stack application specifically using React as the front end. The main objectives were to leverage React Components to build a single page application with user authentication and authorization

## Frontend Higlights:

- Authentication/Authorization allowed for protected routes
  - Home page renders differently depending on if a user is logged in
  - Login and Signup pages are only accessible to those NOT logged in
  - Companies, jobs, profile are only accessible to those loggied in
- Utilized Local Storage to store the logged-in user's JWT token in order to maintain state throughout
- Implemented search bar to filter for companies and jobs by name/title (via call to api)
- User Profile features a form to edit user information
  - displays username but username is not editable
  - calls api to update user info
- Client-Side Authentication
  - App component holds `useEffect` hook that checks for user token in local storage on refresh
  - If user token exists, decode the payload using `jwtDecode` library. This returns the username which is used to call the API and retrieve the entire `user` object. This user object is stored in the `user` state and represents the current user.
  - "Logging Out" does the following:
    - Clears user JWT token from Local Storage
    - Resets the `user` state in `App.js` to `null`
    - Resets the `token` state to an empty string
    - On page reload, the app will not find a user/token in local storage, which tells the app that no one is logged in. Renders the login/signup routes
- Users are able to apply to jobs (represented by clicking a button on the job card). Applying to jobs updates the user's applications db/backend via API request. This triggers the application to rerender and automatically updates the `user` state. The jobs page renders an APPLY or APPLIED button depending on the user's applications in state. The user's applications (viewable on their profile page) accesses this same object/state to render appropriate jobs.
- **Getting the user's applications** - `useEffect` uses array of job ids that lives in `user.applications` to create an array of job objects. Pulls data from API. Leverage `Promises.all` to await results from loop of api calls to consolidate to more efficiently await the axios call.
- **`joblyApi.js` helper** - The application makes many calls to the api in many places. To abstract away these calls, `joblyApi` helper class utilizes static methods to simplify the various api calls that need to be made. `GET`, `POST`, `PATCH` requests can all be made using the same static method
- App is styled using Bootstrap/Bootswatch Quartz theme.

## Backend Highlights:

TBD
