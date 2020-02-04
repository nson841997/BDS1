<?php

use Illuminate\Database\Seeder;

class Category extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category')->delete();
        DB::table('category')->insert([
            ['id'=>1,'name'=>'Nhà Đất Bán','slug'=>'nha-dat-ban','parent'=>0],
            ['id'=>2,'name'=>'Bán khách sạn','slug'=>'ban-khach-san','parent'=>1],
            ['id'=>3,'name'=>'Bán nhà riêng','slug'=>'ban-nha-rieng','parent'=>1],
            ['id'=>5,'name'=>'Nhà đất cho thuê','slug'=>'nha-dat-cho-thue','parent'=>0],
            ['id'=>6,'name'=>'Cho thuê khách sạn','slug'=>'cho-thue-khachh-san','parent'=>5],
            ['id'=>7,'name'=>'Cho thuê nhà riêng','slug'=>'cho-thue-nha-rieng','parent'=>5]
        ]);
        
    }
}
