<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Evaluador2Controller extends Controller
{
    //
    public function index(Request $request) 
    {
        $external_url = env('PERFIL');

        return view('evaluador2.welcome', compact('external_url'));
    }
}
