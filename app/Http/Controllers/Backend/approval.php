<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class approval extends Controller
{
    public function approval()
    {
        return View('approval');
    }
}
