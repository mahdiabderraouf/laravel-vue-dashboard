<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AvatarController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }


    public function update(Request $request, User $user)
    {
        $attributes = $request->validate([
            'avatar' => 'required|image'
        ]);

        $attributes['avatar'] = '/storage/' . Storage::disk('public')->putFile(
            'avatars',
            $request->file('avatar')
        );

        // Orientate the image
        $avatar = \Image::make(public_path($attributes['avatar']))
            ->orientate()
            ->save();

        // Delete old avatar
        Storage::disk('public')->delete(Str::replaceFirst('/storage/', '', $user->avatar));

        $user->update($attributes);

        return $user;
    }
}
