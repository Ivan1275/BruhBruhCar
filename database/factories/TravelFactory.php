<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Travel>
 */
class TravelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => User::all()->random()->id,
            'origin' => fake()->randomElement(['Pto. del Rosario', 'Gran Tarajal', 'Playa Blanca']),
            'destination' => fake()->randomElement(['Castillo', 'Morrojable', 'Corralejo']),
            'date' => fake()->dateTimeBetween('now', '+1 month'),
            'hour' => fake()->time('H:i'),
            'seats' => fake()->randomDigitNot(0),
            'price' => fake()->numberBetween(5, 50)
        ];
    }
}
