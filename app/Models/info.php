<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class info extends Model
{
    protected $table = "info";
    public function users()
    {
        return $this->belongsTo('App\User', 'id_users', 'id');
    }
}
}
