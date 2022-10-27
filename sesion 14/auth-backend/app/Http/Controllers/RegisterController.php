<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        $response['access_token'] = $user->createToken('token_string')->plainTextToken;
        $response['name'] = $user->name;

        return response()->json($response, 200);
    }

    public function login(Request $request)
    {
       if(Auth::attempt(['email' => $request->email, 'password' => $request->password]))
       {
            $user = Auth::user();
            $response['access_token'] = $user->createToken('token_string')->plainTextToken;
            $response['name'] = $user->name;
            return response()->json($response, 200);
       }
       else
       {
            return response()->json('Login Failed', 403);
       }
    }
}
