<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TravelForm extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'origin' => 'required|max:45', // max 45 caracteres
            'destination' => 'required|max:45', // max 45 caracteres
            'date' => 'required|after:now',
            'hour' => 'required',
            'seats' => 'required|gt:0', // el numero de asientos debe ser mayor a 0
            'price' => 'required|gt:0|max:250' // el numero de asientos debe ser mayor a 0
        ];
    }
}
