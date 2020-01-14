<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Session;

class RegisterController extends Controller
{
    public function getRegister()
    {
        return view('backend/register');
    }
    public function postRegister()
    {
        // kiểm tra dữ liệu vào
        $allRequest = $request->all();
        $validatior = $this->validator($allRequest);

        if($validator->fails())
        { 
            // Dữ liệu vào không thỏa điều kiện sẽ thông báo lỗi
		    return redirect('register')->withErrors($validator)->withInput();
        }
        else 
        {
            // Dữ liệu vào hợp lệ sẽ thực hiện tạo người dùng dưới csdl
            if( $this->create($allRequest)) {
                // Insert thành công sẽ hiển thị thông báo
                Session::flash('success', 'Đăng ký thành viên thành công!');
                return redirect('register');
            } 
            else {
                // Insert thất bại sẽ hiển thị thông báo lỗi
                Session::flash('error', 'Đăng ký thành viên thất bại!');
                return redirect('register');
            }
        }
    }
}
