<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\AddUserRequest;
use App\Http\Requests\EditUserRequest;
use Session;
use Illuminate\Support\Facades\Redirect;
use DB;
use App\Models\User;

class UserController extends Controller
{
    public function AuthLogin()
    {      
        $admin_id = Session::get('tbl_admin','admin_id');
        if($admin_id)
        {
            return Redirect::to('index');
        }else{
            return Redirect::to('login')->send();
        }
    }

    public function getListUser()
    {
        $this->AuthLogin();
        // $data = DB::table('tbl_admin')->get();
        $data= DB::table('tbl_admin')->paginate(5);
        // return view('backend.user.listuser',$data);
        return view('backend.user.listuser', compact('data'));
        // return view('backend.user.listuser', ['data' => $data]);
        // echo '<pre>';
        // print_r($data);
        // echo '</pre>';
    }
    public function  add_user()
    {
        $this->AuthLogin();
        return view('backend.user.adduser');
    }
    public function active_user($idUser)
    {
        $this->AuthLogin();
        DB::table('tbl_admin')->where('admin_id',$idUser)->update(['status'=>0]);
        Session::put('message','Thông báo: đã tắt kích hoạt thành công');
        return Redirect('admin/user');
    }
    public function unactive_user($idUser)
    {
        $this->AuthLogin();
        DB::table('tbl_admin')->where('admin_id',$idUser)->update(['status'=>1]);
        Session::put('message','Thông báo: đã kích hoạt thành công');
        return Redirect('admin/user');
    }
    public function getAddUser()
    {
        $this->AuthLogin();
        return view('backend.user.adduser');
    }
    public function postAddUser(AddUserRequest $request)
    {
        $this->AuthLogin();
        $data = array();
//      $data['Tên colum trong db'] = $request->name(trong view adduser)
        $data['admin_email'] = $request->admin_email;
        $data['admin_name'] = $request->admin_name;
        $data['admin_phone'] = $request->admin_phone;
        $data['admin_password'] = md5($request->admin_password);
        $data['level'] = $request->level;
        $data['status'] = $request->status;

//        insert db
        DB::table('tbl_admin')->insert($data);
        Session::put('message','Thêm người dùng thành công');
        return redirect('admin/user/add');
    }

    public function getEditUser($idUser)
    {
        $this->AuthLogin();
        // $data = DB::table('tbl_admin')->where('admin_id',$idUser)->get();
        $data['user'] = User::find($idUser);
        return view('backend.user.edituser', $data);
    }

    public function postEditUser(EditUserRequest $r, $idUser)
    {
        $this->AuthLogin();
	// //Gọi đến file backend.user.listuser với giá trị gửi đi tên admin.edituser = $getData
    //     return view('backend.user.listuser')->with('admin.edituser',$getData);
    
        $user = user::find($idUser);
        $user->admin_email=$r->admin_email;
        if($r->admin_password!='')
        {
            $user->admin_password= md5($r->admin_password);
        }
        
        $user->admin_name= $r->admin_name;
        $user->admin_phone= $r->admin_phone;
        $user->level=$r->level;
        $user->status=$r->status;
        $user->save();

        return redirect()->back()->with('thongbao','Đã sửa thành công!');

    }
    public function getdelUser($idUser)
    {
        $this->AuthLogin();
        user::destroy($idUser);
        return redirect()->back()->with('message',  'Đã xóa thành công!');
    }

}
