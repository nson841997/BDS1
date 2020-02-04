<?php

namespace App\Http\Controllers\backend;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use DB;
use Session;

class LoginController extends Controller
{

    public function AuthLogin()
    {   

        
        // $admin_id = $request->session()->get('tbl_admin', 'admin_id');
        

        $admin_id = Session::get('tbl_admin','admin_id');
        if($admin_id)
        {
            return Redirect::to('index');
        }else{
            return Redirect::to('login')->send();
        }
    }

    public function getLogin()
    {
        $this->AuthLogin();
        return view('backend/login');
    }
    public function postLogin(Request $request)
    { 
      // $UserMail = $r->UserMail;
      // $UserPassword = bcrypt($r->UserPassword);
      // $result = DB::table('tbluser')->where('UserMail',$UserMail)->where('UserPassword',$UserPassword)->first();
      // if ($result)
      //   {
      //       // Session::put('UserName',$result->UserName);
      //       return Redirect::to('/admin');
      //   }
      //   else
      //   {
      //       Session::put('message','Tài khoản hoặc mật khẩu sai. Nhập lại');
      //       return Redirect::to('/login');
      //   }

      $admin_email = $request->admin_email;
      $admin_password = md5($request->admin_password);

      $result = DB::table('tbl_admin')->where('admin_email',$admin_email)->where('admin_password',$admin_password)->first();
      if ($result)
      {
          Session::put('admin_name',$result->admin_name);
          Session::put('admin_id',$result->admin_id);
          return Redirect::to('/admin');
      }
      else
      {
          Session::put('message','Tài khoản hoặc mật khẩu sai. Nhập lại');
          return Redirect::to('/login');
      }
    }
    public function  getLogout()
    {
        $this->AuthLogin();
        Session::put('admin_name',null);
        Session::put('admin_id',null);
        return Redirect::to('/login');
    }
}