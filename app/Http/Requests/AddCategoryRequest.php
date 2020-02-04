<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddCategoryRequest extends FormRequest
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
            'name'=>'required|min:3|unique:category,name'
        ];
    }
    function messages()
    {
        return [
            'name.required'=> 'không được phép để trống',
            'name.min'=> 'Ít nhất phải là 3 ký tự',
            'name.unique'=>'Danh mục đã tồn tại'
        ];
    }
}
