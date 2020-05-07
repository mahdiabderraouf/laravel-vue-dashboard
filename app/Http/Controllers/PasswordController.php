<?php

namespace App\Http\Controllers;

use App\Rules\CurrentPassword;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }

    public function update(Request $request, User $user)
    {
        $attributes = $request->validate([
            'current_password' => ['required', new CurrentPassword],
            'password' => 'required|string|min:8|confirmed'
        ]);

        $user->update([
            'password' => Hash::make($attributes['password'])
        ]);

        return $user;
    }
}
