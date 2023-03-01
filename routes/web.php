<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Ruta main
Route::get('/', function () {
    return Inertia::render('Layouts/Guest');
});

//Activa la verificación en las rutas para laravel/ui
Auth::routes(['verify' => true]); 


// Rutas para Usarios SIN loguear
Route::resource('travels', App\Http\Controllers\TravelController::class);


// Rutas para Usarios que NO esten verificados
Route::middleware('auth')->group(function () {

});


// Rutas para Usarios que SI esten verificados
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::resource('bookings', BookingController::class);
});
