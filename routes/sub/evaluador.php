<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EvaluadorController;

Route::get('/', [EvaluadorController::class, 'index'])->name('index');