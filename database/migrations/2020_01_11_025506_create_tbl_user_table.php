<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblUser', function (Blueprint $table) {
            $table->Increments('UserID');
            $table->string('UserName');
            $table->string('UserPassword');
            $table->string('UserMail');
            $table->string('ActiveCode');
            $table->DateTime('FullName');
            $table->string('BirthDay');
            $table->string('phone');
            $table->string('Address')->nullable();
            $table->integer('RightID');
            $table->DateTime('UserLastTime');
            $table->boolean('UserStatus');
            $table->string('UserAvatar');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tblUser');
    }
}
