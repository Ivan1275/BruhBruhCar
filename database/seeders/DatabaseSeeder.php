<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\User;
use \App\Models\Travel;
use \App\Models\Booking;
use \App\Models\Rating;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $new_users = 10;
        $new_travels = 5; 
        $new_bookings = 2;
        $new_ratings = 5;
        
        User::factory($new_users)->create();
        Travel::factory($new_travels)->create();
        Booking::factory($new_bookings)->create();
        Rating::factory($new_ratings)->create();
    }
}
