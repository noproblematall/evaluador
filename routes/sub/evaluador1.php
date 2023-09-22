<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Evaluador1Controller;

Route::get('/', [Evaluador1Controller::class, 'index'])->name('index');