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
        Schema::create('displacement', function (Blueprint $table) {
            $table->id();
            $table->string('displacement_number');
            $table->dateTime('invoice_date');
            $table->foreignId('status_id')->nullable()->index();
            $table->foreignId('customer_id')->nullable()->index();
            $table->foreignId('storefrom_id')->nullable()->index();
            $table->foreignId('storeto_id')->nullable()->index();
            $table->string('comment')->nullable()->index();
            $table->timestamps();
        });

        Schema::create('displacement_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invoice_id')->index();
            $table->foreignId('material_id')->index();
            $table->integer('quantity');
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
