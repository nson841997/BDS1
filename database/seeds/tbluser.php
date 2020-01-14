<?php

use Illuminate\Database\Seeder;

class tbluser extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tbluser')->delete();
        DB::table('tbluser')->insert([
            'UserName'=>'admin',
            'UserPassword'=>bcrypt('123456'),
            'UserMail'=>'admin@gmail.com',
            'ActiveCode'=>1,
            'FullName'=>'Nguyễn Văn Sơn',
            'BirthDay'=>'1997-04-08',
            'phone'=>'0888516682',
            'Address'=>'Nam Định',
            'RightID'=>1,
            'UserLastTime'=>'2020-01-13',
            'UserStatus'=>1,
            'UserAvatar'=>'123.jpg',
        ]);
    }
}
