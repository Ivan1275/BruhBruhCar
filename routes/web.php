<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TravelController;
use App\Http\Controllers\BookingController;
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

Auth::routes(['verify' => true]); //Activa la verificación en las rutas para laravel/ui

// Rutas para Usarios SIN loguear
// Rutas de Travels
Route::get('/travels', [TravelController::class, 'index']);

// Rutas para log in y register
Route::get('/register', function () {
    return Inertia::render('Layouts/Register');
});

Route::get('/login', function () {
    return Inertia::render('Layouts/LogIn');
});

// Rutas para Usarios que NO esten verificados
Route::middleware('auth')->group(function () {
});

// Rutas para Usarios que SI esten verificados
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/home', function () {
        return Inertia::render('Layouts/Authenticated');
    });

    // Rutas de Travels
    Route::get('/travels/{travel}', [TravelController::class, 'show']);
    Route::get('/new-travel', [TravelController::class, 'create']);
    Route::post('/new-travel', [TravelController::class, 'store']);

    // Rutas de Bookings
    Route::get('/bookings', [TravelController::class, 'create']);
    Route::post('/bookings', [BookingController::class, 'store']);
});
