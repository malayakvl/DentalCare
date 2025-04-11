<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cabinets', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('place_count');
            $table->foreignId('filial_id')->nullable()->index();
            $table->foreignId('clinic_id')->nullable()->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('cabinets');
    }
};
