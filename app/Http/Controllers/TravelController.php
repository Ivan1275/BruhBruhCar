<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use App\Queries\TravelsQuery;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\TravelForm;
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
        $filter = request()->exists('filter');
        $filter_value = request()->input('filter');
        $query = new TravelsQuery;

        if ($filter) {
            switch ($filter_value) {
                case 'fecha':
                    $travels = $query->getBy('date');
                    break;

                case 'hora-salida':
                    $travels = $query->getBy('hour');
                    break;

                case 'asientos':
                    $travels = $query->getBy('seats');
                    break;

                case 'precio':
                    $travels = $query->getBy('price');
                    break;

                default:
                    $travels = $query->getAll();
                    break;
            }
        } else {
            $travels = $query->getAll();
        }

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

        // Aqui iria el redirect con inertia
        // return $this->index();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function show(Travel $travel)
    {
        return Inertia::render('Travels/Show', ['travel' => $travel]);
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
    public function destroy(Travel $travel)
    {
        //
    }

    public function personal()
    {
        $user_id = Auth::id();
        $travels = Travel::with('user')->orderBy('created_at', 'asc')->where('user_id', $user_id)->get(); //->paginate(6)
        return Inertia::render('Travels/Index', ['travels' => $travels]);
    }
}
