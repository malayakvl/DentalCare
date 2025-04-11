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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('category_id')->nullable()->index();
            $table->foreignId('clinic_id')->nullable()->index();
            $table->integer('price');
            $table->timestamps();
        });

        Schema::create('services_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_id')->index();
            $table->foreignId('material_id')->index();
            $table->integer('quantity');
            $table->integer('price');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
