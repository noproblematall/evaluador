<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Evaluador1Controller extends Controller
{
    //
    public function index(Request $request) 
    {
        return view('evaluador1.welcome');
    }
}
