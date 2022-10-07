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

    public function edit(Comment $comment){
        return view('comment.edit', compact('comment'));
    }

    public function update(CommentRequest $request, Comment $comment){
      $comment->fill($request->post())->save();
      return redirect()->route('comment.index');
    }

    public function delete(Comment $comment){
        $comment->delete();
        return redirect()->route('comment.index');
    }
}
