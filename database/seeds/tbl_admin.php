<?php

use Illuminate\Database\Seeder;
use App\Role;
use App\Permission;
use App\User;

class tbl_admin extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tbl_admin')->delete();
        DB::table('tbl_admin')->insert([
            'admin_email'=>'admin@gmail.com',
            'admin_password'=>md5('123456'),
            'admin_name'=>'admin',
            'admin_phone'=>'088888888',
            'level'=>'1',
            'status'=>'1',
        ]);
    }
}
