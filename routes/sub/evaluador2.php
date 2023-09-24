<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Evaluador2Controller;

Route::get('/', [Evaluador2Controller::class, 'index'])->name('index');