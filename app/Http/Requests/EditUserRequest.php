<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditUserRequest extends FormRequest
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
            'admin_email'=>'required|email|unique:tbl_admin,admin_email,'.$this->idUser.',admin_id',
            'admin_name'=>'required|min:3',
            'admin_phone'=>'required|unique:tbl_admin,admin_phone,'.$this->idUser.',admin_id'
        ];
    }
    public function messages()
    {
        return[
            'admin_email.required'=>'Không được để trống',
            'admin_email.email'=>'Sai định dạng email',
            'admin_email.unique'=>'Email đã được đăng ký',
            'admin_name.required'=>'Không được để trống',
            'admin_name.min'=>'Tên tối thiểu phải 3 ký tự',
            'admin_phone.required'=>'Không được để trống',
            'admin_phone.unique'=>'Số điện thoại đã được đăng ký'
        ];
        
    }
}
