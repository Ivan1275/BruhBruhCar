<?php

namespace App\Queries;

use App\Models\Travel;

class TravelsQuery
{
    public function getAll()
    {
        $query = Travel::with('user')
            ->orderBy('created_at', 'asc')
            ->get();

        return $query;
    }

    public function getBy($filter)
    {
        
        $query = Travel::with('user')
            ->orderBy($filter, 'asc')
            ->get();

        return $query;
    }
}
