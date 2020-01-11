<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblTinTucTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblTinTuc', function (Blueprint $table) {
            $table->Increments('TindangID');
            $table->integer('UserID');
            $table->DateTime('Ngaydangtin');
            $table->DateTime('Songaydang');
            $table->integer('TotalView');
            $table->string('Title');
            $table->integer('District');
            $table->string('StreetName');
            $table->integer('LoaigiaodichID');
            $table->integer('Loaibatdongsan');
            $table->integer('TypeCurrecyID');
            $table->float('Price');
            $table->float('Dientich');
            $table->integer('Sotang');
            $table->integer('Tongsophong');
            $table->text('Description');
            $table->string('image');
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
        Schema::dropIfExists('tblTinTuc');
    }
}
