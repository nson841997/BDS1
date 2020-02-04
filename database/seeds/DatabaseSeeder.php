<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        $this->call(Category::class);
        $this->call(tbl_admin::class);
        $this->call(AdminSeeder::class);
      
    }
}
