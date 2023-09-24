const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/evaluador2/evaluador2.js', 'public/js/evaluador')
    .postCss('resources/css/app2.css', 'public/css')
    .js('resources/js/evaluador/evaluador.js', 'public/js/evaluador')
    .postCss('resources/css/app.css', 'public/css');
