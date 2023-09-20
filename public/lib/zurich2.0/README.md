# Zurich Web SDK

## Installation

`npm i @zurich/web-sdk --save`

## Bootstrap

The library relies on Bootstrap 4's grid system. If you are not using Bootstrap in your project already, please make sure to add it as an extra import.

## Example usage


### Generic HTML import


Import CSS inside `<head>` section:


`<link rel="stylesheet" href="/node_modules/@zurich/web-sdk/css/styles.min.css" />`


Import JS at the bottom of the `<body>` section:


`<script src="/node_modules/@zurich/web-sdk/js/scripts.min.js"></script>`


### JavaScript frameworks

While using this Zurich Web SDK component in frameworks like ReactJS, Vue, and Angular which assume full control of the DOM we recommend not to import `@zurich/web-sdk/js/scripts.min.js`. Both Zurich Web SDK and the framework may attempt to mutate the same DOM element, resulting in bugs.

Use provided CSS `@zurich/web-sdk/css/styles.min.css` and HTML examples to create your own implementation of given component in a specific framework.

Please refer to component `docs` files for HTML code snippets and CSS classes applied.

### Angular 11+


Inside your `angular.json` file, add the following to your projects **styles** and **scripts** arrays:


To `projects -> <your-app> -> architect -> build -> options -> styles`:


Add `node_modules/@zurich/web-sdk/css/styles.min.css`


Rebuild your app to include the new imports


### React


Import CSS at the beginning of your app, e.g. at the top of `src/index.js`:


`import '@zurich/web-sdk/css/styles.min.css';`


Alternatively, if using **sass**, import into your root sass file:


`@import '~@zurich/web-sdk/css/styles.min.css';`


### Vue.JS


Import CSS at the top of your main JS file, e.g. `src/main.js`:

CSS:


`import '@zurich/web-sdk/js/scripts.min.js;`


#### Zcroller API

[Zcroller guide](https://zxa.web.dev.mrmworldwide.de/#/zcroller)

Animations based on [animate.css](https://animate.style)

*NOTE: You will need to include animate.css as a dependency. It is not included in the SDK.*

| Property | Type | Description | Values |
| ----------- | ----------- | ----------- | ----------- |
| data-zcroller | String | Animation action to apply to given element | See [animate.css](https://animate.style) options |
| data-zcroller-delay | String | Add delay to animation | "1s", "2s", "3s", "4s", "5s" |
| data-zcroller-speed | String | Control the speed of animation | "slow", "slower", "fast", "faster" |
| data-infinite | Boolean | Makes animation infinite |  |
