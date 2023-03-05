<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Travel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Id del usuario
        $user_id = Auth::id();

        // Busco todas las reservas del usuario para asi buscar esos viajes
        $bookings = Booking::where('user_id', $user_id)->get();
        dd($bookings); die();
        
        // 2 maneras de pillar los travels
        // Esta es la ideal, que seria con el HasMany del modelo pillar todos los travels, pero no fulula
        if ($bookings) {
            $travels = $bookings->travels()->with('user')->orderBy('created_at', 'asc')->get();
            return Inertia::render('Travels/Index', ['travels' => $travels]);
        } else{
            $travels = null;
            return Inertia::render('Travels/Index', ['travels' => $travels]);
        }

        // La segunda es hacer un foreach por cada booking de $bookings y arrastrar la array a una variable (lo suyo seria q no)
        $travels = Travel::with('user')->orderBy('created_at', 'asc')->where('id', $bookings)->get();
        return Inertia::render('Travels/Index', ['travels' => $travels]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $booking = new Booking;
        $booking->bookingManage($request);

        return redirect('/travels');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function show(Booking $booking)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function edit(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Booking $booking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy(Booking $booking)
    {
        //
    }
}
