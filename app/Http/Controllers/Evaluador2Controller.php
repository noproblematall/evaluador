<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Evaluador2Controller extends Controller
{
    //
    public function index(Request $request) 
    {
        return view('evaluador2.welcome');
    }
}
