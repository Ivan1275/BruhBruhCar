<?php

namespace App\Queries;

use App\Models\User;
use Illuminate\Http\Request;

class UsersQuery
{
    public function updateAvatar(Request $request, $user)
    {
        $carpeta = 'public/assets/img/';
        $imagen = $request->file('image');
        // dd($imagen); die();
        $nombre_imagen = $imagen->getClientOriginalName();
        $request->file('image')->storeAs($carpeta, $nombre_imagen);
    
        $result = User::where('id', $user->id)->first();
        $result->avatar = $nombre_imagen;
        $result->save();
        return $result;
    }

}
