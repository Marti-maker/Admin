<?php

namespace App\Http\Requests;

use App\Rules\UserRoleRule;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $userId = $this->route()->parameter('user');

        $rules = [
            'email' => ['required', 'email','max:255'],
            'role_id' => ['required', new UserRoleRule],
            'password' => ['confirmed']
        ];

        if($userId > 0) {
            $rules['email'][] = 'unique:users,email,'.$userId.',id';
        } else {
            $rules['email'][] = 'unique:users,email';
            $rules['password'][] = 'required';
        }

        return $rules;
    }
}
