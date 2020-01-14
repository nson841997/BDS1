<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Session;
use Illuminate\Support\Facades\Redirect;
use DB;
session_start();

class UserController extends Controller
{
    public function getListUser()
    {
        $data = DB::table('tbl_admin')->get();
        // $data['tbl_admin'] = User::paginate(3);
        // return view('backend.user.listuser',$data);
        return view('backend.user.listuser', compact('data'));
        // return view('backend.user.listuser', ['data' => $data]);
        // echo '<pre>';
        // print_r($data);
        // echo '</pre>';
    }
    public function  add_user()
    {
        return view('backend.user.');
    }


}
