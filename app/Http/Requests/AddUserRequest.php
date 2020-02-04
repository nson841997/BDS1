<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddUserRequest extends FormRequest
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
            'admin_email'=>'required|email|unique:tbl_admin',
            'admin_name'=>'required',
            'admin_phone'=>'required|unique:tbl_admin,admin_phone',
            'admin_password'=>'required|min:5'
        ];
    }
    function messages()
    {
      return[
        'admin_email.required'=>'Vui lòng không được để trống',
        'admin_email.unique'=>'Email đã tồn tại',
        'admin_email.email'=>'Phải là định dạng email',
        'admin_name.required'=>'Vui lòng không được để trống',
        'admin_phone.required'=>'Vui lòng không được để trống',
        'admin_password.min'=>'Mật khẩu tối thiểu phải là 5 ký tự',
        'admin_phone.unique'=>'Số điện thoại đã được đăng ký'

      ];
     }
}
