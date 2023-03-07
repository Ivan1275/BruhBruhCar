<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rating>
 */
class RatingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user1_id' => User::all()->unique()->random()->id,
            'user2_id' => User::all()->unique()->random()->id,
            'score' => fake()->numberBetween(1, 5), // 1-5 estrellas
            'comment' => fake()->text(150) // texto de 150 caracteres
        ];
    }
}
