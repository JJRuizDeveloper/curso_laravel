<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class WebController extends Controller
{
    public function index()
    {
        $posts = Post::get();
        return view('index', compact('posts'));
    }

    public function services($id=1 )
    {
        return view('services', compact('id'));
    }

    public function contact($name)
    {
        return view('contact', compact('name'));
    }

    public function nameExample($name)
    {
        return view('name-example', compact('name'));
    }
}
