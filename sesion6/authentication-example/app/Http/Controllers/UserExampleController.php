<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserExampleController extends Controller
{
    public function exampleAuth()
    {
        $user = Auth::user();
        return view('example-auth', compact('user'));
    }
}
