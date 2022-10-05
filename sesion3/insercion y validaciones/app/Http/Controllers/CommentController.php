<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CommentRequest;
use App\Models\Comment;

class CommentController extends Controller
{
    public function index()
    {
        $comments = Comment::get();
        return view('comment.index', compact('comments'));
    }
    public function create()
    {
        return view('comment.create');
    }
    public function store(CommentRequest $request)
    {
        Comment::create($request->all());
        return redirect()->route('comment.index');
    }
}
