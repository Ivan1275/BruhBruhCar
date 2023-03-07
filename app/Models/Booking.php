<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'travel_id'
    ];

    public function bookingManage($request)
    {
        // Busco el travel con la id del form
        $travel = Travel::find($request->travelId);

        // Busca el primer modelo que coincida con las restricciones
        $booking = Booking::firstOrNew([
            'user_id' => Auth::id(),
            'travel_id' => $request->travelId
        ]);

        // Si existe una reserva
        if ($booking->id) {
            // La cancela
            $this->deleteBooking($booking, $travel);

        // Si no, 
        } else {
            // La crea
            $this->newBooking($booking, $travel);
        }
    }

    public function deleteBooking($booking, $travel)
    {
        // Cancela la reserva
        $booking->delete();

        // Sumo una plaza a los asientos disponibles 
        $travel->seats = $travel->seats + 1;
        $travel->save();
    }

    public function newBooking($booking, $travel)
    {
        // Crea la reserva
        $booking->save();

        // Resto una plaza a los asientos disponibles
        $travel->seats = $travel->seats - 1;
        $travel->save();
    }
}
