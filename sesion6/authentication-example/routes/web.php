<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserExampleController;

Route::view('/', 'welcome');
Route::get('/example-auth', [UserExampleController::class, 'exampleAuth'])->middleware(['auth', 'verified']);
Route::view('/dashboard', 'dashboard')->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
