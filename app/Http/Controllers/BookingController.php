<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Travel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        // Busca el primer modelo que coincida con las restricciones
        $booking = Booking::firstOrNew([
            'user_id' => Auth::id(),
            'travel_id' => $request->travelId
        ]);

        $travel = Travel::find($request->travelId);

        // Si existe una reserva
        if ($booking->id) {

            // Cancela la reserva
            $booking->delete();

            // Sumo una plaza a los asientos disponibles 
            $travel->seats = $travel->seats + 1;
            $travel->save();

        // Si no, 
        } else {

            // crea la reserva
            $booking->save();

            // Resto una plaza a los asientos disponibles
            $travel->seats = $travel->seats - 1;
            $travel->save();
        }

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
