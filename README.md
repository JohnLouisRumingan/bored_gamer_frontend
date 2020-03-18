Project BoredGamer/GameNight:

#BORED GAMER/GAME NIGHT
Welcome to Bored Gamer, where you can explore a selection of board games, save your favorites or add them to your collection. You can create events, join events, and see who is bringing what game to the party! This app uses the API from Board Game Atlas to render detailed game info.

##Available features:
Users can browse games and events without an account.
Users can create unique accounts.
###Navigation:
Users can navigate around the website using the navigation bar.
Users can use the side drawer navigation bar for smaller devices.
Users can view more details about a specific game.
    - Information displayed shows picture, description, designer, number of players, and other information.
###User Collection:
- Users can add and remove games from their favorites list.
- Users can add and remove games from their collection.
- Users can view their collection of favorite and owned games on their profile page.
###Events:
- Users can join and leave events as well as add their games to an event.
- Users can see the number of participants at an event.
- Users can decide to allow other users to bring games to an event.


#Installation
Fork and clone this repo and the [backend repo](https://github.com/jmr-1/bored_gamer_backend)
This app uses [PostgreSQL](https://www.postgresql.org/). Install 
Go to the directory of the bored-gamer backend repository:
    - Run ``` rails db:create ```
    - Run ```rails db:migrate```
    - Run ```rails server```
After the backend server is running, ```cd``` to the bored-gamer frontend repository:
    - Run ```npm install redux reat-redux redux-thunk```
    - Run ```npm start```






Current TODO:
- Ability to add games from participating users to event 
- Ability to remove owned (user-restricted) games from event from participating members?

Future TODO:
- Search features for more games. (Must also change method of info source of detailed game rendering)
- Invite other users to your event
- Display all events on clicked date
- Calendar date changes color based on events 







This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
