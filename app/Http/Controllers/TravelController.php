<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use App\Models\Booking;
use App\Models\User;
use App\Queries\TravelsQuery;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\TravelForm;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class TravelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $origin = request()->exists('origin');
        $destination = request()->exists('destination');
        $date = request()->exists('date');

        $origin_value = request()->input('origin');
        $destination_value = request()->input('destination');
        $date_value = request()->input('date');

        $filter = request()->exists('filter');
        $filter_value = request()->input('filter');
        $query = new TravelsQuery;

        // Filtro 
        if ($filter) {
            $travels = $query->getBy($filter_value);
        } else {
            $travels = $query->getAll();
        }

        // Search Form
        if ($date && $date_value == null) {
            $travels = $query->searchForm($origin_value, $destination_value);
        } 
        
        if ($date && $date_value !== null){
            $travels = $query->searchFormall($origin_value, $destination_value, $date_value);
        } 
        
    
        

        // dd($travels);
        return Inertia::render('Travels/Index', ['travels' => $travels]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Travels/New');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TravelForm $request)
    {
        Travel::create($request->all());
        return back()->with(Session::flash('message', 'Tu viaje se ha creado correctamente'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function show(Travel $travel)
    {
        // dd($travel); die();
        
        $booking = Booking::firstOrNew([
            'user_id' => Auth::id(),
            'travel_id' => $travel->id
        ]);

        // dd($booking);

        $user = $travel->user;
        return Inertia::render('Travels/Show', ['travel' => $travel, 'user' => $user, 'booking' => $booking]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function edit(Travel $travel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Travel $travel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {

        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current-password'],
        ]);

        $travel = Travel::find($request->travel_id);
        $travel->delete();

        return Redirect::to('/my-travels')->with(Session::flash('errormessage', 'Tu viaje se ha borrado con exito'));
    }

    public function personal()
    {
        $user_id = Auth::id();
        $travels = Travel::with('user')->orderBy('created_at', 'asc')->where('user_id', $user_id)->get(); //->paginate(6)
        return Inertia::render('Travels/Index', ['travels' => $travels]);
    }
}
