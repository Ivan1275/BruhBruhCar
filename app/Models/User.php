<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Auth;
class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function travels()
    {
        return $this->hasMany(Travel::class);
    }

    public function bookings()
    {
        return $this->belongsToMany(Travel::class, 'bookings');
    }

    public function ratingFor()
    {
        // Devuelve un listado con los usuarios por los que se ha votado
        return $this->belongsToMany(User::class, 'ratings', 'user2_id', 'user1_id')
        ->withPivot('score', 'comment')
        ->as('rating');
    }

    public function myRatings()
    {
        // Devuelve un listado con los usuarios que me han votado
        return $this->belongsToMany(User::class, 'ratings', 'user1_id', 'user2_id')
        ->withPivot('score', 'comment')
        ->as('rating');
    }
}
