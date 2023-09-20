# Zurich Web SDK

## Installation

`npm i @zurich/web-sdk --save`

## Bootstrap

The library relies on Bootstrap 4's grid system. If you are not using Bootstrap in your project already, please make sure to add it as an extra import.

## Example usage

#### Generic HTML import

Import CSS inside `<head>` section:

`<link rel="stylesheet" href="/node_modules/@zurich/web-sdk/css/styles.min.css" />`

Import JS at the bottom of the `<body>` section:

`<script src="/node_modules/@zurich/web-sdk/js/scripts.min.js"></script>`

#### Angular 11+

Inside your `angular.json` file, add the following to your projects **styles** and **scripts** arrays:

To `projects -> <your-app> -> architect -> build -> options -> styles`:

Add `node_modules/@zurich/web-sdk/css/styles.min.css`

To `projects -> <your-app> -> architect -> build -> options -> scripts`:

Add `node_modules/@zurich/web-sdk/js/scripts.min.js`

Rebuild your app to include the new imports

#### React

Import CSS at the beginning of your app, e.g. at the top of `src/index.js`:

`import '@zurich/web-sdk/css/styles.min.css';`

Alternatively, if using **sass**, import into your root sass file:

`@import '~@zurich/web-sdk/css/styles.min.css';`

Import scripts at the beginning of your app:

`import '@zurich/web-sdk/js/scripts.min.js;`

#### Vue.JS

Import CSS and JS at the top of your main JS file, e.g. `src/main.js`:

`import '@zurich/web-sdk/css/styles.min.css';`
`import '@zurich/web-sdk/js/scripts.min.js;`
