<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PerfilController extends Controller
{
    //
    public function index(Request $request) 
    {
        $external_url = env('EVALUADOR');

        return view('perfil.welcome', compact('external_url'));
    }
}
