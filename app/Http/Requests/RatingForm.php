<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RatingForm extends FormRequest
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
            'score' => 'required',
            'comment' => 'required|max:200'
        ];
    }

    public function messages()
    {
        return [
            'score.required' => 'Añade una valoración',
            'comment.required' => 'Añade un comentario',
            'comment.max' => 'El comentario no puede tener mas de 200 caracteres'
        ];
    }
}
