<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TravelController;
use App\Http\Controllers\BookingController;
use Inertia\Inertia;

use App\Models\User;


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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/travel', function () {
    return view('travel');
});

Route::get('/travels', [TravelController::class, 'index']);

Route::post('/addtravel', [TravelController::class, 'store'])->middleware('auth');
Route::post('/reservas/{travel}', [BookingController::class, 'store']);

Auth::routes(['verify' => true]); //Activa la verificación en las rutas para laravel/ui
Route::get('/home', [HomeController::class, 'index'])->middleware(['auth', 'verified'])->name('home');


Route::get('/welcomereact', function () {
    $user = new User();
    $user->name = "Mr. Bean";
    return Inertia::render('Welcome', ['user' => $user]);
});
