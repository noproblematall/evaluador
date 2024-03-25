<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Evaluador2Controller extends Controller
{
    //
    public function index(Request $request) 
    {
        $external_url = env('PERFIL');

        $broker_detail = array();
        if ($request->has('ref')) {
            $ref = $request->get('ref');
            if (!empty($ref)) {
                $broker_detail = array(
                    "ref" => $ref,
                    "agency_name" => "Brokders del Plata",
                    "broker_name" => "Carolina Reverte",
                    "broker_legend" => "Productor Asesor de Seguros acreditado en Zurich Argentina Compañía de Seguros",
                    "broker_image" => "https://z-eval.s3.amazonaws.com/misc/work.png",
                );
            }
        }
        
        $customer_detail = array(
            'character' => '',
            'name' => '',
            'age' => ''
        );
        if ($request->has('character') && !empty($request->get('character'))) $customer_detail['character'] = $request->get('character');
        if ($request->has('name') && !empty($request->get('name'))) $customer_detail['name'] = $request->get('name');
        if ($request->has('age') && !empty($request->get('age'))) $customer_detail['age'] = $request->get('age');

        return view('evaluador2.welcome', compact('external_url', 'broker_detail', 'customer_detail'));
    }
}
