<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebController;

Route::get('/', [WebController::class, 'index'])->name('index');
Route::view('/about', 'about')->name('about');
Route::get('/services/{id?}', [WebController::class, 'services'])->name('services');
Route::get('/contact/{name}', [WebController::class, 'contact'])->name('contact');
Route::view('/name-example/{name}', 'name-example')->name('name-example');
