<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePowerPlantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('power_plants', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('fuel_id');
            $table->string('name');
            $table->integer('output');
            $table->integer('capability');
            $table->time('plant_time');
            $table->date('plant_date');
            $table->foreign('fuel_id')->references('id')->on('fuels')
                ->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('power_plants');
    }
}
