<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Notifications\UserCreated;
use App\User;
use Carbon\Carbon;

class UserController extends Controller
{

    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return $users;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CreateUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateUserRequest $request)
    {
        $user = $request->validated();

        $user['birthdate'] = $user['birthdate'] ? Carbon::createFromFormat('d/m/Y', $user['birthdate']) : null;

        $user = User::create($user);

        if ($request->get('notify_per_mail'))
            \Notification::send($user, new UserCreated($user, $request->password));

        return response($user, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserRequest  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $attributes = $request->validated();

        // Format the birthdate
        if ($request->has('birthdate'))
            $attributes['birthdate'] = $request->filled('birthdate')
                ? Carbon::createFromFormat('d/m/Y', $attributes['birthdate'])
                : null;

        $user->update($attributes);

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response('Success.', 200);
    }
}
