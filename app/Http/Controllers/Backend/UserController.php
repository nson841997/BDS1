<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use DB;

class UserController extends Controller
{
    public function getListUser()
    {
        $data['tbl_admin'] = User::paginate(3);
        return View('backend.user.listuser', $data);
    }
}
