<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebController extends Controller
{
    public function index()
    {
        $name = "Juanjo";
        return view('index', compact('name'));
    }

    public function contact($name = "juanjo")
    {
        return view('contact', compact('name'));
    }
}
