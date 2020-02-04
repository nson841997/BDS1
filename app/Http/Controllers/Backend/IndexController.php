<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Session;

class IndexController extends Controller
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
    
    function getIndex()
    {
        $this->AuthLogin();
        return View('backend.index');
    }
}
