This weather app has features 
1.component CurrentWeather.js
It will display weather of default city "new delhi"
it,s a reusable component 
2. component CitySearsh.js
It will let user search city when they click on city you will be able to see weather for that city in app
i. Added debounce functionality to reduce    load on server.
ii. it shows list of cities those are found in in search in mobile you have to click on drop-down to see the list.
3. Toggle button 
i. It will convert temperature from celsius to Fahrenheit or vice versa 
ii. Function written to from scratch to convert temperatures.
4. component Forecast card.js
It will show forecast for next 5 days including today.
i. Here written function to get weekday from date to show in forecast list from scratch.
5. Added pull to refresh functionality for present city using local storage functionality.
6. Used useCallback function to make app more efficient and fast 
7. Added responsiveness to make it work in mobile, tablet and desktop.
Did it using mobile first approach.
8. Used axios library to make api calls

setup instructions 
unzip the zip I sent you 
go inside weather folder 
npm start to run in desktop 
if doesn't work 
do npm install 
the npm start it will work

Details on how to application use
1. open the link mentioned below
https://66f0d495856abd635863c956--voluble-torte-346189.netlify.app/

2. for search just click in search box 
start typing it will search by it self. No need to enter to search.

3. once entered your city just click on drop-down you will see list of cities in mobile select any and you will see data of it in your screen

Thanks!!

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
