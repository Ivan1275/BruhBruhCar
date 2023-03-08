<?php

namespace App\Queries;

use App\Models\Travel;

class TravelsQuery
{
    public function getAll()
    {
        $query = Travel::with('user')
            ->orderBy('date', 'asc')
            ->orderBy('hour', 'asc')
            ->get();

        return $query;
    }

    public function getBy($filter)
    {
        $query = Travel::with('user')
            ->orderBy($filter, 'asc')
            ->orderBy('date', 'asc')
            ->orderBy('hour', 'asc')
            ->get();

        return $query;
    }

    public function searchForm($origin, $destination, $date)
    {
        $query = Travel::with('user')
            ->where('origin', $origin)
            ->where('destination', $destination)
            ->where('date', $date)
            ->get();

        return $query;
    }
}
