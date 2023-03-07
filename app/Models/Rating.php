<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;

    protected $fillable = [
        'score',
        'comment'
    ];

    public function user1()
    {
        return $this->belongsToMany(User::class, 'ratings', 'user1_id', 'user1_id')
        ->withPivot('score', 'comment')
        ->as('rating');
    }

    public function user2()
    {
        return $this->belongsToMany(User::class, 'ratings', 'user1_id', 'user2_id')
        ->withPivot('score', 'comment')
        ->as('rating');
    }
}
