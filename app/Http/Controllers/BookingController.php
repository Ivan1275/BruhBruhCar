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
    public function store(Travel $travel)
    {
        dd($travel->id);
        die();
        // Busca el primer modelo que coincida con las restricciones
         $booking = Booking::firstOrNew([
            'user_id' => Auth::id(),
            'travel_id' => $travel->id
        ]);

        // Si existe, lo borra (cancelar reserva)
        if ($booking->id) {
            $booking->delete();

        // Si no, lo crea (reserva guardada)
        } else {
            $booking->save();
        }
        
        // Aqui va el redirect con inertia
        // return view('travels');

        // Jesus
        //Guardar reserva
        // $booking = new Booking;
        // $booking->user_id = Auth::id();
        // $booking->travel_id = $travel->travelId;
        // $booking->save();

        // //Restar una plaza a los asientos disponibles
        // $travel = Travel::find($travel->travelId);
        // $travel->seats = $travel->seats - 1;
        // $travel->save();

        return redirect('/home');
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
