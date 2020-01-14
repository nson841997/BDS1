<?php

namespace App\Http\Requests\request;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'email'=>'required|min:3',
            'password'=>'required'
        ];  
    }
    public function message()
    {
        return 
        [
            'email.required'=>'Không được phép để trống!',
            'email.min'=>'Email không được nhỏ hơn 3 ký tự',
            'password.required'=>'Mật khẩu không được phép để trống'
        ];
    }
}
