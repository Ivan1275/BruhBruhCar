<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TravelController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ProfileController;
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
    Route::get('/travels/{travel}', [TravelController::class, 'show']);
    Route::get('/new-travel', [TravelController::class, 'create']);
    Route::post('/new-travel', [TravelController::class, 'store']);
    Route::get('/my-travels', [TravelController::class, 'personal']);
    

    // Rutas de Bookings
    Route::get('/bookings', [TravelController::class, 'create']);
    Route::post('/bookings', [BookingController::class, 'store']);

    // Rutas de Profile
    Route::get('/profile', [ProfileController::class, 'index']);
    Route::get('/profile/edit', [ProfileController::class, 'edit']);
    Route::post('/profile/edit', [ProfileController::class, 'update']);
    Route::get('/profile/edit/update-password', [ProfileController::class, 'show_update_pswd']);
    Route::post('/profile/edit/update-password', [ProfileController::class, 'update_pswd']);
    Route::get('/profile/edit/delete', [ProfileController::class, 'show_destroy']);
    Route::post('/profile/edit/delete', [ProfileController::class, 'destroy']);
    Route::get('/profile/show/{id}', [ProfileController::class, 'show']);

});
