<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PerfilController;

Route::get('/', [PerfilController::class, 'index'])->name('index');