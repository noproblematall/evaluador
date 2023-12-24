<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::domain(env('EVALUADOR'))->group(base_path('routes/sub/evaluador.php'));
Route::domain(env('EVALUADOR'))->group(base_path('routes/sub/evaluador2.php'));
Route::domain(env('PERFIL'))->group(base_path('routes/sub/perfil.php'));

