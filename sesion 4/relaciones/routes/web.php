<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CategoryController;

Route::get('/', [WebController::class, 'index'])->name('index');
Route::view('/about', 'about')->name('about');
Route::get('/services/{id?}', [WebController::class, 'services'])->name('services');
Route::get('/contact/{name}', [WebController::class, 'contact'])->name('contact');
Route::view('/name-example/{name}', 'name-example')->name('name-example');

Route::get('/comments', [CommentController::class, 'index'])->name('comment.index');
Route::get('/comments/create', [CommentController::class, 'create'])->name('comment.create');
Route::post('/comments/store', [CommentController::class, 'store'])->name('comment.store');
Route::get('/comments/edit/{comment}', [CommentController::class, 'edit'])->name('comment.edit');
Route::put('/comments/update/{comment}', [CommentController::class, 'update'])->name('comment.update');
Route::delete('/comments/delete/{comment}', [CommentController::class, 'delete'])->name('comment.delete');


Route::resource('categories', CategoryController::class);
