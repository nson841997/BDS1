<?php

use Illuminate\Database\Seeder;

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
            [ 'admin_email'=>'admin@gmail.com','admin_password'=>md5('123456'),'admin_name'=>'Msadmin','admin_phone'=>'0888516682','level'=>'1'],
            [ 'admin_email'=>'admin@gmail.com2','admin_password'=>md5('123456'),'admin_name'=>'Msadmin2','admin_phone'=>'0888516681','level'=>'2'],
            [ 'admin_email'=>'admin@gmail.com3','admin_password'=>md5('123456'),'admin_name'=>'Msadmin3','admin_phone'=>'0888516683','level'=>'2'],
            [ 'admin_email'=>'admin@gmail.com4','admin_password'=>md5('123456'),'admin_name'=>'Msadmin4','admin_phone'=>'0888516684','level'=>'3'],
            [ 'admin_email'=>'admin@gmail.com5','admin_password'=>md5('123456'),'admin_name'=>'Msadmin5','admin_phone'=>'0888516685','level'=>'3'],
            [ 'admin_email'=>'admin@gmail.com6','admin_password'=>md5('123456'),'admin_name'=>'Msadmin6','admin_phone'=>'0888516686','level'=>'3'],
           
        ]);
    }
}
