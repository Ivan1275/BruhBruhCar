<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index(User $user = null)
    {
        $user = Auth::user();
        return Inertia::render('Profile/Index', ['user' => $user]);
    }
   
    
    public function edit(Request $request)
    {
        // dump($request->user()->profile());
        $user = Auth::user();
        return Inertia::render('Profile/Edit', ['user' => $user]);
    }


    public function update(ProfileUpdateRequest $request)
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();
        $user = Auth::user();
        
        return Inertia::render('Profile/Edit', ['user' => $user])->with('status', 'profile-updated');
    }


    public function show_update_pswd(Request $request)
    {
        $user = Auth::user();
        return Inertia::render('Profile/Update', ['user' => $user]);
    }


    public function update_pswd(Request $request)
    {
        # Validation
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|confirmed',
        ]);


        #Match The Old Password
        if(!Hash::check($request->old_password, auth()->user()->password)){
            return back()->with("error", "Old Password Doesn't match!");
        }


        #Update the new Password
        User::whereId(auth()->user()->id)->update([
            'password' => Hash::make($request->new_password)
        ]);
    }


    public function show_destroy(Request $request)
    {
        $user = Auth::user();
        return Inertia::render('Profile/Delete', ['user' => $user]);
    }

    
    public function destroy(Request $request)
    {
        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        // $real_user = User::where('user_id', $user->id)->get();
        
        // dd($real_user);
        // die(); //has q vaya esto, el id en vez de ser user:id se guarda como id por la cara, sino pillalo sin mas y ala verga

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
    
    
    public function show(Request $profile)
    {
        dd($profile);
        $user = $profile->user;
        return Inertia::render('Travels/Show', ['profile' => $profile, 'user' => $user]);
    }
}
