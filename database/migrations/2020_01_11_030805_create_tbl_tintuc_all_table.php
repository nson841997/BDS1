<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblTintucAllTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblTintucAll', function (Blueprint $table) {
            $table->Increments('DuanID');
            $table->integer('UserID');
            $table->string('Title');
            $table->string('Image');
            $table->DateTime('Time');
            $table->text('Content');
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
        Schema::dropIfExists('tblTintucAll');
    }
}
