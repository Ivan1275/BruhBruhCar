<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Travel extends Model
{
    use HasFactory;

    protected $table = 'travels';
    
    protected $fillable = [
        'user_id',
        'origin',
        'destination',
        'date',
        'hour',
        'seats'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
