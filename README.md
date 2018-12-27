<div align="center">
  <h1>create-react-app-perf-test</h1>
  <p>Sample Create React App set up for performance testing with puppeteer</p>
</div>

<hr />


[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## The problem

You want to do performance testing in a reproducible test environment on React components but don't want to set up everything needed to get a test app set up as well as the tooling needed to collect performance metrics.

## This solution

Using [create-react-app](https://github.com/facebook/create-react-app) + [puppeteer](https://github.com/GoogleChrome/puppeteer) + [this custom script](https://github.com/bjankord/create-react-app-perf-test/blob/master/perf-test.js), you can get a reproducible test environment to collect [performance timing metrics](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API), [page metrics from puppeteer](https://github.com/GoogleChrome/puppeteer/blob/v1.11.0/docs/api.md#pagemetrics), as well as [metrics from puppeteer trace file via tracealyzer](https://www.npmjs.com/package/tracealyzer).


## Usage

* Fork the repo
* Add your code to the create-react-app
* Run `npm build:local`.
  * *This runs `react-scripts build` with the `PUCLIC_URL` env var set to `http://localhost:5000`*
* Run `npm run serve`.
  * *This runs the `build` directory at [http://localhost:5000](http://localhost:5000)*
* In a seperate terminal tab, run `npm run perf-test`.
  * *This runs puppeteer on the app being served on [http://localhost:5000](http://localhost:5000) and logs performance timing metrics, page metrics from puppeteer, as well as metrics from puppeter trace file via tracealyzer.*

### Sample Output

<img src="https://github.com/bjankord/create-react-app-perf-test/blob/master/perf-metrics.png?raw=true" alt="sample output" width="50%">


### Performance Chart

![performance-chart](https://github.com/bjankord/create-react-app-perf-test/blob/master/performance-chart.png?raw=true)

* Total time from start to load: `loadEventEnd - fetchStart`
* Time spent constructing the DOM tree: `domComplete - domInteractive`
* Time spent during the request: `responseEnd - requestStart`
* Request to completion of the DOM loading: `domInteractive - responseEnd`
* Render Time: `domComplete - domLoading`

Source: https://gist.github.com/daliborgogic/5951a7380ff8b57464fcd24f6f42eb36#gistcomment-2237115

## Inspiration

I referenced [@markerikson][markerikson]'s [benchmark-react-redux-perf repo][benchmark-react-redux-perf] a lot.

## LICENSE

[MIT](https://github.com/bjankord/create-react-app-perf-test/blob/master/LICENSE)

[markerikson]: https://github.com/markerikson
[benchmark-react-redux-perf]: https://github.com/markerikson/benchmark-react-redux-perf
[github-watch-badge]: https://img.shields.io/github/watchers/bjankord/create-react-app-perf-test.svg?style=social
[github-watch]: https://github.com/bjankord/create-react-app-perf-test/watchers
[github-star-badge]: https://img.shields.io/github/stars/bjankord/create-react-app-perf-test.svg?style=social
[github-star]: https://github.com/bjankord/create-react-app-perf-test/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20create-react-app-perf-test%20by%20%40bjankord%20https%3A%2F%2Fgithub.com%2Fbjankord%2Fcreate-react-app-perf-test%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/bjankord/create-react-app-perf-test.svg?style=social

## Below this is the general Create React App README

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
