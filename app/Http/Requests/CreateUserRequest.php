<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'civility' => 'present|string|nullable',
            'gender' => 'required|in:Male,Female',
            'is_admin' => 'required|boolean',
            'birthdate' => 'present|date_format:d/m/Y|nullable',
            'email' => 'sometimes|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed'
        ];
    }
}
