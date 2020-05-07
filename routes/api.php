<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/users', 'UserController@index');
    Route::post('/users', 'UserController@store');
    Route::delete('/users/{user}', 'UserController@destroy');
    Route::patch('/users/{user}', 'UserController@update');
    Route::patch('/users/avatar/{user}', 'AvatarController@update');
    Route::patch('/users/password/{user}', 'PasswordController@update');
});


Route::post('login', 'Auth\LoginController@login');
Route::post('register', 'Auth\RegisterController@register');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')
    ->name('password.email');
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
